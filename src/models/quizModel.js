var database = require("../database/config")

function salvarResultado(resultadoFinal, idUsuario) {

    let instrucaoSql = `
        INSERT INTO resultadoQuiz (resultado, fkUsuario)
        VALUES ('${resultadoFinal}', ${idUsuario});
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    salvarResultado
}