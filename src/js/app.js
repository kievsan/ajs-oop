import moment from 'moment';
import Character from './character.js';

console.log(moment.now());

const hero = new Character('Hero', 'Bowerman');
console.log(hero.toString());
