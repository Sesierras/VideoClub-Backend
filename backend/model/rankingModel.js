const mongoose = require("mongoose");

const rankingSchema = new mongoose.Schema({
    title: String,
    reviwer: String,
    rev_stars: Number,
    num_ratings: Number,
});

module.exports = mongoose.model("Reating", rankingSchema);