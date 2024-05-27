import {Link} from "react-router-dom"
export default function HarryPotterCharacter ({character}) {
    return (
        <>
        <Link to={character.id}>
         <li className="harry-potter-character" key={character.id}>{character.name} Played by {character.actor}</li>
         </Link>
        </>
    )
}