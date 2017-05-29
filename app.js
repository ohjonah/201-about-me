var username;

var gameOneCounter = 0;
var gameTwoCounter = 0;
var gameThreeCounter = 0;

var gameOneFlag = false;
var gameThreeFlag = false;

function grabUsername() {
  username = prompt('What is your name?');
}

function gameOne() {
  alert('Let\'s play a game! Guess how many letters are in my name!');

  while (gameOneGuess !== 5 && gameOneCounter !== 5) {
    var gameOneGuess = parseInt(prompt('How many letters do you think are in my name?'));
    console.log(gameOneCounter);
    if (gameOneGuess < 5) {
      alert('Too low! ' + (4 - gameOneCounter) + ' tries left!');
      gameOneCounter++;
    } else if (gameOneGuess > 5) {
      alert('Too high! ' + (4 - gameOneCounter) + ' tries left!');
      gameOneCounter++;
    } else if (gameOneGuess === 5) {
      gameOneFlag = true;
      alert('Yup, I have 5 letters in my name! You got it in ' + gameOneCounter + ' tries! ');
    }
  }

  if (gameOneFlag === false) {
    alert('Better luck next time! How about another game?');
  }
}

function gameTwo() {
  var myLetters = ['J', 'O', 'N', 'A', 'H'];
  alert('Do we have letters in common? Let\'s find out! (Y/N)');

  for (var i = 0; i < myLetters.length; i++) {
    var answer = prompt('Do you have a(n) ' + myLetters[i] + ' in your name?').toUpperCase();

    if (answerConvertor(answer)) {
      console.log('answer' + [i] + ' ' + answerConvertor(answer));
      gameTwoCounter++;
    }
  }
  alert('Looks like we have ' +  gameTwoCounter + ' letters in common!');
}

function gameThree() {

  while (gameThreeFlag !== false || gameThreeCounter !== 6) {
    var gameThreeAnswer = prompt('Let\'s play one more! What letters do you think are in my last name? Guess a letter!').toUpperCase();

    if (gameThreeAnswer === 'H' || gameThreeAnswer === 'O') {
      gameThreeFlag = true;
      alert('That\'s right! ' + gameThreeAnswer + ' is a letter of my last name!');
      break;

    } else {
      gameThreeCounter++;
      alert('You have ' + (6 - gameThreeCounter) + ' chances left!');
    }
  }
}

function gameSummary() {
  if (gameOneFlag === true && gameThreeFlag === true) {
    alert(username + ': Great job! It took you ' + (4 - gameOneCounter) + ' to guess the letters in my first name. We also learned that we have ' + gameTwoCounter + ' letters in common. You also found out one of the letters of my last name in ' + gameThreeCounter + ' tries!');

  } else if (gameOneFlag === true && gameThreeFlag === false) {
    alert(username + ': You weren\'t able to guess a letter in my last name, but you did guess how many letters were in my first name! We also found out we have ' + gameTwoCounter + ' in common!');

  } else if (gameOneFlag === false && gameThreeFlag === true) {
    alert(username + ': You couldn\'t guess how many letters were in my first name, but you did guess a letter in my last name! We also found out that we have ' + gameTwoCounter + ' in common!');

  } else if (gameOneFlag === false && gameThreeFlag === false) {
    alert(username + ': You didn\'t guess the number of letters in my first name or any of the letters in my last name. But we did find out that we have ' + gameTwoCounter + ' letters in common!');
  }
}

function answerConvertor(answer) {
  var possibleAnswers = ['Y', 'YA', 'YAH', 'YES', 'N', 'NA', 'NAH', 'NO'];

  if (possibleAnswers.indexOf(answer) === -1) {
    return 'Return a valid response!';
  } else if (possibleAnswers.indexOf(answer) < 4) {
    return true;
  } else {
    return false;
  }
}

grabUsername();
gameOne();
gameTwo();
gameThree();
gameSummary();
