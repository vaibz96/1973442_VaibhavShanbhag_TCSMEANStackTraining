const fs = require("fs");

const reader = require('readline-sync');

exports.loggerFunction = function(data){

    let records = reader.question('Enter the number of records you want to store ');

    for (let i = 0; i < records; i++) {

        // convert Json to string
                
        let fname = reader.question("Enter the first name ");

        let lname = reader.question("Enter the last name ");
                
        let salary = reader.question("Enter the salary ");

        let gender = reader.question("Enter your gender ")

        debugger;
        var time =  new Date().toLocaleString();
                
        debugger;
        data.users.push({fname, lname, salary, gender, time});
                    
        }
}

exports.writeToJsonFunction = function(data, jsonFile){
    debugger;
    var userString = JSON.stringify(data);
                
    fs.writeFile(jsonFile, userString, (err)=>{
        if(!err){
            console.log("Records stored successfully")
        }
    });
}