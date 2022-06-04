require('dotenv').config();

const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 8081;

const loginRouter = require('./server/routes/login.js');


//whenever it has forward /static, serve this static directory as per usual
app.use("/static", express.static(path.resolve(__dirname, "src", "static")));
app.use(express.json());
app.use(cookieParser());

app.use('/login', loginRouter);
//app.use('/', boardRouter);

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "src", "index.html"));
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;