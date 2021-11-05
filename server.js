const express = require("express");
const app = express();
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const connectDB = require('./database')
const port = 3000
const path = require("path");
// const morgan = require('morgan')
app.use(express.urlencoded({ extended: false }));
// Using the folder assets as static
app.use(express.static("assets"));
app.use(express.static("uploads"));
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

const aboutRoute = require('./routes/aboutRoute')
const experienceRoute = require('./routes/experienceRoute')
const projectRoute = require('./routes/projectRoute')
const skillRoute = require('./routes/skillRoute')
// const userRoute = require('./routes/userRoute')
const backgroundRoute = require('./routes/backgroundRoute')
const completeRoute = require('./routes/completeRoute')
const portfolioRoute = require('./routes/portfolioRoute')




// Setting up the view engine 
app.set('view engine', 'ejs');

// Connecting the Database
connectDB();

// app.use(bodyParser.json());
app.use('/admin', aboutRoute)
app.use("/admin", experienceRoute);
app.use("/admin", projectRoute);
app.use("/admin", skillRoute);
// app.use("/admin", userRoute);
app.use("/admin", backgroundRoute);
app.use("/admin", completeRoute);
app.use(portfolioRoute);





app.get('/', function(req, res) {
    //res.send("Hello World!")
    res.render('index.ejs');
});

app.listen(port, () =>
    console.log(`server is running in port ${port}`)
);
