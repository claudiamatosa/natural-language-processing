const fs = require('fs');
const path = require('path');
const { dataFolder } = require('./settings');

function getDataFile(name) {
  const data = fs.readFileSync(path.join(dataFolder, name));

  if (data && getExtension(name) === 'json') {
    return JSON.parse(data);
  }

  return data;
}

function getExtension(name) {
  const parts = name.split('.');
  return parts.pop();
}

module.exports = {
  getDataFile,
};
