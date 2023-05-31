function twoSum(array, target) {
    let nums = array; //Déclarer la variable tableau sous le nom demandé
    let nombre = target;//Declarer notre cible dans la fonction
    console.log("Le nombre cible que vous avez entré est :", nombre); //Afficher la cible selectionnée
    let Output = []; //Definition du tableau vide contenant le futur résultat

    for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) { //On définit les boucles qui parcourrent le tableau pour comparer les nombres
      if (nums[i] + nums[j] === target) { //On definit la condition if respectant la target avec num1 + num2 = target
        Output.push(i, j); //Si condition verrifiée, on la stock dans le tableau de resultat
        console.log("Le resultat du rang des nombres est : "+Output); //On affiche le resultat
        return Output; //On retourne le resultat à chaque rang
      }
    }
  }
  return Output; //On retourne le résultat final
}

twoSum([2,7,11,15],9) //Avec l'utilisation de l'exemple de l'examen, la valeur retournée correspond.
twoSum([11,0,2,71,17,44,3,18,20],14) //Cela fonctionne aussi ! [0,6] de rangs