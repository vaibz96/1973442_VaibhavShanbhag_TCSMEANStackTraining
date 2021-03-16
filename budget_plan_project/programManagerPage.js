var budgetObj = [];

function storeInSession() {
    sessionStorage.setItem("budgetInfo", JSON.stringify(budgetObj))
}
function retrieveFromSession() {
    var objData = sessionStorage.getItem("budgetInfo");
    var objDataJson = JSON.parse(objData)
    for(var i=0; i<=objDataJson.length; i++){
        insertNewRecord(objDataJson[i])
    }
}

function onFormSubmit(){
    var data = readFormData();
    budgetObj.push(data);      //in budgetObj   
}

function readFormData() {
    var obj = {}    // empty object
    obj.client = document.getElementById("client").value;
    obj.product = document.getElementById("product").value;
    obj.amount = document.getElementById("amount").value;
    console.log(obj);
    return obj; 
}

function insertNewRecord(data){
    var table = document.getElementById("budget")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);  // row created 
   
    var cell1 = newRow.insertCell(0);          // cell created 
    cell1.innerHTML=data.client;                 // value placed 
   
    var cell2 = newRow.insertCell(1);          // cell created 
    cell2.innerHTML=data.product;                 // value placed
   
    var cell3 = newRow.insertCell(2);          // cell created 
    cell3.innerHTML="$"+ data.amount;                 // value placed
}

function resetData() {
    document.getElementById("client").value="";
    document.getElementById("product").value="";
    document.getElementById("amount").value="";
}
