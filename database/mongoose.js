const mongoose = require("mongoose");

const url = "mongodb+srv://dbAnamika:dbanamika@atlascluster.fkp9jnq.mongodb.net/Human_Resource?retryWrites=true&w=majority";

const connect = async() => {
    try {
        console.log("Connecting to db...")
        const dbConn = await mongoose.connect(url);
        console.log("dbconn =>", dbConn)
    } catch(error) {
        console.log("Error in coneccting db")
    }
}

module.exports = connect;