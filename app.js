require("dotenv").config();
const express = require("express");
const app = express();

//connectDB
const connectDB = require("./db/connect");
//routers
const authRouter = require("./routes/auth");

app.use("/api/v1/auth", authRouter);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
