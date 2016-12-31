const path = require('path');
const natural = require('natural');
const { getDataFile } = require('../utilities');

const settings = {
  classifierLocation: path.join(__dirname, '..', 'data', 'saved-classifier.json'),
  // Use 'BayesClassifier' for less complex comparisons
  classifierType: 'LogisticRegressionClassifier',
}

const classifier = new natural[settings.classifierType]();

function run() {
  console.log('\n8. Classify json data');

  try {
    const trainingData = getDataFile('training-data.json');

    train(trainingData);
  } catch (e) {
    console.error(e);
  }
}

function train(data) {
  console.log('Setting up training data');

  data.forEach(item => {
    classifier.addDocument(item.text, item.label);
  });

  console.log('Training started at', new Date().toTimeString());
  classifier.train();
  console.log('Training ended at', new Date().toTimeString());

  loadTestData();
}

function loadTestData() {
  console.log('Loading test data');

  try {
    const testData = getDataFile('test-data.json');

    testClassifier(testData);
  } catch (e) {
    console.error(e);
  }
}

function testClassifier(data) {
  console.log('Testing classifier');

  let numCorrect = 0;

  data.forEach(item => {
    const guess = classifier.classify(item.text);

    if (guess === item.label) {
      numCorrect++;
    }
  });

  console.log('Correct percentage:', numCorrect / data.length);

  saveClassifier(classifier);
}

function saveClassifier(classifier) {
  classifier.save(settings.classifierLocation, (error, classifier) => {
    if (error) {
      console.error(error);
    } else {
      console.info('Classifier saved');
    }
  });
}

module.exports = {
  run,
  settings,
};
