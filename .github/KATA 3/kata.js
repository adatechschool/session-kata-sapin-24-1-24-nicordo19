function afficherEtoile(n) {
  let lignSapin = "";
  for (let i = 0; i < n; i++) {
    lignSapin += "*";
  }
  console.log(lignSapin);
}
afficherEtoile(2);
afficherEtoile(5);

function afficheRectengle(hauter, largeur) {
  for (let i = 0; i < hauter; i++) {
    //afiche la ligne avec la largeur des etoil
    afficherEtoile(largeur);
  }
}
afficheRectengle(5, 5);

function afficherTriangleDroite(n) {
  //je doit iterer avec i pour les  boucles concernant ligneEspace et etoil
  for (let i = 0; i < n; i++) {
    let ligneEspace = "";
    let etoil = "";
    // enleve un espace si on decent d'une ligne
    for (let l = 0; l < n - i; l++) {
      ligneEspace += " ";
    }
    // rajoute une etoil si on decent d'une ligne
    for (let e = 0; e < i; e++) {
      etoil += "*";
    }
    console.log(ligneEspace + "/" + etoil + "|");
  }
}

afficherTriangleDroite(5);
