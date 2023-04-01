const express = require("express");
const bodyParser = require("body-parser");
const Connect = require("./database/mongoose");
const employeeRouter = require("./router/employee");
const app = express();

app.use(bodyParser.json());
app.use(employeeRouter);

app.listen(3000, async() => {
    await Connect();
    console.log("server is running at port 3000")
})
