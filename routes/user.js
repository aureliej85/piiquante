const express = require("express");
const router = express.Router();
const limitRate = require("../middlewares/rateLimiter");
const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.post("/login", limitRate.loginRateLimiter, userCtrl.login);

module.exports = router;
