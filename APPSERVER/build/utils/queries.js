"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertMessages = exports.dropMessagesTable = exports.createMessageTable = void 0;
const createMessageTable = `
DROP TABLE IF EXISTS messages;
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  message VARCHAR NOT NULL
  )
  `;
exports.createMessageTable = createMessageTable;
const insertMessages = `
INSERT INTO messages(name, message)
VALUES ('chidimo', 'first message'),
      ('orji', 'second message')
`;
exports.insertMessages = insertMessages;
const dropMessagesTable = 'DROP TABLE messages';
exports.dropMessagesTable = dropMessagesTable;