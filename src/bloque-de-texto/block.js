/**
 * Archivo principal del bloque que arranca el código
 */

/**
 * Dependencias internas de los componentes de mowomo
 */
import mwmComponentes from "../assets/components/index";
import mwmAtributos from "../assets/scripts/mwm_atributos";
import mwmFunciones from "../assets/scripts/mwm_funciones";
import mwmIconos from "../assets/mwm_iconos";
import "../assets/styles/mwm_estilos_editor.scss";
import "../assets/styles/mwm_estilos_inspector.scss";

/**
 * Dependencias internas del bloque
 */
import Editor from "./components/editor";
import "./styles/editor.scss";
import "./styles/style.scss";

/**
 * Dependencias de librerías
 */

/**
 * Dependencias de WordPress
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;

/**
 * Atributos del bloque
 */
const attrs = {
  mwmAtributos,
  texto: {
    type: "string",
    source: "html",
    selector: ".texto",
    default: "Texto del bloque"
  },
  colorTexto: {
    type: "string",
    default: "#181818"
  },
  subrayadoTexto: {
    type: "boolean",
    default: false
  }
};

/**
 * Variables globales
 */
var GLOBALS = {};

/**
 * Nombre: Bloque de texto
 * Slug: brok-guten-blocks
 * Descripción: Bloque que muestra un texto
 */
registerBlockType("brok-guten-blocks/bloque-de-texto", {
  title: "Bloque de texto",
  icon: "editor-textcolor",
  attributes: attrs,
  category: "brok-guten-blocks",
  edit: Editor,
  save(props) {
    /**
     * Variables
     */
    const { attributes } = props;
    const { texto, colorTexto, subrayadoTexto } = attributes;

    const estilos = {
      texto: {
        color: colorTexto,
        backgroundColor: subrayadoTexto ? "#ffff80" : null,
        display: subrayadoTexto ? "inline-block" : "block"
      }
    };

    /**
     * Funcionalidades
     */

    /**
     * Contenido del front-end del bloque
     */
    return (
      <Fragment>
        <div className={"bgb bgb-bloque-de-texto"}>
          <RichText.Content
            tagName={"p"}
            className={"texto"}
            style={estilos.texto}
            value={texto}
          />
        </div>
      </Fragment>
    );
  }
});
