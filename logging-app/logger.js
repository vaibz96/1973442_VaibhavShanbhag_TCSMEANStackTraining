const userFunction = require("./jsonWriteExports"); // import functions from 

const fs = require("fs");

let usersObj = {
    users: []
}

fs.exists('userJson.json', function(exists){
    if (exists) {
        console.log('Yes file exists')

        fs.readFile('userJson.json', function (err, data){
            if(err){
                console.log(err);
            }else{
                usersObj = JSON.parse(data)

                userFunction.loggerFunction(usersObj) // function to take user input

                userFunction.writeToJsonFunction(usersObj, "userJson.json") // function to store json file
            }
        });
    }  else {

        console.log("file not exists");

        userFunction.loggerFunction(usersObj) // function to take the user function
                
        userFunction.writeToJsonFunction(usersObj, "userJson.json") // function to store json file
    } 
});