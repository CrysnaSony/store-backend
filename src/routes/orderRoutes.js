const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { validateUser } = require("../middleware/auth");

/*
 * GET
 */
router.get("/:id", validateUser, orderController.show);

/*
 * POST
 */
router.post("/", validateUser, orderController.create);

/*
 * PUT
 */
router.put("/:id", validateUser, orderController.update);

/*
 * DELETE
 */
router.delete("/:id", validateUser, orderController.remove);

module.exports = router;
