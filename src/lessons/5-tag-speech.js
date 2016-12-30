const natural = require('natural');
const baseSettings = require('../settings');
const Tagger = natural.BrillPOSTagger;

const baseFolder = `${baseSettings.moduleFolder}/lib/natural/brill_pos_tagger`;

const settings = {
  rules: `${baseFolder}/data/English/tr_from_posjs.txt`,
  lexicon: `${baseFolder}/data/English/lexicon_from_posjs.json`,
  defaultCategory: 'N',
};

function run() {
  console.log('\n5. Tag speech');

  const string = 'Little Jack only enjoyed eating his lunch when it was delicious.';

  const tagger = new Tagger(
    settings.lexicon,
    settings.rules,
    settings.defaultCategory,
    (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(tagger.tag(string.split(' ')));
      }
    }
  );
}

module.exports = {
  run,
};
