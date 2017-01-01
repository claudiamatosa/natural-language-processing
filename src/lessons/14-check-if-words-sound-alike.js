const natural = require('natural');
const soundex = natural.SoundEx;
const metaphone = natural.Metaphone;

function run() {
  console.log('\n14. Check if words sound alike');

  const word1 = 'write';
  const word2 = 'right';

  console.log(`Comparing "${word1}" and "${word2}":`);
  console.log('\nSoundEx comparison:', soundex.compare(word1, word2));
  console.log('\nMetaphone comparison:', metaphone.compare(word1, word2));

  console.log(`Soundex process for "${word1}":`, soundex.process(word1));
  console.log(`Soundex process for "${word2}":`, soundex.process(word2));
  console.log(`Metaphone process for "${word1}":`, metaphone.process(word1));
  console.log(`Metaphone process for "${word2}":`, metaphone.process(word2));
}

run();

module.exports = {
  run,
};
