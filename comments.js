// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// load the comments file
var comments = require('./comments.json');

// get all comments
app.get('/comments', function(req, res) {
    res.json(comments);
});

// add a new comment
app.post('/comments', function(req, res) {
    var newComment = {
        id: comments.length + 1,
        name: req.body.name,
        comment: req.body.comment,
    }
});