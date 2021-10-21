"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _settings = require("../settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const indexRouter = _express.default.Router();

indexRouter.get('/', (req, res) => res.status(200).json({
  message: _settings.testEnvironmentVariable
}));
var _default = indexRouter;
exports.default = _default;