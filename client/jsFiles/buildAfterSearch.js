async function getDataFromServer(){

    const queryString1 = window.location.search;
        console.log(queryString1)
        const urlParams = new URLSearchParams(queryString1);
        const fname = urlParams.get('fname')
        console.log(fname);
        const lname = urlParams.get('lname')
        console.log(lname);
        const department = urlParams.get('department')
        console.log(department);
        let employee;

    if(fname!=""){
        let resp= await fetch('https://localhost:44341/api/Employee?fname='+fname)
        employee=await resp.json();
    }
    else if(lname!=""){
        let resp= await fetch('https://localhost:44341/api/Employee?lname='+lname)
        employee=await resp.json();
    }
    else if(department!=0){
        let resp= await fetch('https://localhost:44341/api/Employee?department='+department)
        employee= await resp.json();
    }

    let resEmp= await fetch('https://localhost:44341/api/EmployeeShift')
    emplShi= await resEmp.json();

    let resShi= await fetch('https://localhost:44341/api/Shift')
    shifts= await resShi.json();
//debugger;
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
//debugger;
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

        tdShifts.appendChild(ulObj);

        trObj.appendChild(tdFName);
        trObj.appendChild(tdLName);
        trObj.appendChild(tdStart);
        trObj.appendChild(tdDep);
        trObj.appendChild(tdShifts);

        body.appendChild(trObj);
    }

    )}

