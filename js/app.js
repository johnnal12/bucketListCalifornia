function validate(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "admin" && password === "password"){
        alert("Login Successfully");
    }
    else{
        alert("Wrong password");
    }
}