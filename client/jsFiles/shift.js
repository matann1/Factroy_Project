function getStorage(){
    let str=sessionStorage["user"];
    
    let user =  JSON.parse(str);
    document.getElementById("nav").innerText="Hello "+user;

    
}

async function getShiftsFromServer()
{
  let str=sessionStorage["user"];
  let user =  JSON.parse(str);
  document.getElementById("nav").innerText="Hello "+user;
//debugger
    let resp = await fetch("https://localhost:44341/api/EmployeeShift");
    let emplShi = await resp.json();

    let respS = await fetch("https://localhost:44341/api/Shift");
    let shifts = await respS.json();
//debugger;
    let res = await fetch("https://localhost:44341/api/employee");
    let employees = await res.json();

    let body = document.getElementById("tBody");
    shifts.forEach(shift =>
    {   
       
        let tdDate = document.createElement("td");
        //remove the time from date
        var date=shift.Date.split('T')[0];
        //flip the date
        date=date.split("-").reverse().join("-");
        tdDate.innerText = date;

        let tdStartTime = document.createElement("td");
        tdStartTime.innerText = shift.Start_Time;

        let tdEndTime = document.createElement("td");
        tdEndTime.innerText = shift.End_Time;

        let tdEmployee = document.createElement("td");

        let trObj = document.createElement("tr");

        let ulObj = document.createElement("ul");
//debugger;
        //foreach that run EmployeeShift
        emplShi.forEach(shi => {
          if(shi.ShiftID==shift.ID){
            //foreach that run employees
            employees.forEach(employee => {
              if(employee.ID==shi.EmployeeID){
                let liObj = document.createElement("li");
                tdLink1=document.createElement("a");
                tdLink1.innerText= employee.First_Name+" "+employee.Last_Name;
                tdLink1.href="editEmployee.html?id="+employee.ID;
                liObj.appendChild(tdLink1);
                ulObj.appendChild(liObj);   
              }
            });   
            }
        }); 


        tdEmployee.appendChild(ulObj);

        trObj.appendChild(tdDate);
        trObj.appendChild(tdStartTime);
        trObj.appendChild(tdEndTime);
        trObj.appendChild(tdEmployee);

        body.appendChild(trObj);
            
    })
}
