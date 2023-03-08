const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { upload } = require("../middleware/upload");
const { validateAdmin } = require("../middleware/auth");
/*
 * GET
 */
router.get("/:id", validateAdmin, productController.show);

/*
 * POST
 */
router.post("/", validateAdmin, upload, productController.create);

/*
 * PUT
 */
router.put("/:id", validateAdmin, upload, productController.update);

/*
 * DELETE
 */
router.delete("/:id", validateAdmin, productController.remove);

module.exports = router;
