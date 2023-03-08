const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/*
 * GET
 */
router.get("/:id", userController.show);

/*
 * POST
 */
router.post("/", userController.create);

/*
 * POST
 */
router.post("/login", userController.authenticate);

module.exports = router;
