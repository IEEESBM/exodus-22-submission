const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const submissionSchema = new Schema({
  details: [{
    name: {
      type: String,
    },
    regNo: {
      type: Number,
    },
    phone: {
      type: Number
    }
  }],
  link: {
    type: String,
  }
});

const Submission = mongoose.model("Submission", submissionSchema);

module.exports = Submission;