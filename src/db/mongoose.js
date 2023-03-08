const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbname = "store-db";
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGODB_URL + "/" + dbname, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
