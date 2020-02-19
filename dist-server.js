const express = require("express");
const compression = require("compression");
const path = require("path");
const app = express();
const port = 3000;
app.use(compression());
app.use(express.static(path.join(__dirname, "dist")));
// app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
