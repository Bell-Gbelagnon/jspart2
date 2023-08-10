// function

/* function direBonjour(){
    console.log("Bonjour!!!");
} 

direBonjour(); */

/* function direBonjourFriend(namefriend){
    console.log(`Bonjour ${namefriend}`);
}

direBonjourFriend("gbelagnon"); */

/* function chiffreSacre(level){
    console.log(`Mon chiffre sacré est ${level}`);
}

chiffreSacre("17"); */

/* function presentation (
    let nom = prompt("veillez entrez votre nom");
    let prenom = prompt("veillez entrez votre prenom");
    let age = prompt("veillez entrez votre nom");
    console.log(`${nom} ${prenom} ${age}`)
)
    
presentation(); */

/* function direBonjour(){
    console.log("Bonjour");
}

direBonjour(); */

/* function BuenasTarde(){
    return "Buenas tarde";
} */

/* function addition (nobre1, nobre2){
    return nbre1 + nobre2;
}
let nombre = addition(2, 2);
for (let i = 0; i < 13; i++) */

/* let direBonjour = () =>{
    console.log("Bonjour!!!!");
};
let bonjourAmi = bonjourAmi
 */


/* let mesFilms = ["Mavrick", "wakanda", "avatar"];
mesFilms[0];// premier élément "Mavrick"
mesFilms.length;// la taille du tableau
mesFilms.push("ooo");// pour enregister dans le tableau ** à la suite
console.log(mesFilms);
mesFilms.pop(); // pour supprimer le dernier element
mesFilms.splice(1, 1);// supprimer à partir de l'indice
mesFilms.push("woman kind"); */
/* let randomTab = [15, true, ["Edwige", "Rose"], {nom : "Linda"}, () => {}];

console.log(randomTab);
console.log(randomTab [1]);
console.log(randomTab [2][0]);
console.log("taille du tableau :" + randomTab.length);
 */

/* for (let i = 0; i < 5; i++){
    console.log(mesFilms[i]);
}

for(let film of mesFilms) {
    console.log(`J'ai regardé le film ${film}`)
} */


//objet
/* let etudiant = {
    nom: "bell",
    age: "17",
    stuationMatrimoniale: "celibataire",


    presentation ()  {
        console.log(
            `Je m'appelle ${this.nom} j'ai ${this.age} ans et je suis ${this.stuationMatrimoniale}`
        );
    },
};

etudiant.presentation();
etudiant.filiere = "GL";
console.log(`Je suis en ${etudiant.filiere}`) */

//etudiant nom

/* console.log(etudiant.nom);

etudiant.nom = "satorou";
console.log(`je m'appelle ${etudiant.nom}, je suis un étudiant agé de ${etudiant.age} ans et je suis ${etudiant.stuationMatrimoniale}`) */


/* let parite = (nombre) =>{
    if (nombre % 2 == 0){
        console.log(`${nombre} est pair`);
    }else{
        console.log(`${nombre} est impair`);
    }
}

 */

let tableau = [{ nom: "anakonda", annee: 2000 },{ nom: "gift", annee: 2010 },{ nom: "tuto", annee: 2022 }, { nom: "blue", annee: 1998 } ];
  
 /*  function verif(parametre) {
    for (let element of parametre) {
      console.log(`Nom: ${element.nom}`);
    }
  }
  
  verif(tableau); */

  function trouverfilmancien(parametre){
    let filmancien = [0].annee
    for (let element of parametre){
        if(filmancien > element.annee){
            filmancien = element.annee;
        }
    }
    console.log(filmancien);

  }
trouverfilmancien(tableau);