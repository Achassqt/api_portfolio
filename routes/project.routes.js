const project = require("../controllers/project.controller");
const router = require("express").Router();

router.get("/", project.findAll);

module.exports = router;
// app.use("/api/project", router);
