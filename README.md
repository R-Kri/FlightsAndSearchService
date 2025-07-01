    # Welcome to flight Service

    ## Project Setup
    - clone the project on your local
    - Execute `npm install` on the same path as of your root directory of the cloned project
    - create a `.env` file in the root directory and add the following environment variable
        -`PORT:3000`
    - Inside the `src/config` folder create a new file `config.json` and then add the following piece of json
        ```
            {
                "development": {
                "username": "root",
                "password": null,
                "database": "Flights_Search_DB_DEV",
                "host": "127.0.0.1",
                "dialect": "mysql"      
            },
            }
        ```

    - Once you have added your db config s listed above, go to the src folder from you terminal and execute `npx sequelize db:create`


    ## Folder Structure of the Project

    -src/
        index.js
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
        repository/
        migrations/
        seeders/

    -tests/ [later]
