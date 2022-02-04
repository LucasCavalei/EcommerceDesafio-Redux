const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order");
const { isAuth } = require("../isAuth.js");

router.post("/", isAuth, orderController.post_order);
router.get("/", function (req, res) {
  res.send("sou order route");
});

module.exports = router;
