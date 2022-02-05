
function getUser(){
    let str=sessionStorage["user"];
    let user =  JSON.parse(str);
    document.getElementById("nav").innerText="Hello "+user;
}

async function save()
{
    flag=true;
   // debugger;
   let idDep=await checkIdUser();
   var date=document.getElementById("date").value
   date=date.split("-").reverse().join("-");
     
    let obj = {Date : date,
               Start_Time : document.getElementById("stime").value,
               End_Time : document.getElementById("etime").value
            }

       let ress = await fetch("https://localhost:44341/api/shift");
       let shifts = await ress.json();

       shifts.forEach(shift => {
           if(obj.Date==shift.Date&&obj.Start_Time==shift.Start_Time&&obj.End_Time==shift.End_Time){
               alert('This shift is exists!')
               flag=false;
           }
       });
    if(flag){
        
        let fetchParams = {method : 'POST',
        body : JSON.stringify(obj),
        headers : {"Content-Type" : "application/json"}
        
}


let resp = await fetch("https://localhost:44341/api/shift",fetchParams);

console.log("Created");
    }
    document.getElementById("date").value="";
    document.getElementById("stime").value="";
    document.getElementById("etime").value="";
    location.href="shift.html";
}


