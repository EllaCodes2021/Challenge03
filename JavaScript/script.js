// Assignment code here
//gotta make an alert that gives this

var randomFunc = {
  hasLower: getRandomLower,
  hasUpper: getRandomUpper,
  hasNumber: getRandomNumber,
  hasSymbol: getRandomSymbol,
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  var length = +window.prompt ("How many characters needed for your password? Please choose between 8 - 128 characters.");{
    if (length >= 128 || length <=7) {
      window.alert("You need to choose a valid option. Try again!");
      var length = +window.prompt ("How many characters needed for your password? Please choose between 8 - 128 characters.");
    }
  }
  var hasUpper = window.confirm ("Does your password need UPPER CASE letters?");
  var hasLower = window.confirm ("Does your password need lower case letters?");
  var hasNumber = window.confirm ("Does your password need numbers?");
  var hasSymbol = window.confirm ("Does your password need Symbols?");
  var typesArr = [{ hasLower }, { hasSymbol }, { hasUpper }, { hasNumber }].filter
  (item => Object.values(item)[0]);
  if(typesArr.length ===0) {
    return '';
  }
  var generatedPassword = ""

  generatedPassword = generatePassword (length, typesArr)
  writePassword (generatedPassword); 
});

function writePassword(password) {
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
  function generatePassword (length, typesArr) {
    var password = "";
    for(let i=0; i < length; i ++) {
      var randomIndex = Math.floor(Math.random()* typesArr.length);
      var funcName = Object.keys(typesArr[randomIndex])[0]
        password += randomFunc [funcName]();
    }
    return password;
  }
  
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  function getRandomSymbol() {
    const symbols = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"
    return symbols [(Math.floor(Math.random() * symbols.length))];
  }