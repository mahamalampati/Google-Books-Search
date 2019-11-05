
var express = require("express");
var mongoose = require("mongoose");
var axios = require("axios");


var db = require("../models");

exports.getBooks = (req, res) => {
    db.Book.find().then(function (dbBooks) {
        res.json(dbBooks);
    })
        .catch(function (err) {
            res.json(err);
        });
};


exports.saveBook = (req, res) => {
    db.Book.create(req.body).then(
        (response) => {
            res.json("Your book has been successfully saved!");
        }
    ).catch(
        (err) => {
            res.json(err);
        });

};


exports.deleteBook = (req, res) => {
    db.Book.deleteOne({ _id: req.params.id }).then(function (deletedBook) {
        res.json("Book deleted successfully!");

    }).catch(function (err) {
        res.json(err);
    });
};


exports.bookSearch = (req, res) => {
    let searchTitle = req.params.title.replace(/\s/g, "+");

    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTitle)
        .then((response) => {
            res.json(response.data.items)
        }
        ).catch((err) => {
            res.json(err.message);
        });
};