export default function WinBanner ({points, setPoints, setUpgrade}) {

    const handleWin = () => {
        setPoints(0)
        setUpgrade(1)
    }
    return (
        <>
        {points>= 100 && 
            <div> 
            <h1>You Win!</h1>
            <button onClick={handleWin}>Play Again?</button>
            </div>}
        </>
    )
}