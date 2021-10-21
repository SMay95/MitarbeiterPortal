"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indexPage = void 0;

var _settings = require("../settings");

const indexPage = (req, res) => res.status(200).json({
  message: _settings.testEnvironmentVariable
});

exports.indexPage = indexPage;