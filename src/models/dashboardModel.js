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

function buscarResultadosPerfis() {
    var instrucaoSql = `
        SELECT perfil, COUNT(*) AS total
            FROM usuario
            GROUP BY perfil;`;
    return database.executar(instrucaoSql);
}

function buscarResulLingPerfil() {
    var instrucaoSql = `
        SELECT usuario.perfil, resultadoQuiz.resultado, COUNT(*) as qtd FROM usuario
            JOIN resultadoQuiz ON fkUsuario = idUsuario
            GROUP BY perfil, resultado
            ORDER BY perfil, qtd DESC;`;
    return database.executar(instrucaoSql);
}

module.exports = {
    //PRA KPIS
    buscarUsuarios,
    buscarTipoPerfilDominante,
    buscarQtdQuizzesFeitos,
    buscarLingTeatralDominante,

    // PRA GRAFICOS
    buscarResultadosQuiz,
    buscarResultadosPerfis,
    buscarResulLingPerfil
}