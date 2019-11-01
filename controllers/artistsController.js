const Artist = require('../models/artist');

exports.index = (req, res) => {
  Artist.find()
    .then(artists => res.status(200).json(artists))
    .catch(err => res.status(404).send(err));
};


exports.show = (req, res) => {
  Artist.findOne({
    _id: req.params.id
  })
    .then(artist => res.status(200).json(artist))
    .catch(err => res.status(404).json(err));
};


exports.create = async (req, res) => {
  Artist.create(req.body)
    .then(() => res.status(200).json({ success: "New artist created" }))
    .catch(err => res.status(404).json(err));
};


exports.update = (req, res) => {
  Artist.updateOne({
    _id: req.body.id
  }, req.body, {
      runValidators: true
    })
    .then(() => res.status(200).json({ success: "Artist updated" }))
    .catch(err => res.status(404).json(err));
};


exports.destroy = (req, res) => {
  Artist.deleteOne({
    _id: req.body.id
  })
    .then(() => res.status(200).json({ success: "Artist deleted" }))
    .catch(err => res.status(404).json(err));
};