const natural = require('natural');
const stemmer = natural.PorterStemmer;

function run() {
  console.log('\n2. Stemming');

  console.log(stemmer.stem('mangoes'));
  console.log(stemmer.stem('hearing'));
  console.log(stemmer.stem('sadness'));

  const sentence = 'I am eating cakes as if my life depended on it';

  console.log(stemmer.tokenizeAndStem(sentence));
}

module.exports = {
  run,
};
