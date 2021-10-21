"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertIntoTables = exports.executeQueryArray = exports.dropTables = exports.createTables = void 0;

var _pool = require("../models/pool");

var _queries = require("./queries");

const executeQueryArray = async arr => new Promise(resolve => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await _pool.pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

exports.executeQueryArray = executeQueryArray;

const dropTables = () => executeQueryArray([_queries.dropMessagesTable]);

exports.dropTables = dropTables;

const createTables = () => executeQueryArray([_queries.createMessageTable]);

exports.createTables = createTables;

const insertIntoTables = () => executeQueryArray([_queries.insertMessages]);

exports.insertIntoTables = insertIntoTables;