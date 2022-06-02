const express = require("express");
const path = require("path");

//express app 생성
const app = express();

app.get("/*", (req, res) => {
    express.static(path.resolve(__dirname, "frontend", "static"),
        { extensions: ["js"] });
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
