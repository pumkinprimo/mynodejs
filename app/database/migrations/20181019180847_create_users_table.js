
exports.up = knex => knex.schema.createTable('users', (t) => {
  t.increments('id').primary();
  t.string('google_id').notNullable();
  t.integer('coin').defaultTo(0);
  t.integer('bonus_coin').defaultTo(0);
  t.timestamps();
});

exports.down = knex => knex.schema.dropTableIfExists('users');
