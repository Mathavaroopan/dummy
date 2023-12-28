const express = require("express")
const router = express.Router();
const getUserData = require("../Controller/userController.js");

router.get('/home', getUserData);

module.exports = router;