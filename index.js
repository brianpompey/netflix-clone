const express = require("express")
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('process.env.MONGO_URL');

    console.log("DB Connection Successful"));
  }


app.listen(8800, ()=>{
    console.log("Backend Server is running!")
});