const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    time: Number,
    language: String,
    date: String,
    country: String,
    director: [
        {
            name: String,
            lastname: String
        }
    ],
    genres: [
        {
            type: String
        }
    ],
    actor: [
        {
            name: String,
            lastname: String,
            gender: String
        }
    ],
});

module.exports = mongoose.model("movie", movieSchema);