export default function UpgradeButton({points, setPoints, upgrade, setUpgrade}) {
    const handleUpgradePoints = () => {
        if (points>=10) {
            setUpgrade(upgrade+1)
            setPoints(points - 10)
        } else {
            alert("Not Enough Points")
        }
    }
    return (
    <button className="upgrade__button" onClick={handleUpgradePoints}>
        Upgrade from {upgrade} to {upgrade+1}
    </button>
    )
    
}