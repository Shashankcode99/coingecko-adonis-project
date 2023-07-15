# coingecko-adonis-project
#ADONIS SETUP
  - check node version i.e >14.x.x
  - run command -> npm init adonis-ts-app@latest project_name
  - install node modules pg and axios

#SETUP ENV VARIABLES
  - Add given variables in env.ts file
        -DB_CONNECTION: Env.schema.string(),
        -PG_HOST: Env.schema.string({ format: 'host' }),
        -PG_PORT: Env.schema.number(),
        -PG_USER: Env.schema.string(),
        -PG_PASSWORD: Env.schema.string.optional(),
        -PG_DB_NAME: Env.schema.string()

#CREATE MIGRATION
 - run command ->  node ace make:migration migration_name
 - run command -> node ace migration:run

#CREATE COMMAND
 - run command to create a command
   - node ace make:command command_name
 - run command to index your command
   - node ace generate:manifest
 - write your code for the command inside the run() function lying in the commandfile
 - run your command
    - node ace command_name

 
