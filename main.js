var uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharcters = [
    "!",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];
  var allOptions = [];
  let password = "";
  function generate() {
    // on click prompt do you want a new password
    var newPass = confirm("Do you want a new password?");
    
      // Ask if uppercase wanted
      var allowUppercaseChars = confirm("Do you want uppercase characters?");
      // if yes then array conatining uppercase letters will be used in randomizer
      
  
      // ask if lowercase is wanted
      var allowLowercaseChars = confirm("Do you want lowercase characters?");
      // if yes then array conataining lowercase letters will be used in randomizer
     
  
      // ask if numbers are wanted
      var allowNumber = confirm("Do you want numbers?");
      // if yes then array containing numbers will be used in randomizer
      
  
      // ask if special characters are wanted
      var allowSpecialChars = confirm("Do you want special characters?");
      // if yes than array containing special characters will be used in randomizer
      
  
      //   ask how many characters they want
      var length = prompt("How many characters do you want in your password? 8 min, 128 max.");
        // if length if valid
       
  
      // alert with new password
     