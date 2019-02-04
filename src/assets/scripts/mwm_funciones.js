/**
 * Funciones de útil uso tanto para los componentes de mowomo para los componentes del usuario
 */

module.exports = {
  arrayActualizado: (cambios, array, index) => {
    let resultado = [];
    for (var i = 0; i < array.length; i++) {
      if(index == i) {
        resultado.push(cambios);
      } else {
        resultado.push(array[i]);
      }
    }
    return resultado;
  }
};
