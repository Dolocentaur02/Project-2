const express = require("express");
const router = express.Router();
const characterController = require("../controllers/character");

router.get("/", characterController.index);
router.post("/", characterController.create);
router.get("/:id", characterController.show);
router.put("/:id", characterController.update);
router.delete("/:id", characterController.destroy);

module.exports = router;