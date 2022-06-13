//Nom de l'utilisateur
/*var prenom = prompt("Comment vous appelez-vous ?");

var salutation = "bonjour " + prenom;

document.body.innerHTML += "<h2>" + salutation + "</h2>";

console.log(salutation);*/


//Code de Zoé
function askName() {
    let person = prompt("Name ?")
    var hiName = ("&#9995 bonjour " + person)
    document.body.innerHTML += '<h2>' + hiName + '<h2>';
}
askName();



//L'âge de l'utilisateur
var year = prompt("En quelle anné êtes-vous né ?");

function askBirthYear(date) {
    var diff = Date.now() - date.getTime();
    var age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
}
alert(askBirthYear(new Date(year))); 