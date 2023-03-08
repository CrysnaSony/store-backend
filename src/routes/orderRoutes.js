const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { validateUser, authorizeUser } = require("../middleware/auth");

/*
 * GET
 */
router.get("/:id", validateUser, canViewOrder, orderController.show);

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
