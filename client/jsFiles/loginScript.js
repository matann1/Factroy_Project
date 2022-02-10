let flag=true;

async function loginFunc(){
    var user=document.getElementById("user").value;
    var password=document.getElementById("password").value;
    
    let flag=true;
    let resp = await fetch("https://localhost:44341/api/user");
    let users = await resp.json();

    users.forEach(temp => {
        var userName= temp.User_Name;
        var noSpacesString= userName.replace(/ /g,'');
        if(noSpacesString==user&&temp.Password==password){
            flag=false;
        let id=temp.ID;
         user=user.charAt(0).toUpperCase() + user.slice(1);

         let userStr = JSON.stringify(user);
         let idStr = JSON.stringify(id);
         //debugger;   
         sessionStorage["user"] = userStr;
         sessionStorage["id"] = idStr;

        checkUser(temp.ID,temp).then(data=>{
               if(data==1){
                location.href="homePage.html";
               }else{
                location.href="login.html";
               }}).catch(error => {
                console.error('something wrong');
               })
            }
    })
    if(flag){
            document.getElementById("user").value="";
            document.getElementById("password").value="";
            alert("The user or password incorrect!");
    }
}
