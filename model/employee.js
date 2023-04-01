const mongoose = require("mongoose");

const informationSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    salary: String,
    department: String,
    lastCompany: String,
    lastSalary: String,
    overallExp: String,
    contactInfo: String,
    yearGrad: String,
    gradStream: String
});

const Information = mongoose.model("employee", informationSchema, "employee")

module.exports = {Information};