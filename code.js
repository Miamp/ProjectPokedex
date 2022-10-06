let pokemon = JSON.parse(poke_file).result;

let inputSearchCharacter = document.getElementById("inputSearchCharacter")

let numberName = document.getElementById("numberName");
let skillsT = document.getElementById("skillsT");
let skills = document.getElementById("skills");
let h = document.getElementById("h");
let hTitle = document.getElementById("hTitle");
let w = document.getElementById("w");
let wTitle = document.getElementById("wTitle");
let imageP = document.getElementById("imageP");
let tipo = document.getElementById("tipo");
let tTitle = document.getElementById("tTitle");
let cTitle = document.getElementById("cTitle");
let contraTipo = document.getElementById("contraTipo");
let contraName = document.getElementById("contraName");
let contraImage = document.getElementById("contraImage");

function searchPokemonButton() {
    let pokemonDetails = searchPokemon(inputSearchCharacter.value)
    if (pokemonDetails !== undefined) {

        numberName.innerHTML =
            `
            ${pokemonDetails.number()}
            ${pokemonDetails.name}
            `
        skillsT.innerHTML =
            `Habilidades`
        skills.innerHTML =
            `${pokemonDetails.abilities()}`
        hTitle.innerHTML =
            `Altura`
        h.innerHTML =
            `${pokemonDetails.height()}`
        wTitle.innerHTML =
            `Peso`
        w.innerHTML =
            `${pokemonDetails.weight()}`
        imageP.innerHTML =
            `<img src="${pokemonDetails.image()}" />`
        tTitle.innerHTML =
            `Tipo`
        tipo.innerHTML =
            `${pokemonDetails.type()}`
        cTitle.innerHTML =
            `Es debil contra Pokemons tipo`
        contraTipo.innerHTML =
            `${pokemonDetails.weakness()}`
        contraName.innerHTML =
            `Como: ${pokemonDetails.weaknessName()}`
        contraImage.innerHTML =
            `<img src="${pokemonDetails.weaknessImage()}"/>`
    } else {
        infoContent.innerHTML =
            "Pokemon no encontrado"
    }
}

function searchPokemon(pokemonName) {
    for (let i = 0; i < pokemon.length; i++) {
        if (pokemon[i].name == pokemonName) {
            let instaciaPokemon = new Pokemon(pokemon[i])
            return instaciaPokemon;
        }
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


class Pokemon {
    constructor(pokemon) {
        this.pokemon = pokemon
        this.name = pokemon.name

    }

    number() {
        return this.pokemon.number;
    }

    image() {
        return this.pokemon.ThumbnailImage;
    }

    weight() {
        return this.pokemon.weight;
    }

    height() {
        return this.pokemon.height;
    }

    abilities() {
        return this.pokemon.abilities;
    }

    type() {
        return this.pokemon.type;
    }

    weakness() {
        for (let i = 0; i < pokemon.length; i++) {
            let type = capitalizeFirstLetter(pokemon[i].type[0])
            if (this.pokemon.weakness.includes(type) == true) {

                return [pokemon[i].type[0]];
            }
        }
    }

    weaknessName() {
        for (let i = 0; i < pokemon.length; i++) {
            let type = capitalizeFirstLetter(pokemon[i].type[0])
            if (this.pokemon.weakness.includes(type) == true) {

                return [pokemon[i].name];
            }
        }
    }


    weaknessImage() {
        for (let i = 0; i < pokemon.length; i++) {
            let type = capitalizeFirstLetter(pokemon[i].type[0])
            if (this.pokemon.weakness.includes(type) == true) {

                return [pokemon[i].ThumbnailImage];
            }
        }
    }

}