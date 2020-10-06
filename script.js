let pokemon = [["1","Bulbasaur","Grass, Poison"],["2","Ivysaur","Grass, Poison"],["3","Venusaur","Grass, Poison"],["4","Charmander","Fire"],["5","Charmeleon","Fire"],
["6","Charizard","Fire, Flying"],["7","Squirtle","Water"],["8","Wartortle","Water"],["9","Blastoise","Water"],["10","Caterpie","Bug"],["11","Metapod","Bug"],
["12","Butterfree","Bug, Flying"],["13","Weedle","Bug, Poison"],["14","Kakuna","Bug, Poison"],["15","Beedrill","Bug, Poison"],["16","Pidgey","Normal, Flying"],
["17","Pidgeotto","Normal, Flying"],["18","Pidgeot","Normal, Flying"],["19","Rattata","Normal"],["20","Raticate","Normal"]] //array of pokemon


function stringSearch(){
    var node = document.createElement("h2");
    node.id = "searchHeader";
    node.textContent =  "Search";
    var header = document.getElementById("searchHeader"); 
    if(!(document.body.contains(header))){
        var search = document.getElementById("search");
        document.body.insertBefore(node, search);
    }
    var uInput = document.getElementById("nameInput").value.toLowerCase();
    var node= document.getElementById("search");
    node.querySelectorAll('*').forEach(n => n.remove())
    if(uInput!="" && uInput.length <= 20 && !/[^a-zA-Z]/.test(uInput)){
        for (var i = 0; i < pokemon.length; i++) {
            if(pokemon[i][1].toLowerCase().includes(uInput)){
                createPokemon(i,"search");
            }
        }
    }
    if (uInput==""){
        header.remove();
    }
}


function numSearch(){
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
    if(uInput!="" && parseInt(uInput) >= 1 && parseInt(uInput) <= 20){
        for (var i = 0; i < pokemon.length; i++) {
            if(pokemon[i][0].includes(uInput)){
                createPokemon(i,"search");
            }
        }
    }
    else if (uInput==""){
        header.remove();
    }
}

function createPokemon(x,location){
    var node = document.createElement("li");
    node.id = pokemon[x][1];
    node.className ="card";

    var pokeName = document.createElement("p");
    pokeName.textContent = pokemon[x][0] + " - " +pokemon[x][1];
    pokeName.className ="name";

    var image = document.createElement("img"); 
    image.src="pokemon/"+(x+1)+".png";
    image.className = "li img";

    var desc = document.createElement("p");
    desc.textContent = "Type: "+pokemon[x][2];
    desc.className ="cardType";


    document.getElementById(location).appendChild(node);
    document.getElementById(pokemon[x][1]).appendChild(pokeName);
    document.getElementById(pokemon[x][1]).appendChild(image);
    document.getElementById(pokemon[x][1]).appendChild(desc);
}

function createPokemons(){
    for(var i =0; i < 20 ; i++){
        createPokemon(i,"pokedex")
    }
}
