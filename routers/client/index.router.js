const router = require("express").Router();
const homeRouters = require("./home.router");
const tourRouters = require("./tour.router");
const cartRouters = require("./cart.router");


router.use("/", homeRouters);

router.use('/tour',tourRouters);

router.use("/cart", cartRouters);


module.exports = router;