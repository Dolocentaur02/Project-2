const express = require("express");
const router = express.Router();
const spellController = require("../controllers/spell");

router.get("/", spellController.index);
router.post("/", spellController.create);
router.get("/:id", spellController.show);
router.put("/:id", spellController.update);
router.delete("/:id", spellController.destroy);

module.exports = router;