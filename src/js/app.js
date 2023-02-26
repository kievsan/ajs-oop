import moment from 'moment';
import Character from './character.js';

console.log(moment.now());

const hero = new Character('heroName', 'Bowerman');
console.log(hero.toString());

// const { default: Bowerman } = require('./bowerman.js');
// import Bowerman from './bowerman.js';
// import Daemon from './daemon.js';
// import Magician from './magician.js';
// import Swordsman from './swordsman.js';
// import Undead from './undead.js';
// import Zombie from './zombie.js';
