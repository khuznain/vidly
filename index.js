const express = require("express");
const app = express();

require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
