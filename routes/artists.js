// Our router module
const router = require('express').Router();

// Our controller
const ArtistsController = require('../controllers/artistsController');

// Our routes
router.get(`/`, ArtistsController.index);
router.get(`/:id`, ArtistsController.show);
router.get(`/:id/edit`, ArtistsController.edit);
router.post(`/`, ArtistsController.create);
router.post(`/update`, ArtistsController.update);
router.post(`/destroy`, ArtistsController.destroy);

// We have to export our changes
module.exports = router;