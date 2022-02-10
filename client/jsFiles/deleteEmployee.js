async function deleteEmployee(idEmp)
{
        flag=true;
        let idDep=await checkIdUser();
        

    let resp = await fetch("https://localhost:44341/api/EmployeeShift");
    let EmployeeShifts = await resp.json();
//debugger;
     EmployeeShifts.forEach(async EmployeeShift => {
        if(EmployeeShift.EmployeeID==idEmp){
            let fetchParams = {method : 'DELETE',
            //body : JSON.stringify(obj),
            headers : {"Content-Type" : "application/json"}
        }
        let re = await fetch("https://localhost:44341/api/EmployeeShift/"+idEmp, fetchParams);
    }  
    });

    let fetchParams = {method : 'DELETE',
    //body : JSON.stringify(obj),
    headers : {"Content-Type" : "application/json"}
    }
    let resEmp = await fetch("https://localhost:44341/api/Employee/"+idEmp,fetchParams);



        location.href="employee.html";
}
