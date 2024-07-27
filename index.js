function validation(){
    if(document.Formfill.username.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else   if(document.Formfill.username.value.length<6){
        document.getElementById("result").innerHTML="Atleast Six Letter*";
        return false;
    }
    else   if(document.Formfill.email.value==""){
        document.getElementById("result").innerHTML="Enter Your Email*";
        return false;
    }
    else   if(document.Formfill.password.value==""){
        document.getElementById("result").innerHTML="Enter Your Password*";
        return false;
    }
    else   if(document.Formfill.password.value.length<=6){
        document.getElementById("result").innerHTML="Password must be of 6.digit*";
        return false;
    }
    else   if(document.Formfill.Cpassword.value==""){
        document.getElementById("result").innerHTML="Enter Confirm Password*";
        return false;
    }
    else   if(document.Formfill.Cpassword.value !== document.Formfill.password.value){
        document.getElementById("result").innerHTML="Password does not match*";
        return false;
    }
    else   if(document.Formfill.password.value == document.Formfill.Cpassword.value){
        document.querySelector('.popup').classList.add("open-slide")
        return false;
    }
}
var popup=document.getElementById('popup');
function CloseSlide(){
    document.querySelector('.popup').classList.remove("open-slide")
}