// import Character from "./character.js";
const { default: Character } = require('./character.js');

export default class Zombie extends Character {
  constructor(name = '') {
    super(name, 'Zombie');
    this.attack = 40;
    this.defence = 10;
  }
}
