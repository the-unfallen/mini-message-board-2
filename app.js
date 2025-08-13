const express = require("express");
const app = express();

// Middleware to parse url-encoded data
app.use(express.urlencoded({ extended: true }));

const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

const indexRouter = require("./routes/indexRouter.js");

app.use("/", indexRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`My first express app - listening on port ${PORT}!`);
});

// app.get("/new", (req, res) => {
//     res.render("index", { message: "This is a new message" });
// });
