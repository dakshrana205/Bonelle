document.addEventListener('DOMContentLoaded', function() 
{//DOMContentLoaded use tab hota he jab puri hmtl file complete hu jayegi
    let usernameInput = document.querySelector('.id[placeholder="Username"]');
    let passwordInput = document.querySelector('.id[placeholder="Password"]');
    let confirmPasswordInput = document.querySelector('.id[placeholder="Confirm Password"]');
    let signUpButton = document.querySelector('.btn');

    signUpButton.addEventListener('click', function() {
    
        let username = usernameInput.value.trim();
        let password = passwordInput.value.trim();//ki jo bhi whitespace hugi vo delete hu jayegi
        let confirmPassword = confirmPasswordInput.value.trim();

        if (username === '' || password === '' || confirmPassword === '') 
        {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) 
        {
            alert('Passwords do not match. Please try again.');
            return;
        }

        else
        {
            alert('Thank you for Signing Up! Please Sign in Now.');
            window.location.href="/omniwatchproject/loginsignup.html"
            return;
        }

        usernameInput.value = '';
        passwordInput.value = '';
        confirmPasswordInput.value = '';
    });
});


function myfunc(event)
{
    event.preventDefault();
    let userName = document.getElementById("userName").value;
    let userPass = document.getElementById("userPass").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]//web server se data le rahe he
    if(user_records.some((v)=>{//.some returns true if at least one record is there
        return v.username==userName
    })){
        alert("Already signed up")
    }
    else{
        user_records.push({
            "username":userName,
            "userPass":userPass

        })
        localStorage.setItem("users",JSON.stringify(user_records));//web sserver ko data de rahe he
    }
}