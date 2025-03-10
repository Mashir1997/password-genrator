const passwordBox = document.getElementById("password");
const lenght = 12 ;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChar = upperCase + lowerCase + number + symbol;

function creatPassword(){
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while(lenght>password.length){
    password += allChar[Math.floor(Math.random() * allChar.length)];
  } 
  passwordBox.value = password;
}

function copyPassword(){
  passwordBox.select();
  document.execCommand("copy");

}