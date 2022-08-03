## Dice Game 
This is a 2 Player dice game.


## Tags
react, useState, conditional rendering.


## Description

### Getting Started

1. Fork this repository.
2. Clone the forked app from your github account.
3. navigate inside the clone repository folder and run following command.
   - `npm install` - To install the dependencies
   - `npm start` - To Start running the application.

### Create a Dice Game, with following functionalities.

### Rules of Game

1. This a 2 player game.
2. There will be two dices, each with one player.
2. Players will roll the dice at their respective turns.
3. A random number will be genrated between 1 and 6 when a player rolls a dice (use `Math.random()`).
4. Whatever random number that has been genrated by the dice will get added to that player's score.
5. Each player can roll a dice maximum of 5 times.
6. At the end the player with the highest score will win.
‌
### Tasks / Functionalities to Implement

#### Initially the app will look like the following screenshot:

<img width="788" alt="Screenshot 2022-07-01 at 12 46 43 AM" src="https://user-images.githubusercontent.com/83001524/176759887-598278d0-be55-40c2-afa3-13f06b879ac4.png">

1. The App will have a Turn Banner, displaying whose turn is it, Player 1 or Player 2?
    - The initial text there will be `Player 1, It is your turn!!`.
    - This shows that player 1 will roll the dice first.
    - `Player 2: Roll Dice`, button will be disabled here.

2. Player 1 score should increse by whatever value dice is throwing.

3. Once the Player 1 has rolled the dice the banner should display `Player 2, It is your turn!!`
    - At this point the `Player 1: Roll Dice`, button will be diabled.

4. The Player 2 score should increse by whatever value dice is throwing.

5. This can only be done five times, so you can take a counter 1 and counter 2 which will track how many turns the respective players have already played.

6. Once the counter 1 and counter 2  reaches 5, it should display the winner and both the buttons namely `Player 1: Roll Dice` & `Player 2: Roll Dice` will be desabled as per the screenshot.

6. Once, the winner has been declared the turn banner will show `Game Over!!` as the text in it.

<img width="970" alt="Screenshot 2022-07-01 at 12 47 04 AM" src="https://user-images.githubusercontent.com/83001524/176760207-a0a0d6a3-c629-4793-a9c0-ad8488dfc354.png">

**Note** 
- Make sure you use only the given components and dont create new Components, files, folders of your own. Changing component name, file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, these are used by testing tools to test your code, removal of this will lead to low score.
- Also make sure to cross check all the spellings and Case of Texts, as per the following screenshot as the test cases are written accordingly and it could lead in less marks.
- You can focus on your own style, but first priority is implementing all the functionalities.

### Learning Objectives

1. Why and what is react?
2. Able to use CRA  and run the application.
3. Basic understanding of JSX.
4. Difference between State and props.
5. Conditional rendering.
6. Props Passing.

7. Handling basic onClick events.
