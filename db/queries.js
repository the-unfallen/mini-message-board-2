const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function newEntry(username, text) {
    await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [
        username,
        text,
    ]);
}

async function findMessage(messageId) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
        messageId,
    ]);
    return rows;
}

module.exports = {
    getAllMessages,
    newEntry,
    findMessage,
};
