Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
             if( this[ prop ] === value )
                 return prop;
        }
    }
}

var painting_desc = {
   p2024_route: {
    year: 2024,
    titre: "Route des Ventes Bouchard en hiver",
    path: "../images/2024_Routes_des.jpg",
    description: "huile sur lin, 46 x 55 cm"
    },
    p2024_fevrier: {
    year: 2024,
    titre: "Février parmis rochers",
    path: "../images/2024_Février_entre_rochers.jpg",
    description: "huile sur toile, 33 x 46"
    },
    p2024_pluie: {
     year: 2024,
     titre: "Rochers sous la pluie",
     path: "../images/2024_Sous_la_pluie.jpg",
     description: "huile sur papier, 30 x 40 cm"
     },
     p2024_chainon: {
     year: 2024,
     titre: "Chaînon",
     path: "../images/2024_Chaînon.jpg",
     description: "huile sur papier, 30 x 40 cm"
     },
     p2023_portail: {
     year: 2023,
     titre: "portail",
     path: "../images/2023_POrtail_en_forêt.jpg",
     description: "huile sur toile, 46 x 65 cm"
     },
     p2022_walnut: {
     year: 2022,
     titre: "Walnut hands",
     path: "../images/2022_Walnut_Hands.jpg",
     description: "huile sur lin, 60 x 72 cm"
     },
     p2021_gummy: {
     year: 2021,
     titre: "Gummy Dip",
     path: "../images/2021_Gummy_Dip.jpg",
     description: "huile sur toile, 180 x 100 cm"
     },
     p2021_chest: {
     year: 2021,
     titre: "Chest Cavity",
     path: "../images/2021_Gummy_Dip.jpg",
     description: "huile sur toile, 55 x 45 cm"
     },
     p2021_wheat: {
     year: 2021,
     titre: "Wheat Grass",
     path: "../images/2021_Wheat_Grass_(The good picture).jpg",
     description: "huile sur toile, 50 x 60 cm"
     },

};

document.addEventListener("DOMContentLoaded", function () {
    const dataDisplay = document.getElementById("painting");

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const paint = urlParams.get('paint');

    // Image
    var img = document.createElement('img');
    img.setAttribute('src', painting_desc[paint]['path']);
    img.style.maxWidth = '98%';
    img.style.maxHeight = '650px';
    dataDisplay.appendChild(img);

    // Text
    let description = "<i>" + painting_desc[paint]['titre']+ "</i>, " + painting_desc[paint]['description']+ ", " + painting_desc[paint]['year'];    
    document.getElementById("description").innerHTML = description;
    
    // const path = document.createElement("p");
    // path.style.textAlign = "center";
});