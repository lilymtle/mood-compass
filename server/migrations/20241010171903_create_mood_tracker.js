export function up(knex) {
    return knex.schema.createTable("mood_tracker", function(table) {
        table.increments("id").primary();
        table.string("user_id").notNullable();
        table.integer("mood_option_id").unsigned().notNullable();
        table.text("details").nullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());

        table.foreign("mood_option_id").references("id").inTable("mood_options").onDelete("CASCADE");
    });
};

export function down(knex) {
    return knex.schema.dropTableIfExists("mood_tracker");
};