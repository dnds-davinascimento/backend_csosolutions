const router = require("express").Router()
const upload = require("../../config/multer");
// Services router
const servicesRouter = require("./services")

router.use("/", servicesRouter)

// orçamento router

const orcamentoRouter = require("./orcamento")

router.use("/", orcamentoRouter)

const postRouter = require("./post")
router.use("/",upload.single("file"),postRouter)

const pictureRouter = require("./picture")
router.use("/",upload.single("file"),pictureRouter)

module.exports = router