let obj = require("mongoose");  //load the module
obj.Promise = global.Promise; //creating the reference

let url = "mongodb://localhost:27017/meanstack";

const mongooseDbOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

obj.connect(url, mongooseDbOption); // ready to connect

let db = obj.connection; // connected to database

db.on("error", (err)=>console.log(err));

db.once("open", ()=>{
    // Defined the Schema
    let CallDataScehema = obj.Schema({
        _id: Number,
        source : String, 
        destination: String, 
        sourceLocation: String, 
        destinationLocation: String, 
        callDuration: String, 
        roaming: String, 
        callCharge: String
    });

    //creating model using schema
    var call_dataObj = require('./call_data.json')
    let Call_data = obj.model("", CallDataScehema, "Call_Data");

    Call_data.collection.insertMany(call_dataObj, function(err,result) {
        if(!err){
            resultObj = JSON.stringify(result)
            console.log("Inserted all the data in the collection "+resultObj)
        }else{
            console.log(err.message)
        }
        db.close();
        })
})