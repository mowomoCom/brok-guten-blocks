module.exports = {
    arrayActualizado: (cambios, array, index) => {
        let resultado = [];
        for (var i = 0; i < array.length; i++) {
            if (index == i) {
                resultado.push(cambios);
            } else {
                resultado.push(array[i]);
            }
        }
        return resultado;
    },
    verify: variable => {
        if (variable != null && variable != "") {
            return true;
        } else {
            return false;
        }
    },
    validURL: str => {
        var pattern = new RegExp(
            "^(https?:\\/\\/)?" + // protocol
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
                "(\\#[-a-z\\d_]*)?$",
            "i"
        ); // fragment locator
        return !!pattern.test(str);
    }
};
