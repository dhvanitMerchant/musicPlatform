// Our router module
const router = require('express').Router();

// Our controller
const StagesController = require('../controllers/stagesController');

// Our routes
router.get(`/`, StagesController.index);
router.get(`/:id`, StagesController.show);
router.get(`/:id/edit`, StagesController.edit);
router.post(`/`, StagesController.create);
router.post(`/update`, StagesController.update);
router.post(`/destroy`, StagesController.destroy);

// We have to export our changes
module.exports = router;