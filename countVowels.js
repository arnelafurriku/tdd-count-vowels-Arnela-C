function countVowels(str) {
  let count = 0;
  const s = (str || '').toLowerCase();
  for (const ch of s) {
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      count++;
    }
  }
  return count;
}
module.exports = countVowels;
