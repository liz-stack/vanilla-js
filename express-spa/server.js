require('dotenv').config();

const express = require("express");
const path = require("path");
const app = express();

//whenever it has forward /static, serve this static directory as per usual
app.use("/src", express.static(path.resolve(__dirname, "..", "src")));
app.use(express.json());

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "src", "index.html"));
})

app.listen(process.env.PORT || 8081, () => console.log("Server running.."))

module.exports = app;