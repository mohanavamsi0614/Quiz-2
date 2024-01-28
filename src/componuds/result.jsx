function Result(){
    return(
        <>
            <h1>Result</h1>
            <div>
                <h1>You need more practice</h1>
                <h1>Your score is 20%</h1>
                <div className="namede">
                    <div className="details"><h2>Total quesions</h2>
                    <h2>15</h2>
                    </div>
                    <div className="details"><h2>Attemted</h2><h2>9</h2></div>
                    <div className="details"><h2>Correct</h2><h2>3</h2></div>
                    <div className="details"><h2>Wrong</h2><h2>6</h2></div>
                </div>
            </div>
            <div ><button className="red">Play again</button><button className="green">Back to home</button></div>
        </>
    )
}
export default Result