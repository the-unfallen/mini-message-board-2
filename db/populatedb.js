const dotenv = require("dotenv");
const { Client } = require("pg");

dotenv.config(); // load environment variables

const connectionString =
    "postgresql://minimessage_db_user:d49SSTd2AXiPgjTjaFeGh9OIbpw20Vdr@dpg-d2oom224d50c73a6tsn0-a.oregon-postgres.render.com/minimessage_db";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    added TIMESTAMP DEFAULT NOW(),
    username VARCHAR ( 255 ),
    text TEXT
);

INSERT INTO messages (username, text)
VALUES ('Ibrahim', 'Hi'),
('Chuck', 'Justice'),
('Axe', 'Capital');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT,
        ssl: {
            rejectUnauthorized: false,
        },
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
