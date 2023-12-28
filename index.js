const express = require("express");
const app = express();
const userRouter = require("./Router/userRouter.js");
const database = require("./database.js");

database();
app.use(userRouter);

app.listen(3000, () => {
    console.log("Server is listening on the port number 3000....")
})