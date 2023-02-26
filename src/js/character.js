export default class Character {
  static heroTypes = [
    'Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie',
  ];

  constructor(name = '', type = '') {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
  }

  set name(name) {
    const newname = name.toString().trim();
    if (newname.length > 1 && newname.length < 11) {
      this.name0 = newname;
    } else {
      throw new Error(`Unresolved name ${newname}!`);
    }
  }

  get name() {
    return this.name0;
  }

  set type(type) {
    const newtype = type.toString().trim();
    if (Character.heroTypes.includes(newtype)) {
      this.type0 = newtype;
    } else {
      throw new Error(`Unknown type ${newtype} for ${this.name}!`);
    }
  }

  get type() {
    return this.type0;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack = Math.round((this.attack ?? 0) * 1.2);
      this.defence = Math.round((this.defence ?? 0) * 1.2);
      this.health = 100;
    } else {
      this.health = 0;
      throw new Error('It is dead!');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - (this.defence ?? 0) / 100);
      this.health = this.health > 0 ? this.health : 0;
    } else {
      this.health = 0;
      throw new Error('It is dead!');
    }
  }

  toString = () => `${this.type} "${this.name}": ${this.health} (${this.attack ?? '0'}/${this.defence ?? '0'}), level: ${this.level}`;
}
