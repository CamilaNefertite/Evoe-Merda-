var quizModel = require("../models/quizModel");

function salvarResultado(req, res) {

    let resultadoFinal = req.body.resultadoServer;
    let idUsuario = req.body.idUsuarioServer;

    quizModel.salvarResultado(resultadoFinal, idUsuario)
        .then(function(resultadoFinal) {

            res.json(resultadoFinal);

        }).catch(function(erro) {

            console.log(erro);

        });
}

module.exports = {
    salvarResultado
}