const Router3 = require("express");
const router3 = new Router3();
const typeController = require("../controllers/typeController");
//const checkRole = require("../middleware/checkRoleMiddleware");

router3.post("/", typeController.create);
router3.get("/", typeController.getAll);
router3.patch("/:id", typeController.updateOne);
router3.delete("/:id", typeController.deleteType);

module.exports = router3;

