// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passAnswer = "";
  var totalCnt = prompt("What's the minimum length of your password?", "8");
  totalCnt = parseInt(totalCnt);
  var maxCnt = prompt("What's the maximum length of your password?", "128");
  maxCnt = parseInt(maxCnt);


  //Criteria Prompts
  for (var promptCnt = 0; promptCnt == 0;) {

  var specialCnt = prompt("What's the minimum number of special Character(s) your password require?", "0");
  specialCnt = parseInt(specialCnt);

  var upperCnt = prompt("What's the minimum number of upper case Character(s) your password require?", "0");
  upperCnt = parseInt(upperCnt);

  var lowerCnt = prompt("What's the minimum number of lower case Character(s) your password require?", "0");
  lowerCnt = parseInt(lowerCnt);

  var NumberCnt = prompt("What's the minimum number of number(s) your password require?", "0");
  NumberCnt = parseInt(NumberCnt); 
  
  promptCnt = specialCnt + upperCnt + lowerCnt + NumberCnt;
  if (promptCnt == 0) {
    alert("You must select at least one criteria: Special Characters or Uppercase Characters or Lowercase Characters or Numbers");

  }

 }


  //For Special Character in Password

  var specialChar = "!@#$%^&*()_+-=`~/.,<>[]{}";
  for (var cnt = 0; cnt<specialCnt; cnt= cnt+1) {
  var randomCharNumber = Math.random() * specialChar.length;
  var roundCharNumber = Math.floor(randomCharNumber);
  var passSpecialchar = specialChar[roundCharNumber];
  passAnswer = passAnswer + passSpecialchar;
}

  //For uppercase Character in Password

  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var cnt = 0; cnt<upperCnt; cnt= cnt+1) {
  var randomUpperNum = Math.random() * upperChar.length;
  var roundUpperNum = Math.floor(randomUpperNum);
  var passUpperChar = upperChar[roundUpperNum];
  passAnswer = passAnswer + passUpperChar;
}

  //For lowercase Character in Password

  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  for (var cnt = 0; cnt<lowerCnt; cnt= cnt+1) {
  var randomLowerNum = Math.random() * lowerChar.length;
  var roundlowerNum = Math.floor(randomLowerNum);
  var passlowerChar = lowerChar[roundlowerNum];
  passAnswer = passAnswer + passlowerChar;
}

  //For Numbers in Password

  var Numbers = "0123456789";
  for (var cnt = 0; cnt<lowerCnt; cnt= cnt+1) {
  var randomNum = Math.random() * Numbers.length;
  var roundNumbers = Math.floor(randomNum);
  var passNumbers = Numbers[roundNumbers];
  passAnswer = passAnswer + passNumbers;
}

//For maintaing password's length

var remainderCnt = totalCnt - passAnswer.length;
var allChar = specialChar + upperChar + lowerChar + Numbers;
for (var cnt = 0; cnt<remainderCnt; cnt = cnt+1) {
  var randomallChar = Math.random() * allChar.length;
  var roundallChar = Math.floor(randomallChar);
  var passallChar = allChar[roundallChar];
  passAnswer = passAnswer + passallChar;
}
if (passAnswer.length>maxCnt) {
  alert("Please check your criteria again");
  return "Your inout is invalid";

}

  return passAnswer;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
