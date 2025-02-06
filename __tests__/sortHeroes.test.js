const sortHeroesByHealth = require('../src/sortHeroes');

describe('sortHeroesByHealth function', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sortedHeroes = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    expect(sortHeroesByHealth(heroes)).toEqual(sortedHeroes);
  });

  test('should handle empty array', () => {
    const heroes = [];
    const sortedHeroes = [];

    expect(sortHeroesByHealth(heroes)).toEqual(sortedHeroes);
  });

  test('should throw error when input is not an array', () => {
    expect(() => sortHeroesByHealth(null)).toThrow('Input must be an array');
    expect(() => sortHeroesByHealth('not an array')).toThrow('Input must be an array');
  });

  test('should handle equal health values', () => {
    const heroes = [
      { name: 'воин', health: 50 },
      { name: 'целитель', health: 50 },
    ];

    const sortedHeroes = [
      { name: 'воин', health: 50 },
      { name: 'целитель', health: 50 },
    ];

    expect(sortHeroesByHealth(heroes)).toEqual(sortedHeroes);
  });
});