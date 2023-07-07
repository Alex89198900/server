const Router4 = require("express");
const router4 = new Router4();
const userController = require("../controllers/userConeroller");
const authMiddleware = require("../middleware/authMiddleware");

router4.post("/registration", userController.registration);
router4.post("/login", userController.login);
router4.get("/auth", authMiddleware, userController.check);

module.exports = router4;

