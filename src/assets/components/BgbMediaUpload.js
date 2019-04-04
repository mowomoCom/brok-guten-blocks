/**
 * Dependencias internas de los componentes de mowomo
 */
import mwmFunciones from "../scripts/mwm_funciones";
import mwmIconos from "../mwm_iconos";

/**
 * Dependencias de WordPress
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { MediaUpload } = wp.editor;

/**
 * Clase que permite subir imágenes de diversas formas a WordPress
 */
class BgbMediaUpload extends Component {
    /**
     * Constructor de la clase
     * @param {*} props Propiedades del bloque
     */
    constructor(props) {
        super(...arguments);
        this.props = props;
    }

    /**
     * Funcionalidad que devuelve el contenido de la clase
     */
    render() {
        /**
         * Variables
         */
        const { media, action, result } = this.props;

        /**
         * Funcionalidades
         */

        /**
         * Contenido del editor
         */

        return (
            <MediaUpload
                value={media}
                onSelect={action}
                render={({ open }) => {
                    if (mwmFunciones.verify(media)) {
                        return result;
                    } else {
                        return (
                            <div className={"bgb-media-upload"}>
                                <div className={"bgb-media-upload-icon"}>
                                    {mwmIconos.image_regular}
                                    <span>Imagen</span>
                                </div>
                                <p class="bgb-media-upload-text">
                                    Elige un archivo de tu biblioteca o súbelo
                                    una vez dentro
                                </p>
                                <div className={"bgb-media-upload-buttons"}>
                                    <span
                                        className={"bgb-media-upload-button"}
                                        onClick={open}
                                    >
                                        Abrir galería de imágenes
                                    </span>
                                </div>
                            </div>
                        );
                    }
                }}
            />
        );
    }
}

/**
 * Como no exportemos el componente no funca
 */
export default BgbMediaUpload;
