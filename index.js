const express = require("express")
const app = express();
const mongoose = require("mongoose");

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
  }


app.listen(8800, ()=>{
    console.log("Backend Server is running!")
});