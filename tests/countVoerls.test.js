const countVowels = require('./countVowels');

describe('countVowels', () => {
  test('counts vowels in a typical word', () => {
    expect(countVowels('hello')).toBe(2);
  });

  test('is case-insensitive', () => {
    expect(countVowels('AEIOU')).toBe(5);
    expect(countVowels('LaunchCode')).toBe(5);
  });

  test('returns 0 for empty string', () => {
    expect(countVowels('')).toBe(0);
  });

  test('returns 0 when no standard vowels exist', () => {
    expect(countVowels('rhythm')).toBe(0);
  });
});
