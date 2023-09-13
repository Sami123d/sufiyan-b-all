var StoredEmail ="sami1@gmail.com"

var StoredPassword ="12345678"
var forgotPassword ;

var firstName = document.getElementById('F-name') 
var LastName = document.getElementById('L-name') 
var UserGivenEmail = document.getElementById('Email') 
var Password = document.getElementById('pass') 
var Cpassword = document.getElementById('Cpass') 



function signUpHandler() {
     //empty fields ky lye
    if (firstName.value == "" 
    ||LastName.value == ""
    || UserGivenEmail.value ==""
    || Password.value == ""
    || Cpassword.value == "") {
      return  alert("please fill all fields")
    }
  if (Password.value != Cpassword.value){
    return alert("your password does not match")
  }
  if (Password.value.length < 8){
    return alert("your password must be 8 character long")
  }
  if( UserGivenEmail.value == StoredEmail){
    alert("your email already exist")  
   
  }
   
  alert("user sign up successfully")
  window.location = './login.html'

}
//login function
var getLoginEmail = document.getElementById("Login-Email")
var getLoginPass = document.getElementById("Login-Pass")
function loginHandler(){
    if(getLoginEmail.value == "" || getLoginPass.value == ""){
    return alert("Please fill all fields")
    }
    if(StoredEmail == getLoginEmail.value &&getLoginPass.value.length == 8 &&getLoginPass.value == StoredPassword ){
      return  alert("LOGIN SUCCESSFULLY")
    }
    if (StoredEmail != getLoginEmail.value){
      return  alert("email doesnot match ")
    }
    if (StoredPassword != getLoginPass.value ){
        return  alert("Password doesnot match , you can forgot pass now")
      }
    }

