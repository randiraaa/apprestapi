const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const port = 3000;

// Parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

// Panggil routes.js
const routes = require("./routes");
routes(app);

// Daftarkan menu routes dari index
app.use("/auth", require("./middleware"));

app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
