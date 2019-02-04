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
const { BlockControls } = wp.editor;
const { Toolbar } = wp.components;

/**
 * Clase que define al componente "Controles"
 */
class Controles extends Component {
  /**
   * Constructor de la clase "Controles"
   * @param {*} props Propiedades provenientes de la sección "edit" del bloque
   */
  constructor(props) {
    super(...arguments);
  }

  /**
   * Funcionalidades de actualización de los atributos
   */
  onClickSubrayadoTexto(valor) {
    this.props.setAttributes({ subrayadoTexto: valor });
  }

  /**
   * Ejecución de este componente
   */
  render() {
    /**
     * Variables que se usan dentro del componente
     */
    const { attributes, isSelected, setAttributes } = this.props;
    const { subrayadoTexto } = attributes;

    /**
     * Funcionalidades
     */

    /**
     * Todos los controles propios con sus funcionalidades
     */
    const customControls = [
      {
        icon: "admin-customizer",
        title: __("Texto subrayado"),
        onClick: () => this.onClickSubrayadoTexto(!subrayadoTexto),
        isActive: subrayadoTexto === true
      }
    ];

    /**
     * Retorno del componente a la sección de "edit"
     */
    return (
      isSelected && (
        <Fragment>
          <BlockControls>
            <Toolbar controls={customControls} />
          </BlockControls>
        </Fragment>
      )
    );
  }
}

/**
 * Como no exportemos el componente no funca
 */
export default Controles;
