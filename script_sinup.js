let form=document.getElementById("form")
let email=document.getElementById("EMAIL")
let password=document.getElementById("Password")

form.addEventListener("submit",function(event){
    event.preventDefault();
    // console.log(email.value,password.value)
    let userDetails={
        email:email.value,
        password:password.value,
    };
    localStorage.setItem("userDetails",JSON.stringify(userDetails))
})