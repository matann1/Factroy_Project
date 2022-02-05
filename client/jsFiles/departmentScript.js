
async function getEmployeeFromServer()
{
    let str=sessionStorage["user"];
    let user =  JSON.parse(str);
    document.getElementById("nav").innerText="Hello "+user;

    let resp = await fetch("https://localhost:44341/api/department");
    let departments = await resp.json();

    let respEmp = await fetch("https://localhost:44341/api/employee");
    let employees = await respEmp.json();
//debugger;

    let body = document.getElementById("tBody");
    departments.forEach(department =>
    {   
       
        let tdFName = document.createElement("td");
        tdFName.innerText = department.Name;

        let tdManager = document.createElement("td");
        tdManager.innerText = department.Manager;

        let tdEmpty = document.createElement("td");


        tdLink1=document.createElement("a");
        tdLink2=document.createElement("a");
        tdLink1.innerText="Edit ";
        tdLink1.href="editDepartment.html?id="+department.ID

        tdLink2.innerText="Delete";
        tdLink2.href=`javascript:deleteDepartment(${department.ID})`

        tdEmpty.appendChild(tdLink1);
        tdEmpty.appendChild(tdLink2);
        employees.forEach(employee => {
            if(department.ID==employee.DepartmentID){
                tdLink2.style.visibility="hidden";
            }
        });

        let trObj = document.createElement("tr");

        trObj.appendChild(tdFName);
        trObj.appendChild(tdManager);
        trObj.appendChild(tdEmpty);

        body.appendChild(trObj);
            
    })
}

