const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookModel = new Schema(
    {
        title: String,
        authors: Array,
        description: String,
        image: String
    });

const Book = mongoose.model("Book", BookModel);

module.exports = Book;