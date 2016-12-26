const natural = require('natural');
const nounInflector = new natural.NounInflector();
const countInflector = natural.CountInflector;

console.log('\n3. Pluralising with inflectors');

console.log('pluralize:', nounInflector.pluralize('soup'));
console.log('singularize:', nounInflector.singularize('cabbages'));

console.log('counting:');

for (let i = 1; i <= 10; i++) {
  console.log(countInflector.nth(i));
}
