   const prompt = require("prompt-sync")();
   
    var historique = [];
    let resultat;
    
    function addition(a, b) {
        return a+b;
    }
    function soustraction(a, b) {
        return a-b;
    }    
    function multiplication(a, b) {
        return a*b;
    }    
    function division(a, b) {
        if (b === 0) {
            alert("Erreur : Division par zéro !");
            return null;
        }
        return a/b;
    }
    function puissance(a,b){
        return Math.pow(a,b);
    }
    function racineCarree(a){
        return Math.sqrt(a);
    }
    function Factorielle(a){
            var res = 1;
        for (var i = 1; i <= a; i++) {
             res = res * i;
            
        }
        return res;
    }

    function ajouterHistorique(historique, a, b, operation, resultat) {
    historique.push({
        nombre1: a,
        nombre2: b,
        operation: operation,
        resultat: resultat
    });
}




while (true) {

    let operation = prompt("Entrez l'opération (+, -, /, **, ^^, //) ou 0 pour quitter :");

    if (operation === "0") {
        console.log("Fin du programme");
        break;
    }

    let nombre1 = Number(prompt("Entrez le premier nombre :"));
    let nombre2 = Number(prompt("Entrez le deuxieme nombre :"));

    let resultat;

    if (operation === "+") {
        resultat = addition(nombre1, nombre2);
    } else if (operation === "-") {
        resultat = soustraction(nombre1, nombre2);
    } else if (operation === "/") {
        resultat = division(nombre1, nombre2);
    } else if (operation === "**") {
        resultat = puissance(nombre1, nombre2);
    } else if (operation === "^^") {
        resultat = racineCarree(nombre1);
    } else if (operation === "//") {
        resultat = Factorielle(nombre1);
    } else {
        console.log("Opération invalide");
        continue;
    }

    console.log("Résultat :", resultat);

    ajouterHistorique(historique, nombre1, nombre2, operation, resultat);

    let historique2 = prompt("Souhaitez-vous afficher l'historique : O/N ?");

    if (historique2 === "O") {
        console.log(historique);
    }
}

    