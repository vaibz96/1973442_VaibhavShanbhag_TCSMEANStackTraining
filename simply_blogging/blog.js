var blogData=[];
function storeInSession() {
   sessionStorage.setItem("blogInfo",JSON.stringify(blogData));
}
function retrieveFromSession() {
    var obj = sessionStorage.getItem("blogInfo");
    var objJson = JSON.parse(obj);
    document.getElementById("title1").innerHTML="Article: "+objJson[0].title;
    document.getElementById("desc1").innerHTML="<u>Details:</u> "+objJson[0].desc;
    document.getElementById("image1").src=objJson[0].imageInfo;
    document.getElementById("title2").innerHTML="Article: "+objJson[1].title;
    document.getElementById("desc2").innerHTML="<u>Details:</u> "+objJson[1].desc;
    document.getElementById("image2").src=objJson[1].imageInfo;
    document.getElementById("title3").innerHTML="Article: "+objJson[2].title;
    document.getElementById("desc3").innerHTML="<u>Details:</u> "+objJson[2].desc;
    document.getElementById("image3").src=objJson[2].imageInfo;
}

function onFormSubmit() {
    var formData = addBlog();
    blogData.push(formData);  
    // console.log(blogData)
    storeInSession()
    resetForm();
}

function addBlog(){
    var objData = {};
    objData.title = document.getElementById("colFormLabelSm").value;
    objData.desc = document.getElementById("exampleFormControlTextarea1").value;
    objData.imageInfo = document.getElementById("formFile").files[0].name;
    console.log(objData)
    return objData;
}

function resetForm(){
    document.getElementById("colFormLabelSm").value="";
    document.getElementById("exampleFormControlTextarea1").value="";
    document.getElementById("formFile").files[0].name="";
}

