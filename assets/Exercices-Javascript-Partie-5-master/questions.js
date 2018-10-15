//sert a créé un tableau
var languagesArrayCreation = function () {
var languages = [];
languages.push("Html", "CSS", "Java", "PHP");
  return languages;
}
//tableau avec des numéro
var numbersArrayCreation = function () {
  var languages = [];
  languages.push(0, 1, 2, 3, 4, 5);
    return languages;

}
//remplacer un element du tableau
var ElementReplacement = function (languages) {
languages[2]='Javascript';
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
languages.push('Ruby', 'Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
numbers.unshift(-2, -1); //unshift sert a ajouter des elements au debut d'un tableau
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
languages.shift();//sert a supprimer le premier élement d'un tableau
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.pop();//sert a supprimer le dernier élement d'un tableau
    return languages;
}
//modification mediaString en media
var stringToArray = function (socialMediaInString) {
var socialMedia = socialMediaInString.split(',');
  return socialMedia;
}
//convertire un tableau en chaine de caractere toString automatiquement séparer par une virgule
var arrayToString = function (languages) {
var languages = languages.toString();
  return languages;
}

var arraySort = function (socialMedia) {
socialMedia = socialMedia.sort();// sort() sert a trier un tableau par ordre alphabétique 

  return socialMedia;
}

var arrayInvert = function (languages){
var languages = languages.reverse();//reserve() sert a inverser les éleùents tableau

  return languages;
}
