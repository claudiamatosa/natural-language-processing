const natural = require('natural');
const { getDataFile } = require('../utilities');

function run() {
  console.log('\n13. Spell check');

  const tokenizer = new natural.WordTokenizer();
  const text = getDataFile('lots-of-words.txt');
  const corpus = tokenizer.tokenize(text);
  const spellcheck = new natural.Spellcheck(corpus);

  const sentence = "My projact waz to make a birtday cake with a leif on top.";
  const incorrectWords = tokenizer.tokenize(sentence).filter(word => !spellcheck.isCorrect(word));

  incorrectWords.forEach(word => {
    console.log(
      `You mispelled "${word}", try one of the following alternatives:`,
      spellcheck.getCorrections(word).join(', ')
    );
  });
}

module.exports = {
  run,
};
