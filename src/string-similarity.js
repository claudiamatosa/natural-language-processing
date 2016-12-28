const natural = require('natural');

console.log('\n6. String similarity');

const string1 = 'soup';
const string2 = 'soups';
const string3 = 'eating';

// Character similarity
console.log('JaroWinkler:', '1 vs 2:', natural.JaroWinklerDistance(string1, string2));
console.log('JaroWinkler:', '1 vs 3:', natural.JaroWinklerDistance(string1, string3));

// Number of deletions and insertions necessary to make the words equal
console.log('Levenshtein:', '1 vs 2:', natural.LevenshteinDistance(string1, string2));
console.log('Levenshtein:', '1 vs 3:', natural.LevenshteinDistance(string1, string3));

// Number of bigrams in common divided by total number of bigrams
console.log('DiceCoefficient:', '1 vs 2:', natural.DiceCoefficient(string1, string2));
console.log('DiceCoefficient:', '1 vs 3:', natural.DiceCoefficient(string1, string3));
