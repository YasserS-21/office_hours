import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
export default function HarryPotterCharacterDetailedView () {
    
    const {characterId} = useParams()
    const [harryPotterCharacter, setHarryPotterCharacter] = useState({})

    useEffect(() => {
        fetch(`https://hp-api.onrender.com/api/character/${characterId}`)
        .then(response => response.json())
        .then(data => setHarryPotterCharacter(data[0]))
    }, [])

    return (
        <div className="character-details">
            <img src={harryPotterCharacter.image}/>
            <h1>{harryPotterCharacter.name}</h1>
            <p>Eye Colour: {harryPotterCharacter.eyeColour}</p>
            <p>Actor: {harryPotterCharacter.actor}</p>
            <p>Is a Wizard?: {harryPotterCharacter.wizard ? `True` : `False`}</p>
        </div>
            
    )
}