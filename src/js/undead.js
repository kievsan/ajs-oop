// import Character from "./character.js";
const { default: Character } = require('./character.js');

export default class Undead extends Character {
  constructor(name = '') {
    super(name, 'Undead');
    this.attack = 25;
    this.defence = 25;
  }
}
