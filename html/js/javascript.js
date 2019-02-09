var char1 = 0;
var char2 = 0;
var char3 = 0;
var char4 = 0;
var index;

var missatgeerror;

var score = 0;
var reduce = 0;

var count = 0;
var uppercase = 0;
var lowercase = 0;
var numeros = 0;
var specialchar = 0;

function password() {
  var text = document.getElementById("input").value;
  var stringtext = text.split("");
  var array = [];

  score = 1.15^(text.length)-1;

  //codi ascii des de els chars que volem (des de 32 fins a 126)
  for (var n = 32; n <= 126; n++) {
    array[n] = 0;
  }

  //contador per a cada ascii diferent
  for (var n = 32; n <= 126; n++) {
    index = stringtext.charCodeAt(n);
    array[index] = array[index] + 1;
  }

  for (var n = 32; n <= 126; n++) {

  }

  //for per a veure si hi ha molts repetits seguits
  for (var n = 0; n <= text.length; n++) {
    char4 = (text.charAt(n));
    char3 = (text.charAt(n-1))
    char2 = (text.charAt(n-2))
    char1 = (text.charAt(n-3))

    if (char4 == char3 == char2 == char1) {
      missatgeerror = "Hi ha 4 lletres seguides repetides."
    }

    else if (char4 == char3 == char2){
      reduce = reduce + 10;
    }
    else if (char4 == char3) {
      reduce = reduce + 1;
    }
  }


  //contadors per a saber quants caracters tenim de cada "tipus"
  for (var n = 65; n <= 90; n++){
    uppercase = uppercase + array[n];
  }
  for (var n = 97; n <= 122; n++){
    lowercase = lowercase + array[n];
  }
  for (var n = 48; n <= 57; n++) {
    numeros = numeros + array[n];
  }
  for (var n = 32; n <= 47; n++) {
    specialchar = specialchar + array[n];
  }
  for (var n = 91; n <= 96; n++) {
    specialchar = specialchar + array[n];
  }
  for (var n = 123; n<=126; n++){
    specialchar = specialchar + array[n];
  }
  //per veure si es repeteixen, en la totalitat del password, masses chars del mateix "tipus"
  if ( (lowercase*100) / text.length == 100) {
    reduce = reduce + 20;
  }

  else if (lowercase*100 / text.length >= 75) {
    reduce = reduce + 15;
  }
  //
  if (uppercase*100 / text.length == 100) {
    reduce = reduce + 20;
  }
  else if (uppercase100 / text.length >= 75) {
    reduce = reduce + 15;
  }
  else if (uppercase*100 / text.length >= 50) {
    reduce = reduce + 10;
  }
  else if (uppercase*100 / text.length >= 25) {
  }
  else if (uppercase*100 / text.length == 0) {
    reduce = reduce + 10;
  }
  //
  if (numeros*100 / text.length == 100) {
    reduce = reduce + 20;
  }
  else if (numeros*100 / text.length >= 75) {
    reduce = reduce + 15;
  }
  else if (numeros*100 / text.length >= 50) {
    reduce = reduce + 10;
  }
  else if (numeros*100 / text.length >= 25) {
  }
  else if (numeros*100 / text.length == 0) {
    reduce = reduce + 10;
  }
  //
  if (specialchar*100 / text.length == 100) {
    reduce = reduce + 20;
  }
  else if (specialchar*100 / text.length >= 75) {
    reduce = reduce + 15;
  }
  else if (specialchar*100 / text.length >= 50) {
    reduce = reduce + 10;
  }
  else if (specialchar*100 / text.length >= 25) {
  }
  else if (specialchar*100 / text.length == 0) {
    reduce = reduce + 10;
  }

  score = score - reduce;
  console.log(score)

}
