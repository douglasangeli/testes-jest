const { upper } = require('../utils/text-utils')

/**
 * Cria uma mensagem de Hello personalizada
 * @param {string} pessoa 
 * @returns {Promise<string>} mensagem de hello personalizada
 */
module.exports.helloFor = async function (pessoa) {
    return `Hello World for ${await upper(pessoa)}`
}