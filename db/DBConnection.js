const mongoose = require("mongoose");
const express = require("express");

const app = express();

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://safimaz:safimaz123@backenddb.wphyzpb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
        .then(()=>{
            console.log("Connected to DATABASE !");
            
            app.listen(3000, () => {
                console.log(`Server is running at port 3000`);
            });
        });
    } catch (error) {
        console.error("DB connection error:", error);
        process.exit(1); // Exit process with failure
    }
};

// const startServer = () => {
//     app.listen(3000, () => {
//         console.log(`Server is running at port 3000`);
//     });
// };

// Connect to the database and start the server
// connectDB().then(startServer);

module.exports = connectDB;
