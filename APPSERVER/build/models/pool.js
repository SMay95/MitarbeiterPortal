"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = void 0;

var _pg = require("pg");

var _settings = require("../settings");

const pool = new _pg.Pool({
  connectionString: _settings.connectionString
});
exports.pool = pool;