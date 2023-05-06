const mongoose = require("mongoose");

const openingTimeSchema = new mongoose.Schema({
    days: {type: String, required: true},
    openTime: String,
    closeTime: String,
    closed: {type: Boolean, required: true}
});

const reviewsSchema = new mongoose.Schema({
    rating:{type: Number, 'default': 0,min: 0,max: 5},
    author: String,
    createdOn: {type: Date, 'default': Date.now},
    reviewText: String
});
const locationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: String,
    rating: {type: Number,'default': 0, min: 0, max: 5},
    facilities: [String],
    cord: {
        type: String,
        coordinates: [Number]
    },
    review: [reviewsSchema],
    openingTimes: [openingTimeSchema]
});

locationSchema.index({coords: '2dsphere'});

mongoose.model('locations', locationSchema)