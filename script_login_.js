let form=document.getElementById("form")
let email=document.getElementById("EMAIL")
let password=document.getElementById("Password")

form.addEventListener("submit",function(event){
    event.preventDefault();
    // console.log(email.value,password.value)
    let userDetails={
        email:email.value,
        password:password.value,
    }
   let Savedetails=JSON.parse( localStorage.getItem("userDetails" ) ) || {};
   if(userDetails.email===Savedetails.email &&
    userDetails.password===Savedetails.password
   ){
   console.log (localStorage.setItem("isAuth","Authoricated"));
   alert("Login Sucess")
   }
   else{
    alert("wrong crenditemtails")
   }

    });