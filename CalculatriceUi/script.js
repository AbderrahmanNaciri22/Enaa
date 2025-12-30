    var historique = [];
    
    function addition(a, b) {
        return  Number(a) + Number(b);
    }
    function soustraction(a, b) {
        return Number(a)-Number(b);
    }    
    function multiplication(a, b) {
        return Number(a)*Number(b);
    }    
    function division(a, b) {
        if (Number(b) === 0) {
            alert("Erreur : Division par zéro !");
            return null;
        }
        return Number(a)/Number(b);
    }
    function puissance(a,b){
        return Math.pow(Number(a),b);
    }
    function racineCarree(a){
        return Math.sqrt(Number(a));
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
function afficherHistorique() {
    const container = document.getElementById("resultat");
    container.innerHTML = "";

    historique.forEach(item => {
        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${item.nombre1}</h3>
            <h3>${item.operation}</h3>
            <h3>${item.nombre2}</h3>
            <h3>=</h3>
            <h3>${item.resultat}</h3>
        `;

        container.appendChild(div);
    });
}



function resultat(){
    let operation = document.getElementById("oper").value;

    console.log(operation);

    if (operation === "0") {
        console.log("Fin du programme");
    }

    let nombre1 = document.getElementById("number1").value ;
    let nombre2 = document.getElementById("number2").value ;

    let resultat;

    if (operation === "+") {
        resultat = addition(nombre1, nombre2);
    } else if (operation === "-") {
        resultat = soustraction(nombre1, nombre2);
    }  else if (operation === "*") {
        resultat = multiplication(nombre1, nombre2);
    }else if (operation === "/") {
        resultat = division(nombre1, nombre2);
    } else if (operation === "**") {
        resultat = puissance(nombre1, nombre2);
    } else if (operation === "^^") {
        resultat = racineCarree(nombre1);
    } else if (operation === "//") {
        resultat = Factorielle(nombre1);
    } else {
        alert("Opération invalide");
    }

    let res = document.getElementById("res");
    res.value = resultat;


    ajouterHistorique(historique, nombre1, nombre2, operation, resultat);
    console.table(historique);
    afficherHistorique()

    // let historique2 = prompt("Souhaitez-vous afficher l'historique : O/N ?");

    // if (historique2 === "O") {
    //     console.table(historique);
    // }


    
}

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Home");
});

app.listen(3000, () => {
    console.log("Server est lancé sur le port 3000");
});
