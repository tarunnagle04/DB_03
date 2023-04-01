const {Information} = require("../model/employee");

const findAllEmployeeInDB = async (req, res) => {
    try {
        const dbResponse = await Information.find({});
        console.log("Data is fetched =>", dbResponse)
        return res.status(200).send({message: dbResponse})
    } catch(err) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}

const findEmployeeAccToSalaryInDB = async (req, res) => {
    const query = {salary: { $gt : "30000" }};
    try {
        const result = await Information.find(query);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}


const findEmployeeAccToExperienceInDB = async (req, res) => {
    const query = {overallExp : { $gt : "2" }};
    try {
        const result = await Information.find(query);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const findEmployeeAccToExperienceAndGraduateInDB = async (req, res) => {
    const query = {$and: [{ yearGrad : { $gt : "2015" }},{ overallExp : { $gt : "1" }}]};
    try {
        const result = await Information.find(query);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const updateSalaryInDB = async (req, res) => {
    const updateData = req.body;
    const filter = updateData.filter;
    const value = {$set: updateData.value}
    try {
        const result = await Information.updateMany(filter, value);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

const employeeDelete = async (req, res) => {
    const query = { lastCompany: "Y" } ;
    try {
        const result = await Information.deleteMany(query);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

module.exports = {
    findAllEmployeeInDB, 
    findEmployeeAccToSalaryInDB, 
    findEmployeeAccToExperienceInDB, 
    findEmployeeAccToExperienceAndGraduateInDB,
    updateSalaryInDB,
    employeeDelete
}