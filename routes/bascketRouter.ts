const RouterBascket = require("express");
const routerBascket = new RouterBascket();
const bascetController = require("../controllers/bascketController");
//const checkRole = require("../middleware/checkRoleMiddleware");

routerBascket.post("/", bascetController.create);
routerBascket.get("/", bascetController.getAll);
routerBascket.patch("/:id", bascetController.updateOne);
routerBascket.delete("/:id", bascetController.deleteBasket);

module.exports = routerBascket;

