"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../controllers");

const indexRouter = _express.default.Router();

indexRouter.get('/', _controllers.indexPage);
indexRouter.get('/messages', _controllers.messagesPage);
indexRouter.post('/messages', _controllers.addMessage);
var _default = indexRouter;
exports.default = _default;