const Router1 = require("express");
const router1 = new Router1();
const brandController = require("../controllers/brandController");

router1.post("/", brandController.create);
router1.get("/", brandController.getAll);
router1.delete("/:id", brandController.deleteBrand);

module.exports = router1;

