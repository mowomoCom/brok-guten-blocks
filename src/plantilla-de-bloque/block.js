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
  mwmAtributos
};

/**
 * Variables globales
 */
var GLOBALS = {};

/**
 * Nombre: plantilla-de-bloque
 * Slug: brok-guten-blocks
 * Descripción: Descripcion del bloque
 */
registerBlockType("brok-guten-blocks/plantilla-de-bloque", {
  title: __("plantilla-de-bloque"),
  icon: "editor-textcolor",
  description: __("Descripción del bloque modelo"),
  keywords: [__("bgb"), __("bloque"), __("modelo")],
  attributes: attrs,
  category: "brok-guten-blocks",
  edit: Editor,
  save(props) {
    /**
     * Variables
     */
    const { attributes } = props;
    const {} = attributes;

    const estilos = {};

    /**
     * Funcionalidades
     */

    /**
     * Contenido del front-end del bloque
     */
    return (
      <Fragment>
        <div className={"bgb bgb-plantilla-de-bloque"}>
          <p>Texto de muestra del bloque "plantilla-de-bloque"</p>
        </div>
      </Fragment>
    );
  }
});
