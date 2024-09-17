export function up(knex) {
    return knex.schema.createTable("moods", function(table) {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.text("short_description").nullable();
        table.json("descriptions").nullable();
        table.json("images").nullable();
        table.json("signs_symptoms").nullable();
        table.json("types").nullable();
        table.json("causes").nullable();
        table.json("treatment_options").nullable();
        table.text("when_to_seek_help").nullable();
    });
};

export function down(knex) {
    return knex.schema.dropTableIfExists("moods");
};