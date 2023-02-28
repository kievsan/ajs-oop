/* eslint-disable no-plusplus */
import Bowerman from '../bowerman.js';
import Daemon from '../daemon.js';
import Magician from '../magician.js';
import Swordsman from '../swordsman.js';
import Undead from '../undead.js';
import Zombie from '../zombie.js';

// new hero();

const heroName = (number) => `hero-${number}`;
let i = 0;
const heroesDataList = [
  ['Bowerman', new Bowerman(heroName(i++)), {
    startLevel1Expected: {
      type: 'Bowerman', health: 100, attack: 25, defence: 25,
    },
    startLevel2Expected: {
      type: 'Bowerman', health: 100, attack: 30, defence: 30,
    },
  }],
  ['Daemon', new Daemon(heroName(i++)), {
    startLevel1Expected: {
      type: 'Daemon', health: 100, attack: 10, defence: 40,
    },
    startLevel2Expected: {
      type: 'Daemon', health: 100, attack: 12, defence: 48,
    },
  }],
  ['Magician', new Magician(heroName(i++)), {
    startLevel1Expected: {
      type: 'Magician', health: 100, attack: 10, defence: 40,
    },
    startLevel2Expected: {
      type: 'Magician', health: 100, attack: 12, defence: 48,
    },
  }],
  ['Swordsman', new Swordsman(heroName(i++)), {
    startLevel1Expected: {
      type: 'Swordsman', health: 100, attack: 40, defence: 10,
    },
    startLevel2Expected: {
      type: 'Swordsman', health: 100, attack: 48, defence: 12,
    },
  }],
  ['Undead', new Undead(heroName(i++)), {
    startLevel1Expected: {
      type: 'Undead', health: 100, attack: 25, defence: 25,
    },
    startLevel2Expected: {
      type: 'Undead', health: 100, attack: 30, defence: 30,
    },
  }],
  ['Zombie', new Zombie(heroName(i++)), {
    startLevel1Expected: {
      type: 'Zombie', health: 100, attack: 40, defence: 10,
    },
    startLevel2Expected: {
      type: 'Zombie', health: 100, attack: 48, defence: 12,
    },
  }],
];

export default heroesDataList;

export const getResult = (hero) => ({
  type: hero.type,
  health: hero.health,
  attack: hero.attack,
  defence: hero.defence,
});

test.each(heroesDataList)('%s created', (_, hero, expected) => {
  expect(getResult(hero)).toEqual(expected.startLevel1Expected);
});
