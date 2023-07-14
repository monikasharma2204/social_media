const router = require("express").Router();
const authController = require("../controllers/authController");
const cors = require('cors');

router.post("/signup", cors({
    credentials: true,
    origin:'http://localhost:3000'
}), authController.signupController);
router.post("/login", authController.loginController);
router.get("/refresh", authController.refreshAccessTokenController);
router.post("/logout", authController.logoutController);


module.exports = router;