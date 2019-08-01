const Character = require("../db/models/Character");

module.exports = {
  index: function (req, res) {
    Character.find({}).then(characters => res.json(characters));
  },
  create: function (req, res) {
    Character.create(req.body).then(character => res.json(character));
  },
  show: function (req, res) {
    Character.findById(req.params.id).then(character => res.json(character));
  },
  update: function (req, res) {
    Character.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { "name": req.body.name }}) .then(character => res.json(character))
  },
  destroy: function (req, res) {
    Character.findByIdAndRemove({_id: req.params.id}).then(character =>
      res.send(character));
  }
}