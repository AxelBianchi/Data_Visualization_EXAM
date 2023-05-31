// Obtenez les références des éléments du DOM (Document Object Model)
var counterDisplay = document.getElementById("counterDisplay");
var decreaseBtn = document.getElementById("dcrBtn");
var resetBtn = document.getElementById("rstBtn");
var increaseBtn = document.getElementById("incrBtn");

// Variable pour stocker la valeur du compteur
var counterValue = 0;

//Fonction qui met à jour l'afficheur, necessaire en haut du code pour être appelé à chaque action
// sur les boutons increase, decrease et reset
function updateCounterDisplay() {
    counterDisplay.textContent = counterValue; //On affiche sous forme de contenu text la valeur du compteur
}

//Fonction qui diminue la valeur du compteur
function decreaseCounter() {
    counterValue--;
    updateCounterDisplay();
}

//Fonction pour réinitialiser la valeur du compteur à 0
function resetCounter() {
    counterValue = 0;
    updateCounterDisplay();
}

//Fonction pour augmenter la valeur du compteur
function increaseCounter() {
    counterValue++;
    updateCounterDisplay();
}

//Association de chaque fonction à des eventListener s'actionnants au click
resetBtn.addEventListener("click", resetCounter);
increaseBtn.addEventListener("click", increaseCounter);
decreaseBtn.addEventListener("click", decreaseCounter);

//Mettez à jour la valeur initiale affichée dans la zone d'affichage du compteur
updateCounterDisplay();
