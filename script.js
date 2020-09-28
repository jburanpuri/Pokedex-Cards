let pokemon = [["1","Bulbasaur","Grass, Poison"],["2","Ivysaur","Grass, Poison"],["3","Venusaur","Grass, Poison"],["4","Charmander","Fire"],["5","Charmeleon","Fire"],
["6","Charizard","Fire, Flying"],["7","Squirtle","Water"],["8","Wartortle","Water"],["9","Blastoise","Water"],["10","Caterpie","Bug"],["11","Metapod","Bug"],
["12","Butterfree","Bug, Flying"],["13","Weedle","Bug, Poison"],["14","Kakuna","Bug, Poison"],["15","Beedrill","Bug, Poison"],["16","Pidgey","Normal, Flying"],
["17","Pidgeotto","Normal, Flying"],["18","Pidgeot","Normal, Flying"],["19","Rattata","Normal"],["20","Raticate","Normal"]] //array of pokemon


function stringSearch(){ //searches array for pokemon name or type
    var uInput = document.getElementById("nameInput").value.toLowerCase(); //makes string lower case
    let result = "";
    let resultCount = 0;

    if(uInput!="" && uInput.length <= 20 && !/[^a-zA-Z]/.test(uInput)){ //takes input
        for (var i = 0; i < pokemon.length && resultCount<5; i++) {
            if(pokemon[i][1].toLowerCase().includes(uInput)||(pokemon[i][2].toLowerCase().includes(uInput)&&uInput.length>2)){
                result+="#0"+pokemon[i][0]+" "+pokemon[i][1]+" | Type: "+pokemon[i][2]+"\n"; //searches string for matching name
                resultCount++; //loops around
            }
        }
        if(result==""){
            alert("No Results Found");
        }
        else{
            alert(result);
        }
    }
    else{
        alert("Error")
    }
}


function numSearch(){ //search array for pokemon number
    var uInput = document.getElementById("numberInput").value; //takes number value
    let result = "";
    let resultCount = 0;

    if(uInput!="" && parseInt(uInput) >= 1 && parseInt(uInput) <= 20){ //makes sure number is between 1-20
        for (var i = 0; i < pokemon.length && resultCount<5; i++) {
            if(pokemon[i][0].includes(uInput)){
                result+="#"+pokemon[i][0]+" "+pokemon[i][1]+" | Type: "+pokemon[i][2]+"\n"; //searches string for number
                resultCount++;
            }
        }
        if(result==""){
            alert("No Results Found");
        }
        else{
            alert(result);
        }
    }
    else{
        alert("Error, please enter a number between 1-20.") //error for when user does not enter a number between 1-20
    }
}
