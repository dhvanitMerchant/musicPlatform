const Stage = require('../models/stage');

exports.index = (req, res) => {
  Stage.find()
    .then(stages => res.status(200).json(stages))
    .catch(err => res.status(404).send(err));
};


exports.show = (req, res) => {
  Stage.findOne({
    _id: req.params.id
  })
    .then(stage => res.status(200).json(stage))
    .catch(err => res.status(404).json(err));
};


exports.create = async (req, res) => {
  Stage.create(req.body)
    .then(() => res.status(200).json({ success: "New stage created" }))
    .catch(err => res.status(404).json(err));
};


exports.update = (req, res) => {
  Stage.updateOne({
    _id: req.body.id
  }, req.body, {
      runValidators: true
    })
    .then(() => res.status(200).json({ success: "Stage updated" }))
    .catch(err => res.status(404).json(err));
};


exports.destroy = (req, res) => {
  Stage.deleteOne({
    _id: req.body.id
  })
    .then(() => res.status(200).json({ success: "Stage deleted" }))
    .catch(err => res.status(404).json(err));
};