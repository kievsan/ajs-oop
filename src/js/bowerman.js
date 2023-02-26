// const { default: Character } = require('./character.js');
import Character from './character.js';

export default class Bowerman extends Character {
  constructor(name = '', type = '') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
