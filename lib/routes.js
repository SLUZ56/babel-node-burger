"use strict";

var _express = require("express");

var routes = new _express.Router();

routes.get('/', function (req, res) {
    return res.json({ message: "Hello World!" });
});

module.exports = routes;