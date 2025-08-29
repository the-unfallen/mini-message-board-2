const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const db = require("../db/queries.js");
const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
    const allMessages = await db.getAllMessages();
    console.log(allMessages);
    res.render("index", { title: "Mini Messageboard", messages: allMessages });
});

indexRouter.get("/new", (req, res) => {
    res.render("form");
});

indexRouter.post("/new", async (req, res) => {
    const the_author = req.body["authorName"];
    const the_message = req.body["authorMessage"];
    await db.newEntry(the_author, the_message);

    console.log(req.body);

    res.redirect("/");
});

indexRouter.get("/message/:messageId", async (req, res) => {
    const { messageId } = req.params;
    const foundMessage = await db.findMessage(messageId);

    if (foundMessage.length === 0) {
        res.render("404");
    }
    if (foundMessage) {
        res.render("message", { message: foundMessage[0] });
    }
});

module.exports = indexRouter;
