const Spell = require("../db/models/Spell");

module.exports = {
  index: function(req, res) {
    Spell.find({}).then(spells => res.json(spells));
  },
  create: function(req, res) {
    Spell.create(req.body).then(spell => res.json(spell));
  },
  show: function(req, res) {
    Spell.findById(req.params.id).then(spell => res.json(spell));
  },
  update: function(req, res) {
    Spell.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
    ).then(spell => res.json(spell));
  },
  destroy: function(req, res) {
    Spell.findByIdAndRemove(req.params.id).then(spell =>
      res.send(spell)
    );
  }
};