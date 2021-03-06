// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


passwordText.value = password;

}

function generatePassword() {
        // declare variables
    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var numbers = ["0","1","2","3","4","5","6","7","8","9"];
    var specialChar = ["!","#","$","%","&","*","(",")","+","-","="]
    
    var passwordLength = 0;

    while (passwordLength < 8 || passwordLength > 128) {
        // check for password length
        passwordLength = prompt("How many characters between 8-128 do you want in you password?")
    }
    var passwordArr = [];
    var notSelected = true;

    while (notSelected) {
        // check for lower case characters
        var yesLower = confirm("Do you want to include LOWER CASE characters?");
        if (yesLower) {
            for (var i=0;i<lowerCase.length;i++) {
                passwordArr.push(lowerCase[i]);
            }
            notSelected = false;
        }

        // check for upper case characters
        var yesUpper = confirm("Do you want to include UPPER CASE characters?");
        if (yesUpper) {
            for (var i=0;i<upperCase.length;i++) {
                passwordArr.push(upperCase[i]);
            }
            notSelected = false;
        }
        // check for numbers
        var yesNumbers = confirm("Do you want to include NUMBERS?");
        if (yesNumbers) {
            for (var i=0;i<numbers.length;i++) {
                passwordArr.push(numbers[i]);
            }
            notSelected = false;
        }
        // check for special characters
        var yesSpecial = confirm("Do you want to include SPECIAL characters?");
        if (yesSpecial) {
            for (var i=0;i<specialChar.length;i++) {
                passwordArr.push(specialChar[i]);
            }
            notSelected = false;
        }
    }

    // create password
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        password = password.concat(passwordArr[Math.floor(Math.random()*passwordArr.length)]);
    }

    return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



