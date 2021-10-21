"use strict";

const {
  Client
} = require('pg').Pool;

const client = new Client({
  user: 'Mitarbeiter',
  host: 'localhost',
  database: 'MitarbeiterPortal',
  password: 'Mitarbeiter',
  port: 5432
});

async () => {
  try {
    await client.connect();
    await client.end();
  } catch (error) {
    console.error(error);
  }
};