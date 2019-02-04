#!usr/env/bin node

// Dependencias externas
const fs = require("fs");

// Dependencias internas
const functions = require("./../utils/functions");

// CONFIGURACIÓN DEL SCRIPT
const ficheroPHP = "init.php";

// Run all the code
const run = async () => {
  fs.readFile("./" + ficheroPHP, "utf8", function(err, contents) {
    // Variables
    let arguments = process.argv;
    let newPHPDocumentLeft;
    let newPHPDocumentRight;
    let newJSDocument;
    let blocks = "";

    // Obtenemos el array actual de bloques
    blocks = contents.split("$this->blockNames        = array(");
    newPHPDocumentLeft = blocks[0] + "$this->blockNames        = array(";
    blocks = blocks[1].split(");//Array");
    newPHPDocumentRight = ");//Array" + blocks[1];
    blocks = blocks[0].replace(");", "");
    blocks = blocks.replace(/'/g, "");

    blocks = blocks.split(",");
    blocks[blocks.length - 1] = blocks[blocks.length - 1].replace("\n", "");
    blocks[blocks.length - 1] = blocks[blocks.length - 1].replace("\r", "");
    blocks[blocks.length - 1] = blocks[blocks.length - 1].replace(/ /g, "");

    // Control de argumentos
    if (arguments.length == 3) {
      let nombreBloque = functions.format(arguments[2]);

      // Control de duplicado y formateo
      if (blocks.indexOf(nombreBloque) == -1 && nombreBloque.length <= 30) {
        // Añadimos el bloque
        blocks.push(nombreBloque);
        // Los ordenamos
        blocks = functions.alphabeticallySort(blocks);

        // Parseamos el array
        for (let i = 0; i < blocks.length; i++) {
          blocks[i] = "'" + blocks[i] + "'";
        }

        // Reescribimos el archivo con el array nuevo
        if (
          functions.writeFile(
            "./" + ficheroPHP,
            newPHPDocumentLeft + blocks.toString() + newPHPDocumentRight
          )
        ) {
          // Se ha modificado con éxtio el fichero php
          console.log(
            "> Se ha añadido el bloque '" +
              nombreBloque +
              "' al fichero '" +
              ficheroPHP +
              "'"
          );

          // Preparamos ahora el fichero "./src/index.js"
          fs.readFile("./src/index.js", "utf8", function(err2, contents2) {
            // Preparamos el contenido
            newJSDocument = contents2.split("import")[0];
            blocks.forEach(element => {
              let newElement = element.replace(/'/g, "");
              newJSDocument += "import './" + newElement + "/block';\n";
            });

            // Tratamos de escribir el fichero
            if (functions.writeFile("./src/index.js", newJSDocument)) {
              // Se ha añadido con éxito el fichero
              console.log(
                "> Se ha añadido el bloque '" +
                  nombreBloque +
                  "' al fichero '/src/index.js'"
              );

              // Copiamos la carpeta modelo en la nueva ruta
              if (!fs.existsSync("./src/" + nombreBloque)) {
                fs.mkdirSync("./src/" + nombreBloque);
              }

              if (!fs.existsSync("./src/" + nombreBloque + "/components")) {
                fs.mkdirSync("./src/" + nombreBloque + "/components");
              }

              if (!fs.existsSync("./src/" + nombreBloque + "/styles")) {
                fs.mkdirSync("./src/" + nombreBloque + "/styles");
              }

              functions.copyFile(
                "./bin/assets/bloque-modelo/block.js",
                "./src/" + nombreBloque + "/",
                function() {
                  fs.readFile(
                    "./src/" + nombreBloque + "/block.js",
                    "utf8",
                    function(err, contents) {
                      let newContent = contents.replace(
                        /nombre-del-bloque/g,
                        nombreBloque
                      );
                      functions.writeFile(
                        "./src/" + nombreBloque + "/block.js",
                        newContent
                      );
                    }
                  );
                }
              );
              functions.copyFile(
                "./bin/assets/bloque-modelo/components/controles.js",
                "./src/" + nombreBloque + "/components/",
                function() {}
              );
              functions.copyFile(
                "./bin/assets/bloque-modelo/components/editor.js",
                "./src/" + nombreBloque + "/components/",
                function() {
                  fs.readFile(
                    "./src/" + nombreBloque + "/components/editor.js",
                    "utf8",
                    function(err, contents) {
                      let newContent = contents.replace(
                        /nombre-del-bloque/g,
                        nombreBloque
                      );
                      functions.writeFile(
                        "./src/" + nombreBloque + "/components/editor.js",
                        newContent
                      );
                    }
                  );
                }
              );
              functions.copyFile(
                "./bin/assets/bloque-modelo/components/inspector.js",
                "./src/" + nombreBloque + "/components/",
                function() {}
              );
              functions.copyFile(
                "./bin/assets/bloque-modelo/styles/editor.scss",
                "./src/" + nombreBloque + "/styles/",
                function() {}
              );
              functions.copyFile(
                "./bin/assets/bloque-modelo/styles/style.scss",
                "./src/" + nombreBloque + "/styles/",
                function() {
                  fs.readFile(
                    "./src/" + nombreBloque + "/styles/style.scss",
                    "utf8",
                    function(err, contents) {
                      let newContent = contents.replace(
                        /nombre-del-bloque/g,
                        nombreBloque
                      );
                      functions.writeFile(
                        "./src/" + nombreBloque + "/styles/style.scss",
                        newContent
                      );
                    }
                  );
                }
              );

              // Reajuste de ficheros ya copiados
              console.log(
                "> Se ha configurado el bloque '" +
                  nombreBloque +
                  "' en la ruta '/src/" +
                  nombreBloque +
                  "/'"
              );
            } else {
              console.log(
                "> ERROR: No se ha podido modificar el fichero '/src/index.js'"
              );
            }
          });
        } else {
          console.log(
            "> ERROR: No se ha podido modificar el fichero '" + ficheroPHP + "'"
          );
        }
      } else if (nombreBloque.length > 30) {
        console.log(
          "> ERROR: El nombre del bloque no puede ocupar más de 30 caractéres"
        );
      } else {
        console.log(
          "> El nombre de bloque '" +
            nombreBloque +
            "' ya está en el plugin definido"
        );
      }
    } else if (arguments.length < 3) {
      console.log(
        "> ERROR: Es necesario especificar un nombre de bloque. Ejemplo: 'nombre-de-bloque'"
      );
    } else {
      console.log(
        "> ERROR: Ha introducido más de un argumento, sólo se admite uno"
      );
    }
  });

  console.log("");
};

// Execute the code
run();
