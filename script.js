// Variable card déclarée de type fontion fléchée qui retourne un template string qui retourne notre carte//
const card = () => {
  return `
    <div class="card">
      <h2>Titre de la personne</h2>
      <h3>Intitulé du poste</h3>
      <h5>Compétences</h5>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>DOM</li>
      </ul>
      <button>Click</button>
    </div>

  `;
};

// varibale qui déclre une fonction fléchée, elle retourne une création d'élément dans le dom (un noeud)
const render = () => {
  const main = document.createElement("main");

  // créer une boucle,
  // Ajoute x fois la carte au main
  for (let i = 0; i < 10; i++) {
    main.innerHTML += card();
  }
  return main;
};

// On récupère un élément avec son ID, on lui ajoute un enfant qui vient de la variable Render//
document.getElementById("app").appendChild(render());

/**
 * Objectif => expliquez le code via des commentaires et montrer par des exemples ce que fais chaque partie du code
 * 1/ Modifier le titre dans le header
 * 1 bis/ Modifier le style du titre
 * 2/ Modifier le nombre de cartes
 * 3/ Ajouter une compétence 'DOM' à la carte
 * 4/ Ajouter un background color aux cartes
 * 5/ Ajouter un bouton à chaque carte. Quand je clic dessus, cela me console.log("click")
 * */
// variable qui déclare les boutons de type array
const btns = document.getElementsByTagName("button");
// console.log(btns);
for (let index = 0; index < btns.length; index++) {
  //const element = btns[index];
  btns[index].addEventListener("click", () => console.log("click"));
}
