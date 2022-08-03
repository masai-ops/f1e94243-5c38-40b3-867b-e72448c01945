import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Testing Application", () => {
    global.score=1;
    console.log("Resetting score to 1");
    describe("App component should render", () => {
        beforeEach(() => {
            // eslint-disable-next-line testing-library/no-render-in-setup
            render(<App />);
        });
        it("Should have turn heading with correct value",async()=>{
            expect(screen.getByTestId("turn-heading")).toBeInTheDocument();
            expect(screen.getByTestId("turn-heading")).toHaveTextContent("Player 1, It is your turn!!");
            global.score+=1;
        });
        it("should have Dice A and Dice B Component with correct initial values",async()=>{
            expect(screen.getByTestId("dice-A-value")).toBeInTheDocument();
            expect(screen.getByTestId("dice-B-value")).toBeInTheDocument();
            expect(screen.getByTestId("dice-A-value")).toHaveTextContent("Dice A: 0");
            expect(screen.getByTestId("dice-B-value")).toHaveTextContent("Dice B: 0");
            expect(screen.getByTestId("dice-A-button")).toBeInTheDocument();
            expect(screen.getByTestId("dice-A-button")).toBeEnabled();
            expect(screen.getByTestId("dice-B-button")).toBeInTheDocument();
            expect(screen.getByTestId("dice-B-button")).toBeDisabled();
            global.score+=2;
        });
        it("should have the scores of both the players with appropritae initail value", async()=>{
            expect(screen.getByTestId("player1-score")).toBeInTheDocument();
            expect(screen.getByTestId("player2-score")).toBeInTheDocument();
            expect(screen.getByTestId("player1-score")).toHaveTextContent("Player 1 Scores: 0");
            expect(screen.getByTestId("player2-score")).toHaveTextContent("Player 2 Scores: 0");
            global.score+=1;
        });
        it("should chnge the value of dice randomly after clicking of button", async()=>{
            expect(screen.getByTestId("dice-A-value")).toHaveTextContent("Dice A: 0");
            expect(screen.getByTestId("dice-B-value")).toHaveTextContent("Dice B: 0");
            fireEvent.click(screen.getByTestId("dice-A-button"));
            let valA=parseInt(screen.getByTestId("dice-A-value").innerHTML.split(": ")[1]);
            expect(valA).toBeGreaterThanOrEqual(1);
            expect(valA).toBeLessThanOrEqual(6);
            fireEvent.click(screen.getByTestId("dice-B-button"));
            let valB=parseInt(screen.getByTestId("dice-B-value").innerHTML.split(": ")[1]);
            expect(valB).toBeGreaterThanOrEqual(1);
            expect(valB).toBeLessThanOrEqual(6);
            global.score+=1;
        });
        it("should update the player scores",async()=>{
            expect(screen.getByTestId("player1-score")).toHaveTextContent("Player 1 Scores: 0");
            expect(screen.getByTestId("player2-score")).toHaveTextContent("Player 2 Scores: 0");
            fireEvent.click(screen.getByTestId("dice-A-button"));
            fireEvent.click(screen.getByTestId("dice-B-button"));
            let valA=parseInt(screen.getByTestId("dice-A-value").innerHTML.split(": ")[1]);
            let valB=parseInt(screen.getByTestId("dice-B-value").innerHTML.split(": ")[1]);
            expect(screen.getByTestId("player1-score")).toHaveTextContent("Player 1 Scores: 0");
            expect(screen.getByTestId("player2-score")).toHaveTextContent("Player 2 Scores: 0");
            fireEvent.click(screen.getByTestId("dice-A-button"));
            fireEvent.click(screen.getByTestId("dice-B-button"));
            expect(screen.getByTestId("player1-score")).toHaveTextContent("Player 1 Scores: "+valA);
            expect(screen.getByTestId("player2-score")).toHaveTextContent("Player 2 Scores: "+valB);
            global.score+=1;
        });
        it("should update the result message",async()=>{
            expect(screen.getByTestId("result-tag")).toBeInTheDocument();
            expect(screen.getByTestId("result-tag")).toHaveTextContent("");
            fireEvent.click(screen.getByTestId("dice-A-button"));
            fireEvent.click(screen.getByTestId("dice-B-button"));
            fireEvent.click(screen.getByTestId("dice-A-button"));
            fireEvent.click(screen.getByTestId("dice-B-button"));
            fireEvent.click(screen.getByTestId("dice-A-button"));
            fireEvent.click(screen.getByTestId("dice-B-button"));
            fireEvent.click(screen.getByTestId("dice-A-button"));
            fireEvent.click(screen.getByTestId("dice-B-button"));
            fireEvent.click(screen.getByTestId("dice-A-button"));
            fireEvent.click(screen.getByTestId("dice-B-button"));
            let score1=parseInt(screen.getByTestId("player1-score").innerHTML.split(": ")[1]);
            let score2=parseInt(screen.getByTestId("player2-score").innerHTML.split(": ")[1]);
            if(score1>score2){
                // eslint-disable-next-line jest/no-conditional-expect
                expect(screen.getByTestId("result-tag")).toHaveTextContent("Player 1 Wins!!");
            } else if(score1<score2){
                // eslint-disable-next-line jest/no-conditional-expect
                expect(screen.getByTestId("result-tag")).toHaveTextContent("Player 2 Wins!!");
            }
            global.score+=2;
        });
    }); 

    afterAll(() => {
        console.log("Final Score is", global.score);
    });
});