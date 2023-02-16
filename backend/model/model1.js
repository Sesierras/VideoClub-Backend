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
            lastname: String,
            name: String
        }
    ],
    genre_tittle: 
        {
            type: String
        },
    actor: [
        {
            lastname: String,
            name: String,
            gender: String
        }
    ],
});

module.exports = mongoose.model("Movie", movieSchema);