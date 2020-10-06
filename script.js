let pokemon = [["01","Bulbasaur","Grass, Poison"],["02","Ivysaur","Grass, Poison"],["03","Venusaur","Grass, Poison"],["04","Charmander","Fire"],["05","Charmeleon","Fire"],
["06","Charizard","Fire, Flying"],["07","Squirtle","Water"],["08","Wartortle","Water"],["09","Blastoise","Water"],["10","Caterpie","Bug"],["11","Metapod","Bug"],
["12","Butterfree","Bug, Flying"],["13","Weedle","Bug, Poison"],["14","Kakuna","Bug, Poison"],["15","Beedrill","Bug, Poison"],["16","Pidgey","Normal, Flying"],
["17","Pidgeotto","Normal, Flying"],["18","Pidgeot","Normal, Flying"],["19","Rattata","Normal"],["20","Raticate","Normal"]] //array of pokemon


function stringSearch(){ //function to search for pokemon names
    var node = document.createElement("h2");
    node.id = "searchHeader";
    node.textContent =  "Search";
    var header = document.getElementById("searchHeader");  //creates search header
    if(!(document.body.contains(header))){
        var search = document.getElementById("search");
        document.body.insertBefore(node, search);
    }
    var uInput = document.getElementById("nameInput").value.toLowerCase(); //takes input and makes it lowercase
    var node= document.getElementById("search");
    node.querySelectorAll('*').forEach(n => n.remove())
    if(uInput!="" && uInput.length <= 20 && !/[^a-zA-Z]/.test(uInput)){ //specifies the input
        for (var i = 0; i < pokemon.length; i++) {
            if(pokemon[i][1].toLowerCase().includes(uInput)){ //goes through the array to find required string
                createPokemon(i,"search");
            }
        }
    }
    if (uInput==""){ //removes the header when not using search
        header.remove();
    }
}


function numSearch(){ //search function for pokemon number
    var node = document.createElement("h2");
    node.id = "searchHeader";
    node.textContent =  "Search";
    var header = document.getElementById("searchHeader"); 
    if(!(document.body.contains(header))){
        var search = document.getElementById("search");
        document.body.insertBefore(node, search);
    }
    var uInput = document.getElementById("numInput").value.toLowerCase();
    var node= document.getElementById("search");
    node.querySelectorAll('*').forEach(n => n.remove())
    if(uInput!="" && parseInt(uInput) >= 1 && parseInt(uInput) <= 20){ // makes sure input is a number from 1-20
        for (var i = 0; i < pokemon.length; i++) {
            if(pokemon[i][0].includes(uInput)){
                createPokemon(i,"search"); //finds the pokemon and creates a container for it
            }
        }
    }
    else if (uInput==""){
        header.remove(); //removes header when not in use
    }
}

function createPokemon(x,location){ //function to create pokemon boxes 
    var node = document.createElement("li"); //to list the pokemon
    node.id = pokemon[x][1];
    node.className ="card";

    var pokeName = document.createElement("p"); //to list the pokemon name
    pokeName.textContent = pokemon[x][0] + " - " +pokemon[x][1];
    pokeName.className ="name";

    var image = document.createElement("img"); //to show pictures
    image.src="pokemon/"+(x+1)+".png";
    image.className = "li img";

    var desc = document.createElement("p"); //list pokemon discription 
    desc.textContent = "Type: "+pokemon[x][2];
    desc.className ="cardType";


    document.getElementById(location).appendChild(node); //shows box in the proper location 
    document.getElementById(pokemon[x][1]).appendChild(pokeName);
    document.getElementById(pokemon[x][1]).appendChild(image);
    document.getElementById(pokemon[x][1]).appendChild(desc);
}

function createPokemons(){ //creates each pokemon for the body of the HTML
    for(var i =0; i < 20 ; i++){
        createPokemon(i,"pokedex")
    }
}
