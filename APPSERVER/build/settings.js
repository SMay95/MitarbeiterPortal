"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testEnvironmentVariable = exports.connectionString = void 0;

require('dotenv').config();

const connectionString = process.env.CONNECTION_STRING;
exports.connectionString = connectionString;
console.log(connectionString);
const testEnvironmentVariable = "Hello dings";
exports.testEnvironmentVariable = testEnvironmentVariable;