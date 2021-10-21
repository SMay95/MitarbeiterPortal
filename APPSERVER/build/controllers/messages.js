"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messagesPage = exports.addMessage = void 0;

var _model = _interopRequireDefault(require("../models/model"));

const messagesModel = new _model.default('messages');

const messagesPage = async (req, res) => {
  try {
    const data = await messagesModel.select('name, message');
    res.status(200).json({
      messages: data.rows
    });
  } catch (err) {
    res.status(200).json({
      messages: err.stack
    });
  }
};

exports.messagesPage = messagesPage;

const addMessage = async (req, res) => {
  const {
    name,
    message
  } = req.body;
  const columns = 'name, message';
  const values = `'${name}', '${message}'`;

  try {
    const data = await messagesModel.insertWithReturn(columns, values);
    res.status(200).json({
      messages: data.rows
    });
  } catch (err) {
    res.status(200).json({
      messages: err.stack
    });
  }
};

exports.addMessage = addMessage;