import Character from '../character.js';

// new Character();
// hero.levelUp();
// hero.damage(500);
// hero.levelUp();

const heroName = 'hero';
const heroType = 'Bowerman';
const hero = new Character(heroName, heroType);

const startLevel1Expected = {
  name: heroName,
  type: heroType,
  level: 1,
  health: 100,
};

const startLevel2Expected = {
  name: heroName,
  type: heroType,
  level: 2,
  health: 100,
};

const getResult = (hero1) => ({
  name: hero1.name,
  type: hero1.type,
  level: hero1.level,
  health: hero1.health,
});

test('hero created', () => {
  expect(getResult(hero)).toEqual(startLevel1Expected);
});

test('hero created: check too long hero name', () => {
  let newHero;
  try {
    newHero = new Character('hero-11111111111111', heroType);
  } catch { /* empty */ } finally {
    expect(newHero).toBe(undefined);
  }
});

test('hero created: check noname hero', () => {
  let newHero;
  try {
    newHero = new Character('', heroType);
  } catch { /* empty */ } finally {
    expect(newHero).toBe(undefined);
  }
});

test('hero created: check notype hero', () => {
  let newHero;
  try {
    newHero = new Character(heroName, 'heroType');
  } catch { /* empty */ } finally {
    expect(newHero).toBe(undefined);
  }
});

test('hero.levelUp to level-2', () => {
  hero.levelUp();
  expect(getResult(hero)).toEqual(startLevel2Expected);
});

test('hero.damage: is dead', () => {
  hero.damage(500);
  expect(hero.health).toBe(0);
});

test('hero.damage: dead hero damage did not change!', () => {
  hero.health = 0;
  try {
    hero.damage(500);
  } catch { /* empty */ } finally {
    expect(hero.health).toBe(0);
  }
});

test('hero.levelUp for dead hero: health is zero and did not change!', () => {
  hero.health = 0;
  try {
    hero.levelUp();
  } catch { /* empty */ } finally {
    expect(hero.health).toBe(0);
  }
});

test('hero.levelUp for dead hero: level did not change!', () => {
  hero.health = 0;
  const currentLevel = hero.level;
  try {
    hero.levelUp();
  } catch { /* empty */ } finally {
    expect(hero.level).toBe(currentLevel);
  }
});

test('hero.toString', () => {
  const newHero = new Character('heroName', heroType);
  const expected = `${heroType} "heroName": 100 (0/0), level: 1`;
  expect(newHero.toString()).toBe(expected);
});
