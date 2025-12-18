const prompt = require("prompt-sync")();
const fs = require("fs");

function ChargerJson() {
    if (fs.existsSync("classe.json")) {
        const data = fs.readFileSync("classe.json", "utf-8");
        classe= JSON.parse(data);
        console.log("Données chargées depuis classe.json");
    } else {
        classe = [];
        console.log("Aucun fichier trouvé, nouveau fichier sera créé");
    }
}

ChargerJson();



function AjouterDesEleves(){
    let nom = prompt("Donner nom : ");
    let id = classe.length + 1;
    classe.push({
        id:id,
        nom: nom,
        present: "none",
        competence:[]
    })
}
function MarquerLeurPresence(){
    console.table(classe);
    let index =  prompt("Donner id de eleve :");
    let presence = prompt("Presence  oui / non :");
    index = index - 1;
    classe[index].present = presence;

}
function AttribuerDesNiveauxDeCompetence(){
    console.log(JSON.stringify(classe, null, 2));
        let niveau;
        let index =  prompt("Donner id de eleve :");
          index = index - 1;
        let comp =  prompt("Donner computance de eleve :");
        function niveaucheck(){
              niveau =  prompt(`Donner niveau de eleve ( "Critique", "Moyen", "Bon", "Excellent" ) :`).toLocaleLowerCase();
             if(niveau !== "critique" && niveau !== "moyen" && niveau !== "bon" && niveau !== "excellent"){
            niveaucheck();
            }
        }

        niveaucheck();

        classe[index].competence.push({
                competence:comp,
                niveau:niveau
        })
        let message = prompt("1.Ajoute plus computance \n 2.retour  : ");
         if(message === "1"){
            AttribuerDesNiveauxDeCompetence();
         }else{
            return 0 ;
         }
}
function ConsulterUneFicheComplete(){
        console.table(classe);
        let id = prompt("donner id :");
        id = id - 1;
        console.log(JSON.stringify(classe[id], null, 2));
}
function LiserLesElevesValidants() {
        const validation = classe.filter(eleve => 
            eleve.competence.some(c => {
                const niveau = c.niveau.toLowerCase();
                return niveau === "bon" || niveau === "excellent";
            })
        );

        console.table(validation.map(e => ({
                id: e.id,
                nom: e.nom,
                present: e.present,
                competences: e.competence
                    .filter(c => c.niveau.toLowerCase() === "bon" || c.niveau.toLowerCase() === "excellent")
                    .map(c => `${c.competence} (${c.niveau})`)
                    .join(", ")
            })));
}


 function EnregistrerJson() {
    let save = JSON.stringify(classe, null, 2); // pretty print
    fs.writeFileSync("classe.json", save, "utf-8");
    console.log("Les données ont été enregistrées dans classe.json !");
}


while(true){
    let choix = prompt("1.Ajouter un eleve \n 2.Marquer une presence \n 3.Ajouter une competence \n 4.Afficher une fiche eleve \n 5.Voir les eleves validants \n 6.Sauvegarder \n 7.Charger \n 8.Quitter :");
    if(choix === "8"){
        console.log("Fin du programme");
        break;
    }
    if(choix === "1"){
        AjouterDesEleves();
    }else if(choix === "2"){
        MarquerLeurPresence();
    }else if(choix === "3"){
        AttribuerDesNiveauxDeCompetence();
    }else if(choix === "4"){
        ConsulterUneFicheComplete();
    }else if(choix === "5"){
        LiserLesElevesValidants();
    }else if(choix === "6"){
        EnregistrerJson();
    }else if(choix === "7"){
         console.log(JSON.stringify(classe, null, 2));
    }
}
