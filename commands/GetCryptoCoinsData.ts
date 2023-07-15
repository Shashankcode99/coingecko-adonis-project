import { BaseCommand } from '@adonisjs/core/build/standalone';
import Database from '@ioc:Adonis/Lucid/Database';
import axios from 'axios';
export default class GetCryptoCoinsData extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'get:crypto_coins_data'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'Command for fetching crupto coins data from coingecko public api.'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: false,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  public async run() {  
    {
      try {
        console.log('Starting fetching data from Coingecko')
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/list', {
          params: {
            include_platform: true,
          },
        })

        if (true) {
          const coinsData = response.data
          await this.saveToDatabase(coinsData)
          console.info('Data Saved Successfully!')
        } else {
          console.error('Error while saving the data!')
        }
      } catch (error) {
        console.error(`Error: ${error.message}`)
      }
    }
  }

  private async saveToDatabase(coinsData: any[]) {
    for (const coin of coinsData) {
      await Database.table('coinsInfo').returning('id').insert({
        id: coin.id,
        name: coin.id,
        symbol: coin.symbol,
        platforms: coin.platforms,
      })
    }
  }
}
