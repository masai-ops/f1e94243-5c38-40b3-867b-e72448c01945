import DiceB from "./DiceB";
import DiceA from "./DiceA";
const Game=()=>{
    return (
        <div>
            <h1 data-testid="turn-heading">{/* Player 1 or player 2 Banner as per the turn*/}</h1>
            <DiceA/>
            <DiceB/>
            <h3 data-testid="player1-score">Player 1 Scores: {/*Player 1 scores should be here*/}</h3>
            <h3 data-testid="player2-score">Player 2 Scores: {/*Player 1 scores should be here*/}</h3>
            <h1 data-testid="result-tag">{/* Result tag should be here */}</h1>
        </div>
    )
}

export default Game;
