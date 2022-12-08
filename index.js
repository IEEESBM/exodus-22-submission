const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const Submission = require("./Submission");
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongoUrl = 'mongodb+srv://shreyaslshah:shreyasshah@cluster0.bakje.mongodb.net/exodus22?retryWrites=true&w=majority'
mongoose.connect(
  mongoUrl,
  { useNewUrlParser: true }
);

app.post('/submit', async function(req,res){
  const details = req.body.details;
  const link = req.body.link;

  try {
    const doc = await Submission.create({details, link});
    res.status(200).send(doc);
  } catch (error) {
    console.log(error);
    throw new Error('could not submit');
  }
})

app.listen(3010, () => {
  console.log("Server runnig on port 3010");
})