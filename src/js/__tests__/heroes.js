const { default: heroesDataList, getResult } = require('./heroes-data.js');

const damage = (points, defence) => points * (1 - defence / 100); // урон

// hero.damage(15);
// hero.levelUp();
// hero.damage(15);
// hero.levelUp();

test.each(heroesDataList)('%s.damage: check health after damage on level-1', (_, hero, expected) => {
  const points = 15;
  hero.damage(points);
  const expected1 = expected.startLevel1Expected;
  expected1.health -= damage(points, expected1.defence);
  expect(getResult(hero)).toEqual(expected1);
});

test.each(heroesDataList)('%s.levelUp to level-2', (_, hero, expected) => {
  hero.levelUp();
  expect(getResult(hero)).toEqual(expected.startLevel2Expected);
});

test.each(heroesDataList)('%s.damage: check health after damage on level-2', (_, hero, expected) => {
  const points = 15;
  hero.damage(points);
  const expected2 = expected.startLevel2Expected;
  expected2.health -= damage(points, expected2.defence);
  expect(getResult(hero)).toEqual(expected2);
});

test.each(heroesDataList)('%s.levelUp for dead hero: ATTACK did not change!', (_, hero) => {
  const hero1 = hero;
  hero1.health = 0;
  const expected = hero1.attack;
  try {
    hero1.levelUp();
  } catch { /* empty */ } finally {
    expect(hero1.attack).toBe(expected);
  }
});

test.each(heroesDataList)('%s.levelUp for dead hero: DEFENCE did not change!', (_, hero) => {
  const hero1 = hero;
  hero1.health = 0;
  const expected = hero1.defence;
  try {
    hero1.levelUp();
  } catch { /* empty */ } finally {
    expect(hero1.defence).toBe(expected);
  }
});
