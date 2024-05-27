export default function IncreasePointsButton ({points, setPoints, upgrade}) {
    function handleIncreasePoints () {
         setPoints(points + upgrade)
        
    }
    return (
        <button className="increase-points__button" onClick={handleIncreasePoints}>
            +{upgrade}
        </button>
    )
    
} 