import { useEffect, useState } from "react"

export default function SuperheroGallery(){
    const [pokemon, setPokemon] = useState([])

    useEffect(()=>{
        async function getPokemon(id){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()
            console.log(data)
            data={...pokemon}
            setPokemon(data)
        }
        function randomPokemon(){
            for (const i=1; i<20; i++){
            const number = Math.floor(Math.random()*1000)
            console.log(number)
            getPokemon(number)
            }
        }

        randomPokemon()
    }, [])



    return (
        <>
        <div className="shows">
                    <div className="gallery-image" >
                        {pokemon.sprites? <img src={pokemon.sprites.front_shiny}/>: <h1>No image</h1>}
                    </div>
        </div>
        </>
    )
}
