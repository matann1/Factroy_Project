
function getUser(){
    let str=sessionStorage["user"];
    let user =  JSON.parse(str);
    document.getElementById("nav").innerText="Hello "+user;
}

async function save()
{
    flag=true;
   // debugger;
   let idDep=await checkIdUser();
     
    let obj = {Name : document.getElementById("name").value,
       Manager : document.getElementById("manager").value,}

       let ress = await fetch("https://localhost:44341/api/Department");
       let department = await ress.json();

       department.forEach(dep => {
           if(obj.Name==dep.Name&&flag){
               alert('This department is exists!')
               flag=false;
           }
       });
    if(flag){
        
        let fetchParams = {method : 'POST',
        body : JSON.stringify(obj),
        headers : {"Content-Type" : "application/json"}
        
}


let resp = await fetch("https://localhost:44341/api/Department",fetchParams);

console.log("Created");
    }
    document.getElementById("name").value="";
    document.getElementById("manager").value="";
    location.href="department.html";
}


