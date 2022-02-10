# rock-scissors-paper

rock-scissors-paper game

TASK Let’s implement the famous kid game! Everybody knows the rules:

- Scissors beats a paper,
- Paper beats rock,
- Rock beats scissors.
- And we play up to three wins!

Interface:

- On the page, you should show game rules and heading‘Let’s play!’
- After there should be three buttons - Rock, Paper, or Scissors.
- And ‘Reset’ link.

Interaction:

- After pressing one of the buttons game is started.
- The result of every step we should show after buttons. It should look like:
  “Round 1, Paper vs. Rock, You’ve WON!” or “Round 2, Rock vs. Paper, You’ve
  LOST!.
- And after three wins or three losses, you should show the final result who is
  the winner.
- Pressing reset button should clear game data and previous results on the page.

REQUIREMENTS

- Use Yarn to install dependencies.
- Use Webpack to handle the build process.
- Styles should be written using Scss in 2 or more files. Should be compiled to
  one \*.css file.
- JS should use ES6 (use arrow functions). The source code should be located in
  3 or more different .js files. Should be compiled to one minimized, ES5
  app.js.
- All images should be compressed.
- package.json file should have 2 scripts: • build - for compiling all the
  project, • serve - for development, to run development server and watch all
  file changes (_.html, _.scss, \*.js).
- Add linter/prettier to the project
