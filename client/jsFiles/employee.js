async function getDataFromServer()
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
    let employee = await res.json();

    let body = document.getElementById("tBody");
    employee.forEach(empl =>
    {   
       
        let tdFName = document.createElement("td");
        tdFName.innerText = empl.First_Name;

        let tdLName = document.createElement("td");
        tdLName.innerText = empl.Last_Name;

        let tdStart = document.createElement("td");
        tdStart.innerText = empl.Start_Work_Year;
        
        let tdDep = document.createElement("td");
        tdDep.innerText = empl.DepartmentID;

        let tdShifts = document.createElement("td");

        let trObj = document.createElement("tr");

        let ulObj = document.createElement("ul");

        //foreach that run EmployeeShift
        emplShi.forEach(shi => {
          if(shi.EmployeeID==empl.ID){
            //foreach that run shifts
            shifts.forEach(shift => {
              if(shi.ShiftID==shift.ID){
                let liObj = document.createElement("li");
                //remove the time from date
                var date=shift.Date.split('T')[0];
                //flip the date
                  date=date.split("-").reverse().join("-");
                 
                  liObj.innerText = date+ " "+"Time: "+ shift.Start_Time+ "-"+ shift.End_Time;
        
                  ulObj.appendChild(liObj);   
              }
            });
                
            }

   
        }); 

        
        let tdEmpty = document.createElement("td");


        tdLink1=document.createElement("a");
        tdLink2=document.createElement("a");
        tdLink3=document.createElement("a");
        tdLink1.innerText=" Edit ";
        tdLink1.href="editEmployee.html?id="+empl.ID;
       
    
        tdLink2.innerText=" Delete ";
        tdLink2.href=`javascript:deleteEmployee(${empl.ID})`
      
       // tdLink2.href=`javascript:deleteDepartment(${department.ID})`
       // tdLink2.href="javascript:deleteDepartment('"+id+"')"
       tdLink3.innerText=" Add Shift";
       tdLink3.href="addShiftToemployee.html?id="+empl.ID;
       //tdLink3.href="editDepartment.html?id="+department.ID
        tdEmpty.appendChild(tdLink1);
        tdEmpty.appendChild(tdLink2);
        tdEmpty.appendChild(tdLink3);

        tdShifts.appendChild(ulObj);


        trObj.appendChild(tdFName);
        trObj.appendChild(tdLName);
        trObj.appendChild(tdStart);
        trObj.appendChild(tdDep);
        trObj.appendChild(tdShifts);
        trObj.appendChild(tdEmpty);
  


        body.appendChild(trObj);
            
    })
}
