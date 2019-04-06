/**
 * Dependencias internas de los componentes de mowomo
 */
import mwmComponentes from "../../assets/components/index";
import mwmFunciones from "../../assets/scripts/mwm_funciones";
import mwmIconos from "../../assets/mwm_iconos";

/**
 * Dependencias de WordPress
 * Estas son unas dependencias básicas, rellenar con las que haga falta
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InspectorControls, ColorPalette, URLInput } = wp.editor;
const { PanelBody, SelectControl, ToggleControl } = wp.components;

/**
 * Clase que define al componente "Inspector"
 */
class Inspector extends Component {
  /**
   * Constructor de la clase "Inspector"
   * @param {*} props Propiedades provenientes de la sección "edit" del bloque
   */
  constructor(props) {
    super(...arguments);
  }

  /**
   * Funcionalidades de actualización de los atributos
   */

  /**
   * Ejecución de este componente
   */
  render() {
    /**
     * Variables que se usan dentro del componente
     */
    const { attributes, isSelected, setAttributes } = this.props;
    const {} = attributes;

    /**
     * Funcionalidades
     */

    /**
     * Retorno del componente a la sección de "edit"
     */
    return (
      isSelected && (
        <Fragment>
          <InspectorControls>{/* Contenido del inspector */}</InspectorControls>
        </Fragment>
      )
    );
  }
}

/**
 * Como no exportemos el componente no funca
 */
export default Inspector;
