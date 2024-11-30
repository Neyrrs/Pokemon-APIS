function submitPokemonHandler(){
    const pokemonName = document.getElementById("pokemonName");
    const pokemonImage = document.getElementById("pokemonImage");
    getPokemon(pokemonName, pokemonImage);
    clearing(pokemonName)
}

async function getPokemon(pokemonName, pokemonImage){
    
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value.toLowerCase()}`);
    if(!promise.ok) {
        throw new Error("Something went wrong")
    }
    const data = await promise.json();
    pokemonImage.src = data.sprites.front_default;
    pokemonImage.style.display = "block";

    const detailsContainer = document.getElementById("detailsContainer");
    const pokemonNames = document.getElementById("pokemonNames");
    pokemonNames.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    const pokemonHeight = document.getElementById("pokemonHeight");
    pokemonHeight.innerHTML = `${data.height}Dm`;
    const pokemonWeight = document.getElementById("pokemonWeight");
    pokemonWeight.innerHTML = `${data.weight}Kg`;
    const pokemonExp = document.getElementById("pokemonExp");

    pokemonExp.innerHTML = `Exp: ${data.base_experience}`;

        detailsContainer.style.display = "flex";
        pokemonNames.style.display = "block";
        pokemonHeight.style.display = "block";
        pokemonWeight.style.display = "block";
        pokemonExp.style.display = "block";
    
        console.log(data)
}

function clearing(inputPokemon){
    inputPokemon.value = "";
}