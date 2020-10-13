const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

// Deliverable 1: When a user loads the page, they should see all trainers, with their current team of Pokemon.

document.addEventListener('DOMContentLoaded', () => {
    const getTrainers = () => 
        fetch(TRAINERS_URL)
            .then(response => response.json())
            .then(trainers => {
                renderTrainers(trainers)
            })
    }

    const renderTrainers = trainers => {
        const TrainerCollection = document.querySelector("main")
        for(const trainer of trainers){
            renderTrainers(trainer, trainerCollection)
        }
    }

    const renderTrainer = (trainer, trainerCollection) => {
        const trainerDiv.classList.add("card")
        trainerDiv.dataset.id = trainer.id
        trainerDiv.innerHTML = `
        <p>${trainer.name}</p>
        <button data-trainer-id="${trainer.id}">Add Pokemon</button>
        <ul>  
            ${trainer.pokemons}.map (pokemon => {
                <li>${pokemon.nickname} (${pokemon.species})<button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>
            }).join(', ')}
        </ul>
        `
        trainerCollection.append(trainerDiv)
    }
    getTrainers()


}









    // const getTrainers = () => {
    //     fetch(TRAINERS_URL)
    //         .then(response => response.json())
    //         .then(trainers => {
    //             renderTrainers(trainers)
    //         })
    // }
    // const renderCard = (trainer) => {
    //     // create div card 
    //     const trainerDiv = document.createElement("div")
        
    //     trainerDiv.classList.add("card")
    //     trainerDiv.dataset.id = trainer.id;
    //     trainerDiv.innerHTML = `
    //         <p>${trainer.name}</p>
    //         <button data-trainer-id="${trainer.id}">Add Pokemon</button>
    //         `
           
    //    return trainerDiv
    //     // console.log(trainer.pokemons)
    // }

    // const renderPokemon = (pokemonObj, cardUl) => {
    //     const pokemonLi = document.createElement("li")
    //     pokemonLi.innerHTML = `
    //     ${pokemonObj.nickname} (${pokemonObj.species}) <button class="release" data-pokemon-id="${pokemonObj.id}">Release</button>
    //     `
    //     cardUl.append(pokemonLi)
    // } 

    // const renderTrainers = trainers => {
    //     const main = document.querySelector("main") //select main
        
    //     // console.log(trainerCollection)
    //     // console.log(trainers)
    //     // console.log(trainers[0].pokemons)
    //     trainers.forEach(trainer => {
    //         const cardUl = document.createElement("ul")
    //         const cardDiv = renderCard(trainer)
    //         console.log(cardDiv)
    //         // console.log(trainer)
    //         cardDiv.append(cardUl)
    //     })
    //     trainers.pokemons.forEach(pokemonObj => {
    //         renderPokemon(pokemonObj, cardUl);
    //     })
    //    main.append(cardDiv)
    // }



        



    // load page
    // get request to API to see all trainers and team of Pokemon
    

    // fetch Pokemon
    // const getPokemon = () => {
    //     fetch(POKEMONS_URL)
    //         .then(response => response.json())
    //         .then(pokemons => {
    //             renderPokemon(pokemons)
    //         })
    // }

    // getTrainers();


// })
// Whenever a user hits Add Pokemon and they have space on their team, they should get a new Pokemon.
// Whenever a user hits Release Pokemon on a specific Pokemon team, that specific Pokemon should be released from the team.