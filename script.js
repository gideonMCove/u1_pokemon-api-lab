let button = document.querySelector("#searchButton")
let pokemonName = document.querySelector("#pokemonName")
let pokemonNum = document.querySelector("#pokemonNum")
let pokemonType = document.querySelector('#pokemonType')
let pokemonImageFront = document.querySelector("#pokemonImageFront")
let pokemonImageBack = document.querySelector("#pokemonImageBack")
let pokemonInput = document.querySelector("#inputBar")
let response = null
let pokeMoves = document.querySelector('#pokeMoves')

const getPokemon = async () => {
    const pokemonSpecies = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    // console.log(pokemonSpecies.data.message)
}

getPokemon()


button.addEventListener('click', async () => {
    let pokemon = pokemonInput.value
    document.getElementById('pokemonName').innerHTML = pokemon
    console.log(pokemon)
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    // let response = await axios.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png`)
    console.log(response.data.message)
    setPokeImages()
    setPokeNum()
    setPokeType()
    // setPokeMoves()
    // setPokeName()

    function setPokeImages() {
        let getPokePicFront = response.data.sprites.front_default
        let getPokePicBack = response.data.sprites.back_default
        pokemonImageFront.setAttribute('src', getPokePicFront)
        pokemonImageBack.setAttribute('src', getPokePicBack)
    }

    function setPokeNum() {
        let getPokeNum = response.data.game_indices[0].game_index
        document.getElementById('pokemonNum').innerHTML = "#" + getPokeNum
    }

    function setPokeType() {
        let getPokeTypes = []
        for (i=0; i<response.data.types.length; i++){
            getPokeTypes[i] = ' ' + response.data.types[i].type.name

        }
        console.log(getPokeTypes)        
        getPokeTypes.forEach(type  => {
            document.getElementById('pokemonType').innerHTML +=  type
        }) 
        
    }
    // function setPokeMoves () {
    //     let getPokeMoves = []
    //     for (i=0; i<response.data.moves.length; i++){
    //          getPokeMoves[i] = response.data.moves[i].move
    //     }
    //     document.getElementById('pokeMoves').innerHTML = getPokeMoves
        
    // }
    // function setPokeName() {
    //     let getPokeName = `${pokemon}`
    //     pokemonName = getPokeName
    // }
    
}
)


    //Axios call goes here
    


    //    The basic version of an axios HTTP request looks something like the following:

    // axios({
    //     url: 'http://www.yourserver.com/api/neat_stuff',
    //     method: 'post',
    //     headers: {
    //       'content-type': 'multipart/form-data'
    //     },
    //     data: form
    //   })

    //you can CREATE with axios.post()
    // you can READ with axios.get() //<-- we'll be focusing on this one for now
    // you can UPDATE with axios.put()
    // you can DELETE with axios.delete()





    //remember to use Async and Await!
    //DOM Setters go here

