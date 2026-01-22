const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3500

app.listen(PORT,(err) => {
    console.log(`app is listening on port ${PORT}`);
})