import Bowerman from '../bowerman.js';

// new Bowerman();
// bowerman.damage(15);
// bowerman.levelUp();
// bowerman.damage(15);
// bowerman.levelUp();

const heroName = 'hero';
const heroType = 'Bowerman';
const hero = new Bowerman(heroName, heroType);

const startLevel1Expected = {
  health: 100,
  attack: 25,
  defence: 25,
};

const startLevel2Expected = {
  health: 100,
  attack: 30,
  defence: 30,
};

const getResult = (hero1) => ({
  health: hero1.health,
  attack: hero1.attack,
  defence: hero1.defence,
});

test('Bowerman created', () => {
  expect(getResult(hero)).toEqual(startLevel1Expected);
});

test('Bowerman.damage: check health on level-1', () => {
  hero.damage(15);
  const expected = startLevel1Expected;
  expected.health = 88.75;
  expect(getResult(hero)).toEqual(expected);
});

test('Bowerman.levelUp to level-2', () => {
  hero.levelUp();
  expect(getResult(hero)).toEqual(startLevel2Expected);
});

test('Bowerman.damage: check health on level-2', () => {
  hero.damage(15);
  const expected = startLevel2Expected;
  expected.health = 89.5;
  expect(getResult(hero)).toEqual(expected);
});

test('Bowerman.levelUp for dead hero: attack did not change!', () => {
  hero.health = 0;
  const currentAttack = hero.attack;
  try {
    hero.levelUp();
  } catch { /* empty */ } finally {
    expect(hero.attack).toBe(currentAttack);
  }
});

test('Bowerman.levelUp for dead hero: defence did not change!', () => {
  hero.health = 0;
  const currentDefence = hero.defence;
  try {
    hero.levelUp();
  } catch { /* empty */ } finally {
    expect(hero.defence).toBe(currentDefence);
  }
});
