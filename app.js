require("dotenv").config();
const express = require("express");
const app = express();

//error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

//connectDB
const connectDB = require("./db/connect");
//routers
const authRouter = require("./routes/auth");

app.use("/api/v1/auth", authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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
