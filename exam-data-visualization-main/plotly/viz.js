fetch('data.json')
  .then((response) => response.json())
  .then((data) => runVisualization(data));

function runVisualization(data) {
  //Utilisation de la fonction sort data pour trier les pays par popullation
  sortByCountryPopulation(data);

  //Selectionner les 30 meilleurs pays
  var top30Countries = data.slice(0, 30);

  //Tableaux pour stocker les infos des pays
  var countries = [];
  var populations = [];

  for (var i = 0; i < top30Countries.length; i++) { //Parcourir les differents pays pour selectionner leurs informations
    countries.push(top30Countries[i].country);
    populations.push(top30Countries[i].population);
  }

  //Créer un objet trace pour le diagrame en barres
  var trace = {
    x: countries, //Label des pays en X
    y: populations, //Popullation des pays en axe des y
    type: 'bar'
  };

  //Tableau des differents tracés
  var plotData = [trace];

    //Configuration de l'affichage, des légendes etc...
    var layout = {
        title: '30 plus grands pays par population', //Titre
        xaxis: {
            title: 'Pays'
        },
        yaxis: {
            title: 'Population'
        }
  };

  // Draw the graph using Plotly.js
  Plotly.newPlot('data-viz', plotData, layout);
}

function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}