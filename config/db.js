const mongoose = require("mongoose");

const mongodbURL = `mongodb+srv://Tarun:curUVEjEj1ANPdef@cluster0.jwqci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(
  mongodbURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Connected Successfully to MongoDB");
    }
  }
);

module.exports = mongoose;
