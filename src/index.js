const { resolve } = require('path');
const glob = require('glob');
const fs = require('fs');

module.exports = function alias(options = {}) {
  const { path, extension, entries } = options;
  let rootPath = '';
  if (path) {
    rootPath = path + '/**/*';
  } else {
    rootPath = 'dist/**/*';
  }

  function renameFiles(filePath) {
    fs.readFile(resolve(__dirname, filePath), 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        if (entries.length) {
          entries.forEach(async ({ from, to }) => {
            let result = await data.replaceAll(from, to);
            fs.writeFile(
              resolve(__dirname, filePath),
              result,
              'utf8',
              function (err) {
                if (err) return console.log(err);
              }
            );
          });
        }
      }
    });
  }

  return {
    name: 'rename-absolute-imports',
    writeBundle: async () => {
      glob(rootPath, function (err, res) {
        if (err) {
          console.error(err);
        } else {
          res.forEach(async (filePath) => {
            if (extension.length) {
              extension.forEach((e) => {
                if (filePath.endsWith(e)) {
                  renameFiles(filePath);
                }
              });
            } else {
              if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
                renameFiles(filePath);
              }
            }
          });
        }
      });
    },
  };
};
