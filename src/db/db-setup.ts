
import { knex } from "knex"
({
    client: 'mysql',
    connection: {
      host:'localhost',
      user : 'root',
      password : '',
      database : 'myapp2_test'
    }
  })
const knexfile = require('./knexfile');
import { Model } from 'objection';

function setupDb() {
  const db = knex(knexfile.development);

  // plug db config into objection
  Model.knex(db);
}

export {setupDb};