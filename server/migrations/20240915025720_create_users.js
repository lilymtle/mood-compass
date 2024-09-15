export function up(knex) {
    return knex.schema.createTable("users", function(table) {
        table.increments("id");
        table.string("firebase_uid").notNullable().unique();
        table.string("name").notNullable();
        table.string("email").notNullable().unique();
        table.timestamps(true, true);
    });
};

export function down(knex) {
    return knex.schema.dropTableIfExists("users");
};