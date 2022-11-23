const rateLimit = require("express-rate-limit");

const loginRateLimiter = rateLimit({
  windowMs: 2 * 60 * 1000,
  max: 3,
});
module.exports = { loginRateLimiter };
