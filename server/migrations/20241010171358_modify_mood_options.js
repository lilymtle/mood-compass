export function up(knex) {
    return knex.schema.alterTable("mood_options", function(table) {
        knex.raw("ALTER TABLE mood_options MODIFY emoji VARCHAR(255) CHARACTER SET utf8mb4").then();
    });
};

export function down(knex) {
    return knex.schema.alterTable("mood_options", function(table) {
        table.string("emoji").notNullable().charset("utf8").alter();
    });
};