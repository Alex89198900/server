const Router2 = require("express");
const router2 = new Router2();
const deviceRouter = require("./deviceRouter");
const userRouter = require("./userRouter");
const brandRouter = require("./brandRouter");
const typeRouter = require("./typeRouter");
const basketRouter = require("./bascketRouter");

router2.use("/user", userRouter);
router2.use("/type", typeRouter);
router2.use("/brand", brandRouter);
router2.use("/device", deviceRouter);
router2.use("/bascket", basketRouter);

module.exports = router2;

