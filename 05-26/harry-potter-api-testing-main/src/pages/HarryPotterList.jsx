import HarryPotterCharacter from "../components/HarryPotterCharacter"
export default function HarryPotterList ({harryPotterCharacters}) {

    
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