var generateBtn = document.querySelector("#generate");

function generatePassword(){
  let PNumber = "1234567890"
  let Puppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let Plowercase = "abcdefghijklmnopqrstuvwxyz";
  let Pspecial = "@#$%^&*()_+><?{}[]'"; 
  

    var number = prompt("How long would you like your password?");
  if (prompt === null){
      return;
    }

    if(prompt )

    var uppercase = prompt("Would you like uppercase characters?");
  if (prompt === null){
    return;
  }
  
 
  var lowercase = prompt("Would you like lowercase characters?");
  if (prompt === null){
    return;
  }
  
  var special = prompt("Would you like special characters?");
  if (prompt === null){
    return;

    
  }

  if (!generateBtn){
    return;
  }
 



}




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
