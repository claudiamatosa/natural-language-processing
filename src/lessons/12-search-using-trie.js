const natural = require('natural');
const { getDataFile } = require('../utilities');

function run() {
  console.log('\n12. Search using tries');

  const cupcakes = getTrieWithCupcakes();

  console.log('Is "Smelly Cat" in the trie?', cupcakes.contains('Smelly Cat'));
  console.log('Is "Pink Lemon" in the trie?', cupcakes.contains('Pink Lemon'));

  console.log('Cupcakes starting with "Pink"', cupcakes.keysWithPrefix('Chocolate'));

  console.log('Cupcakes names contained in "Pink Lemon"', cupcakes.findMatchesOnPath('Pink Lemon Cheesecake'));
}

function getTrieWithCupcakes() {
  const trie = new natural.Trie();
  const cupcakeNames = getDataFile('cupcake-names.json').list;

  trie.addStrings(cupcakeNames);

  return trie;
}

module.exports = {
  run,
};
