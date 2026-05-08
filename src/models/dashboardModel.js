var database = require("../database/config")


// PRA KPIS
function buscarUsuarios() {
    var instrucaoSql = `
        SELECT COUNT(*) AS total
        FROM usuario;`;
    return database.executar(instrucaoSql);
}

function buscarLingTeatralDominante() {
    var instrucaoSql = `
        SELECT resultado FROM resultadoQuiz
        GROUP BY resultado
        ORDER BY COUNT(*)DESC LIMIT 1;`;
    return database.executar(instrucaoSql);
}

function buscarTipoPerfilDominante() {
    var instrucaoSql = `
        SELECT perfil AS perfilPredominante FROM usuario 
	    GROUP BY perfil
        ORDER BY perfilPredominante LIMIT 1;`;
    return database.executar(instrucaoSql);
}

function buscarQtdQuizzesFeitos() {
    var instrucaoSql = `
        SELECT COUNT(*) as qtdQuizzesFeitos FROM resultadoQuiz;`;
    return database.executar(instrucaoSql);
}


// PRA GRAFICOS 
function buscarResultadosQuiz() {
    var instrucaoSql = `
        SELECT resultado, COUNT(*) AS total
        FROM resultadoQuiz
        GROUP BY resultado;`;
    return database.executar(instrucaoSql);
}

module.exports = {
    //PRA KPIS
    buscarUsuarios,
    buscarTipoPerfilDominante,
    buscarQtdQuizzesFeitos,
    buscarLingTeatralDominante,

    // PRA GRAFICOS
    buscarResultadosQuiz

}