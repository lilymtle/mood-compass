export function up(knex) {
    return knex.schema
        .dropTableIfExists("favorites")
        .then(() => {
            return knex.schema.createTable("favorites", function(table) {
                table.increments("id").primary();
                table.string("user_id").notNullable();
                table.integer("mood_id").unsigned().notNullable();
                table.unique(["user_id", "mood_id"]);

                table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");
                table.foreign("mood_id").references("id").inTable("moods").onDelete("CASCADE");
            });
    });
}

export function down(knex) {
    return knex.schema.dropTableIfExists("favorites");
}