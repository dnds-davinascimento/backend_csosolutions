const router = require("express").Router()
// Services router
const servicesRouter = require("./services")

router.use("/", servicesRouter)

// orçamento router

const orcamentoRouter = require("./orcamento")

router.use("/", orcamentoRouter)

module.exports = router