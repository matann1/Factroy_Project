function getStorage(){
    let str=sessionStorage["user"];
    
    let user =  JSON.parse(str);
    document.getElementById("nav").innerText="Hello "+user;
}

async function search(){

    let temp = document.getElementById('input').value;
    console.log(temp);

    let x=await checkIdUser();

    let resp = await fetch("https://localhost:44341/api/Employee");
    let employees = await resp.json();
//debugger;
    employees.forEach(async employee => {
        if(employee.First_Name==temp){
            window.location.href="search.html?fname="+temp+"&lname="+""+"&department="+0
            console.log(employee)
        }else if(employee.Last_Name==temp){
            window.location.href="search.html?fname="+""+"&lname="+temp+"&department="+0
            console.log(employee)
        }else if(employee.DepartmentID==temp){
            window.location.href="search.html?fname="+""+"&lname="+""+"&department="+temp
            console.log(employee)
        }
    });

}