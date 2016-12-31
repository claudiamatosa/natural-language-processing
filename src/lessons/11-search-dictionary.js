const natural = require('natural');
const wordnet = new natural.WordNet();

function run() {
  console.log('\n11. Search WordNet db');

  const word = 'soup';

  wordnet.lookup(word, (results) => {
    results.forEach((result) => {
      console.log(
        '\n',
        result.synsetOffset,
        result.pos,
        result.synonyms,
        result.gloss
      );
    });
  });
}

module.exports = {
  run,
};
