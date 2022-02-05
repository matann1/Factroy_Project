flag=true;
    //Getting a URL Parameter 
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idDep = urlParams.get('id')
console.log(idDep);

function getStorage(){
    let str=sessionStorage["user"];
    
    let user =  JSON.parse(str);
    document.getElementById("nav").innerText="Hello "+user;
}


async function getDepartmentFromServer()
{
    let x=sessionStorage["id"];
    let id =  JSON.parse(x);

    let resp = await fetch("https://localhost:44341/api/department/"+idDep);
    let department = await resp.json();
//debugger;
    
    //dep=departments.find(x=>x.Manager==id);
    document.getElementById("name").value=department.Name;
    document.getElementById("manager").value=department.Manager;


}

async function save()
{
   // debugger;
   // take from sessionStorage, check user and check actions
   let idDep=await checkIdUser();
     
    
    let obj = {Name : document.getElementById("name").value,
       Manager : document.getElementById("manager").value,}

       let ress = await fetch("https://localhost:44341/api/department/"+idDep);
       let department = await ress.json();
       // department.find(department.ID==)

        let fetchParams = {method : 'PUT',
        body : JSON.stringify(obj),
        headers : {"Content-Type" : "application/json"}
        
}

let resp = await fetch("https://localhost:44341/api/department/"+idDep,fetchParams);

console.log("Edit");
    
location.href="department.html";
}
