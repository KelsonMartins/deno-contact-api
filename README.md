# DENO CONTACT API

This project is a simple `deno` application rest api app, to read and create a person contact details.

To achieve this I'm using **deno_mongo**, a `MongoDB` database driver built for `deno`.

I've include a set of custom logging middleware and demonstrate how to use env variables in `deno`.

## Run the Project

To run the project, run the command below from a command line console:
> deno run --allow-write --allow-read --allow-plugin --allow-net --allow-env --unstable ./main.ts

### Note

Please, make sure to update `../keys/appCostants.ts` with your `MongoDb` server instance settings.
