const mongoose = require("mongoose");

const uri = "mongodb+srv://Mathavaroopan:Mathavaroopan2004@summa.p7goq5q.mongodb.net/?retryWrites=true&w=majority";


const database = async() => {
    try{
        await mongoose.connect(uri)
        console.log("Connected to mongodb")
    }catch(err) {
        console.log(err.message);
    }
}

module.exports = database;