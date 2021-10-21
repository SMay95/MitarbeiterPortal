"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testEnvironmentVariable = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

export const connectionString = process.env.CONNECTION_STRING;