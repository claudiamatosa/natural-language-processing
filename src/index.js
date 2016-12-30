const fs = require('fs');
const path = require('path');

const lessonsFolder = path.join(__dirname, 'lessons');

const files = fs.readdir(lessonsFolder, (error, files) => {
  if (error) {
    console.error(error);
  } else {
    files.forEach(file => {
      if (isFile(file)) {
        const lesson = require(path.join(lessonsFolder, file));

        if (typeof lesson.run !== 'function') {
          throw new Error('run method must be implemented in each lesson');
        }

        lesson.run();
      }
    });
  }
});

function isFile(file) {
  const location = path.join(lessonsFolder, file);
  const stats = fs.lstatSync(location);
  return stats.isFile();
}
