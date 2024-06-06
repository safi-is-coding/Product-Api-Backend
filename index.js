const express = require("express")
const mongoose = require("mongoose");
const productRoute = require("./routes/products.route.js")
// const connectDB = require("./db/DBConnection.js")
const path = require('path');

const app = express()

// DB Connection
// connectDB()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'src')));

// routes
app.use("/api/products", productRoute)

// root route
app.get('/', (req, res)=> {
    // res.send('<h1 style="color: red; text-align: center; font-size: 3rem;">This is the backend of the Product API</h1>')

    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});





mongoose.connect("mongodb+srv://safimaz:safimaz123@backenddb.wphyzpb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=> {
    console.log("Connected to DATABASE !");

    app.listen(3000, ()=> {
        console.log(`Server is running at port 3000`);
    });

})
.catch((err)=> {
    console.log("DB connection error : ", err);
});

