const express = require("express");
const path = require("path");

const app = express();

//whenever it has forward /static, serve this static directory as per usual
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
})

app.listen(process.env.PORT || 5000, () => console.log("Server running.."))