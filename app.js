const express = require("express");
const app = express();


//routers
const authRouter = require("./routes/auth");

app.use("/api/v1/auth", authRouter);


app.listen(3000, () => console.log("server is listening on port 3000"));
