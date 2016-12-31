const fs = require('fs');
const path = require('path');

const lessonsFolder = path.join(__dirname, 'lessons');

const files = fs.readdir(lessonsFolder, (error, files) => {
  if (error) {
    console.error(error);
  } else {
    const sortedFiles = files.sort((a, b) => sortFilesAscending(a, b));

    sortedFiles.forEach(file => {
      if (isFile(file)) {
        const lesson = require(path.join(lessonsFolder, file));

        if (typeof lesson.run !== 'function') {
          throw new Error(`run method not implemented in lesson ${file}`);
        }

        lesson.run();
      }
    });
  }
});

function sortFilesAscending(a, b) {
  const aNumber = getLessonNumber(a);
  const bNumber = getLessonNumber(b);

  if (aNumber < bNumber) {
    return -1;
  } else if (aNumber > bNumber) {
    return 1;
  }

  return 0;
}

function getLessonNumber(fileName) {
  return parseInt(fileName.split('-')[0]);
}

function isFile(file) {
  const location = path.join(lessonsFolder, file);
  const stats = fs.lstatSync(location);
  return stats.isFile();
}
