const router = require("express").Router()

const orcamentoControllers = require("../controllers/orcamentoControllers")

router
    .route("/orcamento")
    .post((req, res) => orcamentoControllers.create(req, res))

router.route("/orcamento").get((req, res) =>orcamentoControllers.getAll(req, res))

router.route("/orcamento/:id")
.get((req, res) => orcamentoControllers.get(req, res))

router.route("/orcamento/:id")
.delete((req, res) => orcamentoControllers.delete(req, res))

router.route("/orcamento/:id")
.put((req, res) => orcamentoControllers.update(req, res))



module.exports = router