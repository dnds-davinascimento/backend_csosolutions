const router = require("express").Router()

const pictureControllers = require("../controllers/picturecontrollrs")
router
    .route("/picture")
    .post((req, res) => pictureControllers.create(req, res))




module.exports = router