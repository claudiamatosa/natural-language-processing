const natural = require('natural');
const { settings: { classifierLocation, classifierType } } = require('./8-classify-json-data');

function run() {
  console.log('\n9. Loading a classifier from a file');

  natural[classifierType].load(classifierLocation, null, (error, classifier) => {
    if (error) {
      console.error(error, classifier);
    } else {
      const testComment = "The table decided that there would be no budget for mince pies next year.";
      console.log(classifier.classify(testComment));
    }
  });
}

module.exports = {
  run,
};
