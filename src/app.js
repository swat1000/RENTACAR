const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const path = require("path");
const hbs = require("hbs");
const router = require("./routes/router");

// linking the mongoose connection file
require("./db/connection");


const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
console.log(partials_path)

app.use(cors());
app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.use(express.static('public'));






app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
