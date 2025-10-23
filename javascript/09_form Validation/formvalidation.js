function submitForm(){
    var fullname= document.getElementById('fullname').value;
    var email= document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password= document.getElementById('password').value;


    var isFormValid = validFullName(fullname) && validemail(email) && validphone(phone) && validPassword(password)
    if (isFormValid){

     }
}

function validFullName(fullname){
    if(fullname.length === 0){
        document.getElementById('fullname-msg').innerHTML="FullName Required"
        return false
    }else if(fullname.length < 4){
      document.getElementById('fullname-msg').innerHTML="Minimum 4 Charecters   Required"  
      return false
   
    }
        else{
        return true
    }


}

function validemail(email){
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email.length === 0){
        document.getElementById("email-msg").innerHTML="Email Required"
        return false
    }
    else if(!emailRegex.test(email)){
         document.getElementById("email-msg").innerHTML="email formate is invalid"
         return false
        }
    
    else{
        return true
    }


}

function validphone(phone){
    var phoneRegex =/^[6-9]\d{9}$/
     if(phone.length === 0){
        document.getElementById("phone-msg").innerHTML="Phone number  Required"
        return false
    }
      if(!phoneRegex.test(phone)){
        document.getElementById("phone-msg").innerHTML="Phone number  Invalid"
        return false
      }
      else{
        return true
    }


}

function validatePassword(password) {
    var passwordMsgs = document.getElementsByClassName("password-msg");

    var lowerCapitalRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;   // checks lowercase + uppercase
    var numericSpecialCharRegex = /^(?=.*\d)(?=.*[@#$%^&*]).+$/; // checks number + special char

    if (password.length > 10 && password.length < 16) {
        passwordMsgs[0].style.color = 'green';
    }

    if (lowerCapitalRegex.test(password)) {
        passwordMsgs[1].style.color = 'green';
    }

    if (numericSpecialCharRegex.test(password)) {
        passwordMsgs[2].style.color = 'green';
    }

    return false;
}


function clearValidationMsgs(){
     document.getElementById("fullname-msg").innerHTML=" "
      document.getElementById("email-msg").innerHTML=" "
       document.getElementById("phone-msg").innerHTML=" "
        document.getElementById("password-msg").innerHTML=" "

}