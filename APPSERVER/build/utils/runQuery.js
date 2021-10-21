"use strict";

var _queryFunctions = require("./queryFunctions");

(async () => {
  await (0, _queryFunctions.createTables)();
  await (0, _queryFunctions.insertIntoTables)();
})();