/**
 * Converte todos os caracteres do texto especificado para letras maiúsculas
 * @param {string} text 
 * @returns {Promise<string>} texto em maiúsculo
 */
module.exports.upper = async function (text) {
    return text?.toUpperCase() ?? null;
}