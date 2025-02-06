const getHealthStatus = require('../src/health_indicator');

describe('getHealthStatus function', () => {
  test('should return "healthy" when health is greater than 50', () => {
    const character = { name: 'Маг', health: 90 };
    expect(getHealthStatus(character)).toBe('healthy');
  });

  test('should return "wounded" when health is between 15 and 50', () => {
    const character = { name: 'Воин', health: 40 };
    expect(getHealthStatus(character)).toBe('wounded');

    const character2 = { name: 'Лучник', health: 15 };
    expect(getHealthStatus(character2)).toBe('wounded');
  });

  test('should return "critical" when health is less than 15', () => {
    const character = { name: 'Разбойник', health: 10 };
    expect(getHealthStatus(character)).toBe('critical');
  });
});