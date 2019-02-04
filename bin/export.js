#!usr/env/bin node

// External dependencies
const fs = require("fs");

// Internal dependencies
const functions = require("./../utils/functions");

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

    functions.copyFile(
      "./build/block.build.js",
      "./exports/plugin-" + blockName + "/build/",
      function() {}
    );
    functions.copyFile(
      "./build/block.editor.build.css",
      "./exports/plugin-" + blockName + "/build/",
      function() {}
    );
    functions.copyFile(
      "./build/block.style.build.css",
      "./exports/plugin-" + blockName + "/build/",
      function() {}
    );
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

    console.log("> Exportación lista");

    console.log("> Arbol de exportación:\n");
    console.log("+ ./exports/");
    console.log("|---+ /plugin-" + blockName + "/");
    console.log("|---|---+ /build/");
    console.log("|---|---|---> block.build.js");
    console.log("|---|---|---> block.editor.build.css");
    console.log("|---|---|---> block.style.build.css");
    console.log("|---|---> generador-" + blockName + ".php");

    console.log("");
  });
};

// Execute the code
run();
