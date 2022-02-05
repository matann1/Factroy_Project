async function checkIdUser(){
    let id=sessionStorage["id"];
    let res = await fetch("https://localhost:44341/api/user/"+ id);
    let user = await res.json();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idDep = urlParams.get('id')
    debugger;
    checkUser(id, user).then(data=>{
        if(data==0){
         location.href="login.html";
        }}).catch(error => {
         console.error('something wrong');
        })

    return idDep;
}