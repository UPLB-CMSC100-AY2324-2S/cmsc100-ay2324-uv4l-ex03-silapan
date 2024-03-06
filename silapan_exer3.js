
// Function for validating a password
function validatePassword (password1, password2) {

    // Checks if two passwords given are a match
    if (password1 !== password2){
        return false;
    }

    // Checks if the length of the passwords are at least 8 characters 
    if (password1.length < 8) {
        return false;
    }

    // Set hasNumber to false
    var hasNumber = false;

    // Checks if the password contains at least 1 number  by looping through all characters in password
    for (var i = 0; i < password1.length; i++){
        if (!isNaN(password1[i])) {
            hasNumber = true;
            break;
        }
    }

    // If hasNumber is still false then there is no number in the password
    if (!hasNumber) {
        return false;
    }

    // Set hasUpperCase to false
    var hasUpperCase = false;

    // Checks if password contains a uppercase character by looping through all characters in password
    for (var i = 0; i < password1.length; i++) {
        if (password1[i] !== password1[i].toLowerCase()) {
        hasUpperCase = true;
        break;
        }
    }

    // If hasUpperCase is still false then there is no uppercase in the password
    if (!hasUpperCase) {
    return false;
    }

    // Set hasLowerCase to false
    var hasLowerCase = false;

    // Checks if password has lowercase by looping through all characters in password
    for (var i = 0; i < password1.length; i++) {
        if (password1[i] !== password1[i].toUpperCase()) {
            hasLowerCase = true;
            break;
        }
    }

    // If hasLowercase is still false then there is no lowercase characters
    if (!hasLowerCase){
        return false;
    }

    return true;

}

// Test cases
// console.log(validatePassword("helloworld", "hello"));  // returns false
// console.log(validatePassword("hello", "hello"));  // returns false
// console.log(validatePassword("hello1234", "hello1234"));  // returns false
// console.log(validatePassword("Hello1234", "Hello1234"));  // returns true
// console.log(validatePassword("HELLO1234", "HELLO1234"));  // returns false



// Function for reversing a password
function reversePassword(password) {
    // Initialize an empty string to hold the reversed password
    let reversedPassword = '';
  
    // Iterate over the password string in reverse order
    for (let i = password.length - 1; i >= 0; i--) {
      // Concatenate each character to the reversed password string
      reversedPassword += password[i];
    }
  
    // Return the reversed password string
    return reversedPassword;
}

// Test cases for reversing passwords
// console.log(reversePassword("Hello1234"));


// Function for storing password
function storePassword(name, password1, password2) {

    // Check validation of password (if it meets the specifications)
    if(validatePassword(password1,password2)) {
        return {
            // Return the name and the reversed password
            name: name,
            newpassword: reversePassword(password1)
        }
    } else {
        // Return the name and the original password
        return {
            name: name,
            newpassword: password1
        };
    }
} 


//Test cases for storing passwords
console.log(storePassword("John", "Pass1234", "Pass1234"));    
console.log(storePassword("John", "Pass123", "Pass12345"));