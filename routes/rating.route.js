const { postRating, getAllRatings } = require('../controllers/rating.controller');
const router = require('express').Router();

//router page to connect the controllers and the actual route
router.post('/postRatings' , postRating)
router.get('/ratings' , getAllRatings)

module.exports = router;