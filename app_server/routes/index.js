const express = require('express');
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others')
const router = express.Router();

/* GET Locations page. */
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/*GET about page*/
router.get('/about', ctrlOthers.about);

module.exports = router;
