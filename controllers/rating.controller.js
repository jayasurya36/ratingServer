const Rating = require('../models/rating.model');


//Controller function to Post the ratings
const postRating = async (req, res) => {
    try {
        let rating = new Rating(req.body);
        let result = await rating.save();
        res.status(200).json({
            success: true,
            message: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

//Controller function to get the ratings
const getAllRatings = async (req, res) => {
    try {
        let ratings = await Rating.find();
        res.status(200).json({
            success: true,
            data: ratings.reverse()
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = {postRating , getAllRatings}