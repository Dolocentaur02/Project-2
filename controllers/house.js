const House = require("../db/models/House");

module.exports = {
  index: function(req, res) {
    House.find({}).then(houses => res.json(houses));
  },

  show: function(req, res) {
    House.findById(req.params.id).then(house => res.json(house));
  },
  update: function(req, res) {
    House.findOneAndUpdate(
      { values: req.params.values },
      req.body,
    ).then(house => res.json(house));
  },
  destroy: function(req, res) {
    House.findByIdAndRemove(req.params.id).then(house =>
      res.send(house));
  }
};