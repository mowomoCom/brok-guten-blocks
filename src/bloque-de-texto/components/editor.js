/**
 * Dependencias internas de los componentes de mowomo
 */
import mwmComponentes from "../../assets/components/index";
import mwmFunciones from "../../assets/scripts/mwm_funciones";
import mwmIconos from "../../assets/mwm_iconos";

/**
 * Dependencias internas del bloque
 */
import Controles from "./controles";
import Inspector from "./inspector";

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
 * Clase que da funcionalidad al Editor
 */
class Editor extends Component {
  /**
   * Constructor de la clase
   * @param {*} props Propiedades del bloque
   */
  constructor(props) {
    super(...arguments);
    this.props = props;
  }

  /**
   * Funcionalidades que se ejecutan cuando se crea el bloque
   */
  componentDidMount() {}

  /**
   * Funcionalidades que se ejecutan cuando se actualiza el bloque
   */
  componentDidUpdate() {}

  /**
   * Funcionalidades de actualización de los atributos
   */

  // Actualización del valor del texto
  onChangeTexto(valor) {
    this.props.setAttributes({ texto: valor });
  }

  /**
   * Funcionalidad devuelve el contenido del editor
   */
  render() {
    /**
     * Variables
     */
    const { attributes } = this.props;
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
     * Contenido del editor
     */

    return (
      <Fragment>
        <Controles {...this.props} />
        <Inspector {...this.props} />
        <div className={"bgb bgb-bloque-de-texto"}>
          <RichText
            tagName={"p"}
            className={"texto"}
            style={estilos.texto}
            value={texto}
            onChange={valor => this.onChangeTexto(valor)}
            placeholder={__("Introduce un texto")}
          />
        </div>
      </Fragment>
    );
  }
}

/**
 * Como no exportemos el componente no funca
 */
export default Editor;
