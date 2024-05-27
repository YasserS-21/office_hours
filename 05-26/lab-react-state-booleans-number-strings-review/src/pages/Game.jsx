
import {useState} from "react"
import DisplayPoints from "../components/DisplayPoints"
import IncreasePointsButton from "../components/IncreasePointsButton"
import UpgradeButton from "../components/UpgradeButton"
import WinBanner from "../components/WinBanner"

export default function Game() {
    let [points, setPoints] = useState(0);
    let [upgrade, setUpgrade] = useState(1);

    return(
        <div className="game">
            <WinBanner points={points} setPoints={setPoints} setUpgrade={setUpgrade}/>
            <DisplayPoints points={points}/>
            <IncreasePointsButton points={points} upgrade={upgrade} setPoints={setPoints}/>
            <UpgradeButton points={points} setPoints={setPoints} upgrade={upgrade} setUpgrade={setUpgrade}/>
        </div>
    )
}