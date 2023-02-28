// import Character from "./character.js";
const { default: Character } = require('./character.js');

export default class Daemon extends Character {
  constructor(name = '') {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
