
async function checkUser(id,user)
{
// debugger;
    
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = yyyy + '-' + mm + '-' + dd+"T00:00:00";
    debugger;
   
    if(user.Date!=today)
    {
        let action=10;
        let obj = 
        {   Full_Name: user.Full_Name,
            User_Name: user.User_Name,
            Password:user.Password,
            Num_Of_Actions: action,
            Date : today
        }
        let fetchParams =  
        {
        method : 'PUT',
        body : JSON.stringify(obj),
        headers : {"Content-Type" : "application/json"}
        }
        let res = await fetch("https://localhost:44341/api/user/"+ id,fetchParams);
        return(1)

    }
    else
    {
        if(user.Num_Of_Actions==0)
        {
            alert('Sorry your actions are over today!');
            return(0);
        }
        else
        {
            let obj = 
            {   Full_Name: user.Full_Name,
                User_Name: user.User_Name,
                Password:user.Password,
                Num_Of_Actions: user.Num_Of_Actions-1,
                Date : today
            }
            let fetchParams =  
            {
            method : 'PUT',
            body : JSON.stringify(obj),
            headers : {"Content-Type" : "application/json"}
            }
            let res = await fetch("https://localhost:44341/api/user/"+ id,fetchParams);
            return(1)
        }
      
    }
    

}

