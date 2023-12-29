import { config } from 'dotenv';
config();

const requiredParams = ['dbhost', 'dbport', 'dbname', 'dbuser', 'dbpassword', 'dbdialect'];

function checkParams() {
    let missingParams = requiredParams.filter(param => !process.env['npm_config_' + param]);
    if (missingParams.length > 0) {
        console.error('Error: Missing required parameters: ' + missingParams.join(', '));
        console.error('Usage: npm run generate-models --dbhost=<host> --dbport=<port> --dbname=<dbname> --dbuser=<user> --dbpassword=<password> --dbdialect=<dialect>');
        process.exit(1);
    }
}

checkParams();

// Your TypeScript application code goes here