window.onload  = function(){
    
const Requirement = / [a-z]{8}  [a-z]{*}  [0-9]{1}/;

const Email = document.querySelector("#Email");
const SignIn = document.querySelector("#signin");
var boolean = false;
function checkEntered(event){
    event.preventDefault();
    let EnteredEmail = Email.value.length;
    if(EnteredEmail > 10){
        boolean = true;
        console.log("Email Entered!");
        
    }
    else{
        boolean = false;
     Email.value = "Please enter valid Email";
    }
    var regularExp = /(\w{8,})+(\d)/;
    let passLength = document.querySelector("#PassEntered").value.length;
    let passText = document.querySelector("#PassEntered").value;

    if(passLength >= 8){
        let resultpass = regularExp.test(passText);
    
        if(resultpass){
            console.log("LogedIn");
        }
        else{
            console.log("enter password again");
        }


    }
    else{
    
         console.log("password Wrong!");
        
    }
}


SignIn.addEventListener("click", checkEntered, false);
//SignIn.addEventListener("click", PassReq, false);


}

