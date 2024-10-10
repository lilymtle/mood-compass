export function up(knex) {
    return knex.schema.createTable("mood_options", function(table) {
        table.increments("id").primary();
        table.string("description").notNullable();
        table.string("emoji").notNullable();
    });
};

export function down(knex) {
    return knex.schema.dropTableIfItExists("mood_options");
};