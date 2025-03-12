// Au chargement de la page

document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "Ce n'est pas le pingouin le plus glissant de la banquise.",
    "Ce n'est pas le couteau le plus aiguisé du tiroir.",
    "Ce n'est pas la bougie la plus allumée du gâteau.",
    "Ce n'est pas la flèche la plus rapide de l'arc.",
    "Ce n'est pas le marteau le plus lourd du coffre à outils.",
    "Ce n'est pas la perle la plus brillante du collier.",
    "Ce n'est pas la rose la plus parfumée du jardin.",
    "Ce n'est pas le poisson le plus vif dans l'aquarium.",
    "Ce n'est pas le cheval le plus rapide de l'écurie.",
    "Ce n'est pas la lampe la plus brillante du salon.",
    "Ce n'est pas le fruit le plus mûr de l'arbre.",
    "Ce n'est pas le verre le plus plein de la bouteille.",
    "Ce n'est pas le moteur le plus puissant de la voiture.",
    "Ce n'est pas la montre la plus précise de l'horlogerie.",
    "Ce n'est pas la clé qui ouvre toutes les portes.",
    "Ce n'est pas le cerf-volant le plus haut dans le ciel.",
    "Ce n'est pas la fleur la plus jolie du champ.",
    "Ce n'est pas le couteau le plus tranchant du bloc.",
    "Ce n'est pas le nuage le plus léger du ciel.",
    "Ce n'est pas le gâteau le plus sucré de la pâtisserie.",
    "Ce n'est pas le téléphone le plus intelligent de la boutique.",
    "Ce n'est pas la clé USB la plus rapide du port.",
    "Ce n'est pas l'ampoule la plus brillante du plafonnier.",
    "Ce n'est pas le biscuit le plus croustillant de la boîte.",
    "Ce n'est pas la fusée la plus rapide dans le ciel.",
    "Ce n'est pas l'étoile la plus brillante dans la constellation.",
    "Ce n'est pas le gâteau le plus délicieux de la vitrine.",
    "Ce n'est pas la baguette la plus longue du fourreau.",
    "Ce n'est pas le cornet de glace le plus gros de la vitrine.",
    "Ce n'est pas la semence la plus mûre dans le potager.",
    "Ce n'est pas l'arbre le plus grand de la forêt.",
    "Ce n'est pas le train le plus rapide de la gare.",
    "Ce n'est pas la fleur la plus parfumée du bouquet.",
    "Ce n'est pas le pneu le plus gonflé de la voiture.",
    "Ce n'est pas le coussin le plus doux du canapé.",
    "Ce n'est pas la glace la plus fondante du cône.",
    "Ce n'est pas le ballon le plus gonflé dans la fête.",
    "Ce n'est pas le train le plus rapide de la ligne.",
    "Ce n'est pas le bouton le plus brillant du manteau.",
    "Ce n'est pas le chocolat le plus fondant dans la boîte.",
    "Ce n'est pas la souris la plus vive de la maison.",
    "Ce n'est pas la voiture la plus rapide de la course.",
    "Ce n'est pas le vent le plus frais de la montagne.",
    "Ce n'est pas le pinceau le plus précis de la palette.",
    "Ce n'est pas le lecteur de CD le plus rapide du salon.",
    "Ce n'est pas la manivelle la plus fluide du mécanisme.",
    "Ce n'est pas la montre la plus fiable de la collection.",
    "Ce n'est pas la pièce de puzzle la plus facile à trouver.",
    "Ce n'est pas le tapis le plus doux sous les pieds.",
    "Ce n'est pas la chaise la plus confortable de la salle.",
    "Ce n'est pas le CD le plus bien enregistré de la collection.",
    "Ce n'est pas l'oiseau le plus rapide dans le ciel.",
    "Ce n'est pas le lait le plus crémeux du carton.",
    "Ce n'est pas le trèfle à quatre feuilles du champ.",
    "Ce n'est pas la boussole la plus précise du sac.",
    "Ce n'est pas le livre le plus captivant de la bibliothèque.",
    "Ce n'est pas l'éléphant le plus rapide de la savane.",
    "Ce n'est pas la pomme la plus rouge du verger.",
    "Ce n'est pas la voiture la plus pimpante du garage.",
    "Ce n'est pas la fenêtre la plus propre de la maison.",
    "Ce n'est pas le livre le plus épais de la bibliothèque.",
    "Ce n'est pas l'écran le plus clair du smartphone.",
    "Ce n'est pas l'animal le plus vif du zoo.",
    "Ce n'est pas l'escargot le plus rapide du jardin.",
    "Ce n'est pas la feuille la plus verte sur l'arbre.",
    "Ce n'est pas l'escargot le plus rapide de la course.",
    "Ce n'est pas la clé la plus robuste du trousseau.",
    "Ce n'est pas le bout du fil le plus tendu.",
    "Ce n'est pas la pluie la plus douce du printemps.",
    "Ce n'est pas le verre le plus rempli à la fête.",
    "Ce n'est pas le chocolat le plus crémeux de la boîte.",
    "Ce n'est pas le vaisseau le plus rapide de la flotte.",
    "Ce n'est pas la robe la plus élégante de la soirée.",
    "Ce n'est pas la souris la plus curieuse du labo.",
    "Ce n'est pas la voiture la plus économe en carburant.",
    "Ce n'est pas la guitare la plus bien accordée du groupe.",
    "Ce n'est pas le pot de fleurs le plus coloré du balcon.",
    "Ce n'est pas la lumière la plus vive dans la pièce.",
    "Ce n'est pas la boîte la plus pleine de bonbons.",
    "Ce n'est pas la pendule la plus précise du salon.",
    "Ce n'est pas le cheval le plus docile de l'écurie.",
    "Ce n'est pas la pizza la plus chaude du four.",
    "Ce n'est pas la lune la plus brillante du ciel.",
    "Ce n'est pas la laine la plus douce du mouton.",
    "Ce n'est pas l'ombre la plus nette sous l'arbre.",
    "Ce n'est pas la chaise la plus stable de la pièce.",
    "Ce n'est pas le bouton le plus joli de la chemise.",
    "Ce n'est pas le soleil le plus chaud de la journée.",
    "Ce n'est pas l'éléphant le plus agile de la troupe.",
    "Ce n'est pas la fleur la plus parfumée du marché.",
    "Ce n'est pas le steak le plus tendre du restaurant.",
    "Ce n'est pas le nuage le plus blanc dans le ciel.",
    "Ce n'est pas la pierre la plus précieuse du bijou.",
    "Ce n'est pas la girafe la plus haute de la savane.",
    "Ce n'est pas la clé la plus fonctionnelle du trousseau.",
    "Ce n'est pas l'oiseau le plus coloré du jardin.",
    "Ce n'est pas le pinceau le plus fin de l'artiste.",
    "Ce n'est pas la graine la plus grande du champ.",
    "Ce n'est pas le chat le plus malin du quartier.",
    "Ce n'est pas le trèfle à quatre feuilles de la chance.",
  ];

  const getRandomQuote = () =>
    quotes[Math.floor(Math.random() * quotes.length)];

  const displayQuote = () => {
    const quoteElement = document.getElementById("quote");
    if (quoteElement) {
      quoteElement.textContent = getRandomQuote();
    }
  };

  const switchColorTheme = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark"));
  };

  const checkColorTheme = () => {
    if (localStorage.getItem("dark-mode") === "true") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  // On load
  displayQuote();
  checkColorTheme();

  // New quote button
  const newQuoteButton = document.getElementById("new-quote-button");
  if (newQuoteButton) {
    newQuoteButton.addEventListener("click", displayQuote);
  }

  const switchThemeButton = document.getElementById("switch-theme-button");
  if (switchThemeButton) {
    switchThemeButton.addEventListener("click", switchColorTheme);
  }
});
