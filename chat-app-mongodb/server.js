let app = require("express")();
let http = require("http").Server(app); // to load the library we have to run port number using the module
let io = require("socket.io")(http);
let obj = require("mongoose");  //load the module
obj.Promise = global.Promise; //creating the reference
const uuid = require('uuid')

let url = "mongodb://localhost:27017/meanstack";

const mongooseDbOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

obj.connect(url, mongooseDbOption); // ready to connect

let db = obj.connection; // connected to database

db.on("error", (err)=>console.log(err));

db.prependOnceListener("open", ()=>{
    let chatObj = {}
    
    io.on("connection", (socket)=>{
        socket.on("name", (name)=>{
            chatObj.name = name
        })
    })

    io.on("connection", (socket1)=>{
        socket1.on("message", (msg)=>{
            chatObj.message = msg
                // Defined the Schema
            let ChatScehema = obj.Schema({
                name : String, 
                message: String, 
            });
            
            //creating model using schema
            let Chat_data = obj.model("", ChatScehema, "Chat");
                
            let c1 = new Chat_data({name:chatObj.name, message:chatObj.message});
            c1.save((err, result)=>{
                if(!err){
                    console.log("record inserted successfully"+result);
                }else{
                    console.log(err);
                }
                obj.disconnect();  //close to disconnect
            })
        })
    })
})


http.listen(9090, ()=>console.log('Server running on port 9090'))