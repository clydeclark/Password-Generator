        
        
    function genPassword() {
        // declare variables
        var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        var numbers = ["0","1","2","3","4","5","6","7","8","9"];
        var specialChar = ["!","#","$","%","&","*","(",")","+","-","=",]
        // check for password length
        var passwordLength = prompt("How many characters do you want in you password?")

        var passwordArr = [];
        // check for lower case characters
        var yesLower = confirm("Do you want to include LOWER CASE characters?");
        if (yesLower) {
            for (var i=0;i<lowerCase.length;i++) {
                passwordArr.push(lowerCase[i]);
            }
        }

        // check for upper case characters
        var yesUpper = confirm("Do you want to include UPPER CASE characters?");
        if (yesUpper) {
            for (var i=0;i<upperCase.length;i++) {
                passwordArr.push(upperCase[i]);
            }
        }
        // check for numbers
        var yesNumbers = confirm("Do you want to include NUMBERS?");
        if (yesNumbers) {
            for (var i=0;i<numbers.length;i++) {
                passwordArr.push(numbers[i]);
            }
        }
        // check for special characters
        var yesSpecial = confirm("Do you want to include SPECIAL characters?");
        if (yesSpecial) {
            for (var i=0;i<specialChar.length;i++) {
                passwordArr.push(specialChar[i]);
            }
        }
        // create password
        var password = "";
        for (var i = 0; i < passwordLength; i++) {
            password = password.concat(passwordArr[Math.floor(Math.random()*passwordArr.length)]);
        }

        document.getElementById("formControlTextarea1").value = password;

    }