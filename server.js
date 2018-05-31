const express     = require("express");
const bodyParser  = require("body-parser");
const fccTesting  = require("./freeCodeCamp/fcctesting.js");
const path = require("path");
const port = process.env.PORT || 3000;

const app = express();

fccTesting(app); //For FCC testing purposes
app.set(path.join(__dirname, "public"));
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.route('/')
  .get((req, res) => {
    res.render("pug/index");
  });

app.listen(port, () => {
  console.log("Listening on port " + port );
});
