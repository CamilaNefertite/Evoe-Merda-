var dashboardModel = require("../models/dashboardModel");

function buscarUsuarios(req, res) {
    dashboardModel.buscarUsuarios()
    .then(function(resultado) {
        res.json(resultado);
    })
}

function buscarLingTeatralDominante(req, res) {
    dashboardModel.buscarLingTeatralDominante()
    .then(function(resultado) {
        res.json(resultado);
    })
}

function buscarTipoPerfilDominante(req, res) {
    dashboardModel.buscarTipoPerfilDominante()
    .then(function(resultado) {
        res.json(resultado);
    })
}

function buscarQtdQuizzesFeitos(req, res) {
    dashboardModel.buscarQtdQuizzesFeitos()
    .then(function(resultado) {
        res.json(resultado);
    })
}


// PRA GRAFICOS

function buscarResultadosQuiz(req, res) {
    dashboardModel.buscarResultadosQuiz()
    .then(function(resultado) {
        res.json(resultado);
    })
}

function buscarResultadosPerfis(req, res) {
    dashboardModel.buscarResultadosPerfis()
    .then(function(resultado) {
        res.json(resultado);
    })
}

function buscarResulLingPerfil(req, res) {
    dashboardModel.buscarResulLingPerfil()
    .then(function(resultado) {
        res.json(resultado);
    })
}

// PRO ARTIGO
function cadastrarArtigos(req, res) {
    var titulo = req.body.tituloServer;
    var conteudo = req.body.conteudoServer;
    var categoria = req.body.categoriaServer;

    if (titulo == undefined) {
        res.status(400).send("Seu titulo está undefined!");
    } else if (conteudo == undefined) {
        res.status(400).send("Seu conteudo está undefined!");
    } else if (categoria == undefined) {
        res.status(400).send("Sua categoria está undefined!");
    } else {


        dashboardModel.cadastrarArtigos(titulo, conteudo, categoria)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarArtigos(req, res) {
    dashboardModel.buscarArtigos()
    .then(function(resultado) {
        res.json(resultado);
    })
}

function buscarArtigoPorId(req,res){

    var idArtigo = req.params.idArtigo;

    dashboardModel.buscarArtigoPorId(idArtigo)
    .then(function(resultado){
        res.json(resultado);
    });
}



module.exports = {
    // PRA KPIS
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

