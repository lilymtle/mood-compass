export function up(knex) {
    return knex.schema.table("favorites", function(table) {
        table.integer("educational_resource_id").unsigned().nullable();
        table.integer("coping_strategy_id").unsigned().nullable();

        table.foreign("educational_resource_id").references("id").inTable("educational_resources").onDelete("CASCADE");
        table.foreign("coping_strategy_id").references("id").inTable("coping_strategies").onDelete("CASCADE");
    });
};

export function down(knex) {
    return knex.schema.table("favorites", function(table) {
        table.dropColumn("educational_resource_id");
        table.dropColumn("coping_strategy_id");
    });
};