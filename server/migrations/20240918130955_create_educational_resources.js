export function up(knex) {
    return knex.schema.createTable("educational_resources", function(table) {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.text("short_description").notNullable();
        table.json("descriptions").notNullable();
        table.json("images").notNullable();
        table.json("strategies").notNullable();
        table.json("resources").notNullable();
    });
};

export function down(knex) {
    return knex.schema.dropTableIfExists("educational_resources");
};