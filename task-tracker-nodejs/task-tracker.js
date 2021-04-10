let http = require("http");
let url = require("url");
let port = 9090;
const fs = require("fs");

var usersObj = {
    "users":[]
}

let formContent = `
    <html>
        <head>

        </head>
        <body>
            <center>
                <h1> Add Task </h1>
                <form action="/createTask" method="get">
                    <label>User ID</label>
                    <input type="text" name="user_id"/><br/>
                    <label>Task ID</label>
                    <input type="text" name="task_id"/><br/>
                    <label>Task Name</label>
                    <input type="text" name="task"/><br/>
                    <label>Deadline</label>
                    <input type="text" name="deadline"/><br/><br/>
                    <input type="submit" name="Add Task"/>
                    <input type="reset" name="Reset"/>
                </form><br/>
            </center> 
        </body>
    </html>
`
let deleteContent = `
    <html>
        <head>

        </head>
        <body>
            <center>
                <h1> Delete Task </h1>
                <form action="/deleteTask" method="get">
                    <label>Task ID</label>
                    <input type="text" name="task_id"/><br/><br/>
                    <input type="submit" name="delete Task"/>
                    <input type="reset" name="Reset"/>
                </form>
            </center> 
        </body>
    </html>
`

let server = http.createServer((req, res)=>{
    var pathInfo = url.parse(req.url, true).pathname;
    if(req.url=="/"){
        res.setHeader("content-type", "text/html");
        res.end(formContent)
    }else if(pathInfo=="/createTask"){
        let data = url.parse(req.url, true).query;
        // console.log(data)
        let user_id = data.user_id;
        let task_id = data.task_id;
        let task = data.task;
        let deadline = data.deadline;
        
        fs.exists('tasks.json', function(exists){
            if (exists) {
                console.log('Yes file exists')
        
                fs.readFile('tasks.json', function (err, data){
                    if(err){
                        console.log(err);
                    }else{
                        usersObj = JSON.parse(data)

                        usersObj.users.push({user_id, task_id, task, deadline})

                        // console.log(usersObj)

                        var userString = JSON.stringify(usersObj);
                        
                        fs.writeFile("tasks.json", userString, (err)=>{
                            if(!err){
                                console.log("Records stored successfully")
                            }
                        }); 
                    }
                });
            }  else {
        
                console.log("file not exists");

                usersObj.users.push({user_id, task_id, task, deadline})

                // console.log(usersObj)

                var userString = JSON.stringify(usersObj);
                
                fs.writeFile("tasks.json", userString, (err)=>{
                    if(!err){
                        console.log("Records stored successfully")
                    }
                });
            } 
        });
        console.log("Task Added Successfully")
        res.end("Task Added Successfully")
    }
    if(req.url=="/delete"){
        res.setHeader("content-type", "text/html");
        res.end(deleteContent)
    }else if (pathInfo=="/deleteTask"){
        let data = url.parse(req.url, true).query;
        let readFile = fs.readFileSync("tasks.json");
        let jsonTasks = JSON.parse(readFile);
        let task_id = data.task_id;
        let flag = 0;
        let j = 0;
        jsonTasks.users.find((c,i)=>{
            let tid = c.task_id;
            if(tid==task_id){
                j=i;
                flag++;
            }
        })
        if(flag==0){
            console.log("Task Id is invalid")
            res.end("Task Id is invalid")
        }else{
            jsonTasks.users.splice(j, 1);

            var userString = JSON.stringify(jsonTasks);
                
            fs.writeFile("tasks.json", userString, (err)=>{
                if(!err){
                    console.log("Records stored successfully")
                }
            });
            console.log("Deleted Task Successfully")
            res.end("Deleted Task Successfully")
        }
        
    }if (req.url=="/display"){
        let readFile = fs.readFileSync("tasks.json");
        let jsonTasks = JSON.parse(readFile);
        var taskTable = `
            <table border="1">
                <tr>
                    <th>Employee ID</th>
                    <th>Task ID</th>
                    <th>Task</th>
                    <th>Deadline</th>
        `
        for (let i=0; i<jsonTasks.users.length; i++){
            const userTask = jsonTasks.users[i]

            taskTable+= `
                <tr>
                    <td>${userTask.user_id}</td>
                    <td>${userTask.task_id}</td>
                    <td>${userTask.task}</td>
                    <td>${userTask.deadline}</td>
                </tr>
            `
        }
        taskTable+=`</table>`
        res.end(taskTable);
    }
})


server.listen(port, ()=>console.log(`Server running on port number ${port}`))
