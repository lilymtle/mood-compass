export function up(knex) {
    return knex.schema.table('favorites', function(table) {
        table.integer('mood_id').unsigned().nullable().alter();
        table.integer('educational_resource_id').unsigned().nullable().alter();
        table.integer('coping_strategy_id').unsigned().nullable().alter();
    });
};

export function down(knex) {
    return knex.schema.table('favorites', function(table) {
        table.integer('mood_id').unsigned().notNullable().alter();
        table.integer('educational_resource_id').unsigned().notNullable().alter();
        table.integer('coping_strategy_id').unsigned().notNullable().alter();
    });
};
