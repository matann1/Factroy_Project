
function getStorage(){
    let str=sessionStorage["user"];
    
    let user =  JSON.parse(str);
    document.getElementById("nav").innerText="Hello "+user;
}


async function getDepartmentFromServer()
{
    flag=true;
    //Getting a URL Parameter 
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idDep = urlParams.get('id')
    console.log(idDep);


    let x=sessionStorage["id"];
    let id =  JSON.parse(x);

    let resp = await fetch("https://localhost:44341/api/employee/"+idDep);
    let employee = await resp.json();

    let respDep = await fetch("https://localhost:44341/api/department");
    let departments = await respDep.json();
//debugger;
    
    //dep=departments.find(x=>x.Manager==id);
    document.getElementById("fname").value=employee.First_Name;
    document.getElementById("lname").value=employee.Last_Name;
    document.getElementById("sws").value=employee.Start_Work_Year;
    //debugger;
    //created drop down list of department
    departments.forEach(department => {
        var option = document.createElement("option");
        option.value  = department.ID;
        option.text = department.Name;
        select.appendChild(option);
        document.getElementById("select").appendChild(option);
    });

    //document.getElementById("depid").value=employee.DepartmentID;
    

}

async function save()
{
   // debugger;
   let idDep=await checkIdUser();
    
    let obj = {First_Name : document.getElementById("fname").value,
               Last_Name : document.getElementById("lname").value,
               Start_Work_Year : document.getElementById("sws").value,
               DepartmentID : document.getElementById("select").value,}

       let ress = await fetch("https://localhost:44341/api/employee/"+idDep);
       let employee = await ress.json();

        let fetchParams = {method : 'PUT',
        body : JSON.stringify(obj),
        headers : {"Content-Type" : "application/json"}
        
}

let resp = await fetch("https://localhost:44341/api/employee/"+idDep,fetchParams);


console.log("Edit");
    
location.href="employee.html";
}
