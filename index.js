document.addEventListener("DOMContentLoaded", function () {
    var usernameInput = document.querySelector('.id[placeholder="Username"]');
    var passwordInput = document.querySelector('.id[placeholder="Password"]');
    var loginButton = document.querySelector('.btn');

    loginButton.addEventListener('click', function (e) {
        e.preventDefault();
        var username = usernameInput.value;
        var password = passwordInput.value;

        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter both username and password.');
            return;
        }
        // if (username.trim() != '' || password.trim() != '') {
        //     alert('Thank you for Login!');
        //     return;
        // }

        console.log('Username:', username);
        console.log('Password:', password);

        

    });
});

function myfunction(event){
    event.preventDefault();
    let userName = document.getElementById("userName").value;
    let userPass = document.getElementById("userPass").value;

    let user_records =new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    if(user_records.some((v)=>{
        return v.username==userName && v.userPass== userPass
    })){
        alert("Login Successfull");
        let curr_user = user_records.filter((v)=>{
            return v.username==userName && v.userPass== userPass
        })[0]

        localStorage.setItem("Uname",curr_user.userName);
        localStorage.setItem("Upass",curr_user.userPass);
        window.location.href="/Home/index.html";
    }
    else{
        alert("Wrong username or password");
    }
}
