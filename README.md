**React Memory Game**
======

> ### Deployed to GitHub Pages [here](https://jr7x11.github.io/Braves/).


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Overview

Braves Memory Game is a React-based memory challenge app.

## Game Instructions
The twelve members of the Braves roster who played in Game 7 of the 1995 World Series are rendered to the page.  Click on each player without repeating until all twelve players have been selected to win the game.  If a player is clicked twice, the game will restart.

## Functionality

- Player Card props are rendered to the page.  Each click is recorded and initiates shuffling of card positions.
- Selecting a new player increases the user's score by 1.
- Clicking on a previously selected player resets the user's score to 0 and starts a new game.
- Clicking on all twelve players without repeating will result in a win message and set the highest score to 12.

## Resources
* [React](https://reactjs.org/)
* [JSX](https://reactjs.org/docs/introducing-jsx.html)
* [JavaScript/ES6](http://es6-features.org/#Constants)
* [Node dependencies](https://nodejs.org/en/), [Yarn Package Manager](https://yarnpkg.com/)
* [React Bootsrap](https://react-bootstrap.github.io/)
* VS Code

## Installation
To clone this repository:

    `$ git clone https://github.com/jr7x11/Braves.git`


To install dependencies:

    `$ npm install --save`

To run on localhost PORT 3000:

    `$ npm run start`

<hr>
