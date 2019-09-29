const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
var Sequelize = require("sequelize");
const Model = Sequelize.Model;

var sequelize = new Sequelize("hackathon", "login", "password", {
  host: "localhost",
  dialect: "mysql"
});

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "./../client/dist")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const API_PORT = process.env.API_PORT || 3001;

app.post("/api/user/add", (req, res) => {
    console.log(req);
  res.json({ message: "ok" });
});

// all another requests
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "./../client/dist/index.html"));
});

class User extends Model {}
User.init(
  {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
  },
  {
    sequelize,
    modelName: "user"
    // options
  }
);

User.sync().then(() => {
  // Now the `users` table in the database corresponds to the model definition
  return User.create({
    firstName: "John",
    lastName: "Hancock"
  });
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
