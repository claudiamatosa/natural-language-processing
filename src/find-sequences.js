const natural = require('natural');
const NGrams = natural.NGrams;

console.log('\n4. Find sequences');

const string = `Yesterday, Baggins the dog went to the park and ate
found a hot dog on the floor. He was not afraid to consume his own kind.`;

console.log('\nbigrams:', NGrams.bigrams(string, '[start]', '[end]'));
console.log('\ntrigrams:', NGrams.trigrams(string));
console.log('\nngrams:', NGrams.ngrams(string, 4));
