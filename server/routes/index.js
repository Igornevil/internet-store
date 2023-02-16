const express = require("express");
const router = express.Router({ mergeParams: true });

// /api/auth
router.use("/auth", require("./auth.routes"));
router.use("/user", require("./user.routes"));
router.use("/product", require("./product.routes"));
router.use("/brand", require("./brand.routes"));
router.use("/category", require("./category.routes"));

module.exports = router;
