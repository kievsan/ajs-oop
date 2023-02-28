// import Character from "./character.js";
const { default: Character } = require('./character.js');

export default class Magician extends Character {
  constructor(name = '') {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
