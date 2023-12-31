const express = require("express");
const router = express.Router();
const {TestUser, TestUserPost} = require("../controller/user.controller");
const {
  PrintSuccess,
  PrintSuccessRoute,
  CheckPostReq,
} = require("../middleware/middleware");

router.use(PrintSuccess);
router.get("/", PrintSuccessRoute, TestUser);
router.post("/", CheckPostReq, TestUserPost);

module.exports = router;
