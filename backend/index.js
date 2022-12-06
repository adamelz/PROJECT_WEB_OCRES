const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Baptiste:12345@cluster0.nkuqqy1.mongodb.net/driverweight?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.delete("/delete/:id", async (req, res) => {

  const id = req.params.id;

  await DriverModel.findByIdAndRemove(id).exec();
  res.send("deleted");
})

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});
