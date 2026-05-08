var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

// PRA KPIS
router.get("/buscarUsuarios", function(req, res) {
    dashboardController.buscarUsuarios(req, res);
});

router.get("/buscarLingTeatralDominante", function(req, res) {
    dashboardController.buscarLingTeatralDominante(req, res);
});

router.get("/buscarTipoPerfilDominante", function(req, res) {
    dashboardController.buscarTipoPerfilDominante(req, res);
});

router.get("/buscarQtdQuizzesFeitos", function(req, res) {
    dashboardController.buscarQtdQuizzesFeitos(req, res);
});

// PRA GRAFICOS
router.get("/buscarResultadosQuiz", function(req, res) {
    dashboardController.buscarResultadosQuiz(req, res);
});

module.exports = router;