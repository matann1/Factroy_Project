async function deleteDepartment(idDep)
{
    flag=true;
    let x=checkIdUser();

    let resp = await fetch("https://localhost:44341/api/employeeWithDepartment");
    let employeeWithDepartment = await resp.json();
//debugger;

employeeWithDepartment.forEach(emp => {
        if(emp.DepartmentID==idDep){
            flag=false;
        }
    });
    if(flag){
        let fetchParams = {method : 'DELETE',
        //body : JSON.stringify(obj),
        headers : {"Content-Type" : "application/json"}
    }
        
    
    let res = await fetch("https://localhost:44341/api/department/"+idDep, fetchParams);
}else{
    alert('This department is not empty!');
}

    location.href="department.html";
}
