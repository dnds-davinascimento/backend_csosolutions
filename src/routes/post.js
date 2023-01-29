const router = require("express").Router();

const postControllers = require("../controllers/postControllers");
router.route("/post").post((req, res) => postControllers.create(req, res));

router.route("/post").get((req, res) => postControllers.getAll(req, res));

router.route("/post/:id").get((req, res) => postControllers.get(req, res));

router
  .route("/post/:id")
  .delete((req, res) => postControllers.delete(req, res));

router
  .route("/post/:id")
  .put((req, res) => postControllers.update(req, res));

module.exports = router;
