#!usr/env/bin node

// External dependencies
const fs = require("fs");
const ncp = require("ncp").ncp;

// Internal dependencies
const functions = require("./lib/functions");

// Run all the code
const run = async () => {
  fs.readFile("./init.php", "utf8", function(err, contents) {
    let blockName = contents.split(" * @package ");
    blockName = blockName[1].split(" ");
    blockName = blockName[0].split("\n");
    blockName = blockName[0].split("\r");
    blockName = blockName[0];

    if (!fs.existsSync("./exports/")) {
      fs.mkdirSync("./exports/");
    }

    if (!fs.existsSync("./exports/plugin-" + blockName + "/")) {
      fs.mkdirSync("./exports/plugin-" + blockName + "/");
    }

    if (!fs.existsSync("./exports/plugin-" + blockName + "/build/")) {
      fs.mkdirSync("./exports/plugin-" + blockName + "/build/");
    }

    ncp("./build/", "./exports/plugin-" + blockName + "/build/", function(err) {
      if (err) {
        return console.error(err);
      }
    });
    functions.copyFile(
      "./init.php",
      "./exports/plugin-" + blockName + "/",
      function() {
        fs.rename(
          "./exports/plugin-" + blockName + "/init.php",
          "./exports/plugin-" + blockName + "/generador-" + blockName + ".php",
          err => {
            if (err) console.log("ERROR: " + err);
          }
        );
      }
    );

    console.log("> Exportación lista\n");
  });
};

// Execute the code
run();
