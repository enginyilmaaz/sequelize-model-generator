# Sequelize Model Generator

This project is set up to use Sequelize with TypeScript. It includes a script to generate models from an existing database.

## Installation

After extracting the files, navigate to the project directory and run:

```
npm install
```

This will install all necessary dependencies.

## Generating Models

To generate models from your database, use the following command with the appropriate parameters:

```
npm run generate-models --dbhost=<your_host> --dbport=<your_port> --dbname=<your_database> --dbuser=<your_username> --dbpassword=<your_password> --dbdialect=<postgres_or_mysql>
```

Replace the placeholders with your actual database details.

## Parameters

- `--dbhost`: Host of your database server (e.g., `localhost`)
- `--dbport`: Port number of your database server (e.g., `5432` for PostgreSQL)
- `--dbname`: Name of your database
- `--dbuser`: Username for your database
- `--dbpassword`: Password for your database
- `--dbdialect`: Database dialect (`postgres`, `mysql`, etc.)

## Running the Application

Compile the TypeScript files and run the application using:

```
npm start
```

## Notes

- Make sure to replace the command placeholders with your actual database details.
- The `sequelize-auto` script generates models in the `./models` directory.