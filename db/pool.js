const dotenv = require("dotenv");
const { Pool } = require("pg");

dotenv.config(); // load environment variables

// const connectionString =
//     "postgresql://minimessage_db_user:d49SSTd2AXiPgjTjaFeGh9OIbpw20Vdr@dpg-d2oom224d50c73a6tsn0-a.oregon-postgres.render.com/minimessage_db";

module.exports = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    ssl: {
        rejectUnauthorized: false,
    },
});
