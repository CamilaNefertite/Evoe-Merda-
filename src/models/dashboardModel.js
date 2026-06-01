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


//buscar artivgo

function cadastrarArtigos(titulo, conteudo, categoria) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", titulo, conteudo, categoria);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO artigo (titulo, conteudo, categoria) VALUES ('${titulo}', '${conteudo}', '${categoria}');        
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

//pra pegar todos os artigos
function buscarArtigos() {
    var instrucaoSql = `
        SELECT * FROM artigo;`;
    return database.executar(instrucaoSql);
}

//pra pegar so pelo id
function buscarArtigoPorId(id){
    var instrucaoSql = `SELECT * FROM artigo WHERE idArtigo = ${id};`;

    return database.executar(instrucaoSql);
}

function buscarArtigoPorId(idArtigo) {
    var instrucaoSql = `SELECT * FROM artigo WHERE idArtigo = ${idArtigo};`;
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
    buscarResulLingPerfil,

    cadastrarArtigos,
    buscarArtigos,
    buscarArtigoPorId
}