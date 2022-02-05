function getStorage(){
    let str=sessionStorage["user"];
    let user =  JSON.parse(str);
    document.getElementById("nav").innerText="Hello "+user;
}