let app = require("express")();

let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

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

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

// Read the insert Form and Store the data in mongodb
app.get("/insert.html", (req,res)=>{
    res.sendFile(__dirname+"/insert.html");
})

// Delete the data from the mongodb
app.get("/delete.html", (req,res)=>{
    res.sendFile(__dirname+"/delete.html");
})

// Update the field of a course in the mongodb database
app.get("/update.html", (req,res)=>{
    res.sendFile(__dirname+"/update.html");
})

db.once("open", ()=>{
    // Defined the Schema
    let CourseSchema = obj.Schema({
        _id:Number,
        name:String,
        desc:String,
        amount:String
    });
    app.post("/insertData", (req,res)=>{
        let course_id = req.body.id;
        let course_name = req.body.name;
        let course_desc = req.body.desc;
        let course_amount = req.body.amount;
        //creating model using schema
        let Course = obj.model("", CourseSchema, "Course");

        Course.insertMany({_id:course_id, name:course_name, desc:course_desc, amount:course_amount}, (err, result)=>{
            if(!err){
                console.log("record inserted successfully"+result);
            }else{
                console.log(err);
            }
            obj.disconnect();  //close to disconnect
        })
        res.send("Record Stored Successfully")
    })  
})

db.once("open", ()=>{
    // Defined the Schema
    let CourseSchema = obj.Schema({
        _id:Number,
        name:String,
        desc:String,
        amount:String
    });

    app.post("/deleteData", (req,res)=>{
        let course_id = req.body.id;
        //creating model using schema
        let Course = obj.model("", CourseSchema, "Course");
        
        Course.deleteOne({_id:course_id}, (err, result)=>{
            if(!err){
                if(result.deletedCount>0){
                    console.log("Record deleted")
                }else{
                    console.log("Record not present")
                }
            }
            obj.disconnect();  //close to disconnect
        })
        res.send("Record Deleted Successfully");
    })
})

db.once("open", ()=>{
    // Defined the Schema
    let CourseSchema = obj.Schema({
        _id:Number,
        name:String,
        desc:String,
        amount:String
    });

    app.get("/retrieveData", (req,res)=>{
        let courseList = []
        //creating model using schema
        let Course = obj.model("", CourseSchema, "Course");

        Course.find({}, (err, result)=>{
            if(!err){
                result.forEach(doc=>courseList.push(doc))
                res.send(courseList);
            }
            obj.disconnect();  //close to disconnect
        })
    })
})

db.once("open", ()=>{
    // Defined the Schema
    let CourseSchema = obj.Schema({
        _id:Number,
        name:String,
        desc:String,
        amount:String
    });
 
    app.post("/updateData", (req,res)=>{
        let course_id = req.body.id;
        let course_amount = req.body.amount;
        //creating model using schema
        let Course = obj.model("", CourseSchema, "Course");

        Course.updateOne({_id:course_id}, {$set:{amount:course_amount}}, (err, result)=>{
            if(!err){
                if(result.nModified>0){
                    console.log("Record updated")
                }else{
                    console.log("Record not present")
                } 
            }
            obj.disconnect();  //close to disconnect
        })
        res.send("Record Updated Successfully")
    })
})

app.listen(9090, ()=>console.log("Server running on port 9090"))