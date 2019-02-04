/**
 * Funcionalidades que se repiten en todos los bloques para optimizar cada bloque por separado
 */

// Dependencias externas
const fs = require("fs");
const path = require("path");
var rimraf = require("rimraf");

// Funcionalidades
module.exports = {
  // copyFile: Copia un fichero "file" a la dirección "dir2"
  copyFile: (file, dir2, fn) => {
    let f = path.basename(file);
    let source = fs.createReadStream(file);
    let dest = fs.createWriteStream(path.resolve(dir2, f));

    source.pipe(dest);
    source.on("end", function() {
      fn();
    });
    source.on("error", function(err) {
      console.log(err);
    });
  },
  format: str => {
    str = str.toLowerCase();
    str = str.replace(/[^A-Z0-9]+/gi, "-");

    if (str[0] == "-") {
      str = str.substr(1, str.length - 1);
    }
    if (str[str.length - 1] == "-") {
      str = str.substr(0, str.length - 1);
    }
    return str;
  },
  alphabeticallySort: array => {
    array.sort(function(str1, str2) {
      if (str1 < str2) {
        return -1;
      } else if (str1 > str2) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  },
  writeFile: (file, content) => {
    fs.writeFile(file, content, function(err) {
      if (err) {
        return false;
      }
    });
    return true;
  },
  removeDirectory: directory => {
    rimraf(directory, function() {});
  }
};
