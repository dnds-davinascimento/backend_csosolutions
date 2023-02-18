const router = require("express").Router()
const multer = require('multer');

const uploadConfig = require('../config/upload')
const upload = multer(uploadConfig);


// Services router
const servicesRouter = require("./services")

router.use("/", servicesRouter)

// orçamento router

const orcamentoRouter = require("./orcamento")

router.use("/", orcamentoRouter)

const postRouter = require("./post")
router.use("/",upload.single('foto'),postRouter)

const pictureRouter = require("./picture")
router.use("/",pictureRouter)

module.exports = router