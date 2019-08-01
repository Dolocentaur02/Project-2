const express = require("express");
const router = express.Router();
const houseController = require("../controllers/house");

router.get("/", houseController.index);
router.post("/", houseController.create);
router.get("/:id", houseController.show);
router.put("/:id", houseController.update);
router.delete("/:id", houseController.destroy);

module.exports = router;