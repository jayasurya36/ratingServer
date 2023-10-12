const mongoose = require('mongoose');
//Rating mongoose model to connect with Db and formating the data
const ratingSchema = mongoose.Schema({
    howOffen: {
        type: "String",
        required: true
    },
    mainGoal: {
        type: ["String"],
        required: true
    },
    experience: {
        type: "Number",
        required: true
    },
    improvements: {
        type: "String",
        required: true
    },
    birthday: {
        type: "String",
        required: true
    },
    name: {
        type: "String"
    }
});

module.exports = mongoose.model("Rating", ratingSchema);