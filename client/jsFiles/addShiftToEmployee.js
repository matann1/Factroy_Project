
async function getUser()
{
    flag=true;

    let idDep=await checkIdUser();

    let x=sessionStorage["id"];
    let id =  JSON.parse(x);


    let respShi = await fetch("https://localhost:44341/api/shift");
    let shifts = await respShi.json();

    //created drop down list of shifts
    shifts.forEach(shift => {
        var option = document.createElement("option");
        option.value  = shift.ID;
        option.text = shift.ID;
        select.appendChild(option);
        document.getElementById("select").appendChild(option);
    });
    

}

async function save()
{
    let flag=true;

    let id=sessionStorage["id"];
    let res = await fetch("https://localhost:44341/api/user/"+ id);
    let user = await res.json();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idEmp = urlParams.get('id')
    console.log(idEmp);


    checkUser(id, user).then(data=>{
        if(data==0){
         location.href="login.html";
        }}).catch(error => {
         console.error('something wrong');
        })
        let resEmp = await fetch("https://localhost:44341/api/employeeShift");
        let empShi = await resEmp.json();
    debugger;
    let obj = {EmployeeID : idEmp,
               ShiftID : document.getElementById("select").value,
               }
        empShi.forEach(shift => {
            if(shift.ShiftID==obj.ShiftID&&shift.EmployeeID==idEmp){
                flag=false;
            }
        });
        if(flag){
            let fetchParams = {method : 'POST',
            body : JSON.stringify(obj),
            headers : {"Content-Type" : "application/json"}
        }
        let resp = await fetch("https://localhost:44341/api/employeeShift/"+idEmp,fetchParams);
}else{
    alert('This shift already exist');
}




console.log("Edit");
    
location.href="employee.html";
}
