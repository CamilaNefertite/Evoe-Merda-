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








module.exports = {
    // PRA KPIS
    buscarUsuarios,
    buscarTipoPerfilDominante,
    buscarQtdQuizzesFeitos,
    buscarLingTeatralDominante,

    // PRA GRAFICOS
    buscarResultadosQuiz
}

