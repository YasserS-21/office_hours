import HarryPotterCharacter from "../components/HarryPotterCharacter"
import {useState, useEffect} from "react"
export default function HarryPotterList () {
    const [harryPotterCharacters, setHarryPotterCharacters] = useState([])

    useEffect(() => {
     fetch("https://hp-api.onrender.com/api/characters")
     .then(response => response.json())
     .then((data) => setHarryPotterCharacters(data))
    }, [])  
    
    return (
        <div className="harry-potter-list__page">
        <div className="harry-potter-list__title">
        <p>Harry Potter List</p>
        </div>
        <ul className="harry-potter-list">
            {harryPotterCharacters.map(character => {
                return (
                    <HarryPotterCharacter character={character}/>
                )
            })}
        </ul>
        </div>
    )
}