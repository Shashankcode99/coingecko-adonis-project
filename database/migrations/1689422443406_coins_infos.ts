import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CoinGeckoCoinsData extends BaseSchema {
  protected tableName = 'coinsInfo'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.string('id').unique()
      table.string('name')
      table.string('symbol')
      table.jsonb('platforms')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('id')
      table.dropColumn('name')
      table.dropColumn('symbol')
      table.dropColumn('platforms')
      table.dropColumn('created_at')
      table.dropColumn('updated_at')
    })
  }
}
