const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");

const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
        id: uuidv4(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
        id: uuidv4(),
    },
];

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
    res.render("form");
});

indexRouter.post("/new", (req, res) => {
    const the_author = req.body["authorName"];
    const the_message = req.body["authorMessage"];
    messages.push({
        text: the_message,
        user: the_author,
        added: new Date(),
        id: uuidv4(),
    });

    console.log(req.body);

    res.redirect("/");
});

indexRouter.get("/message/:messageId", (req, res) => {
    const { messageId } = req.params;
    // check if messageId is in the message array
    const foundMessage = messages.find((msg) => msg.id === messageId);
    // if it is - display message details
    if (!foundMessage) {
        res.render("404");
    }
    if (foundMessage) {
        res.render("message", { message: foundMessage });
    }
});

module.exports = indexRouter;
