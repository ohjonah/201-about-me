'use strict';

var userName = prompt('Hi! What\'s your name?');

var defaultAnswersArr = ['Y', 'YA', 'YAH', 'YES', 'N', 'NA', 'NAH', 'NO'];

var playGameOneQuestion = prompt('How about we play a game to get to know me? Ready? (Y/N)').toUpperCase();

// game one variables
var gameOneCounter = 0;
var gameOneFlagOne;

// game two variables
var sum = 0;

// game three variables
var gameTwoFlagOne;
var gameTwoCountDown = 6;

function capitalFirstLetter(userFirstName) {
  userName = userFirstName.charAt(0).toUpperCase() + userName.slice(1);
}

// GAME ONE
function gameOne() {
  var number;
  var gameOneCountDown = 4;

  if (defaultAnswersArr.indexOf(playGameOneQuestion) <= 3) {
    console.log('YES - position of users answers in defaultAnswersArr: ', defaultAnswersArr.indexOf(playGameOneQuestion));

    while (number !== 5 && gameOneCounter !== 4) {
      number = parseInt(prompt('How many letters are in my first name?'));

      if (number < 5) {
        gameOneCountDown--;
        gameOneCounter++;
        alert('My name is longer than that! You have ' + gameOneCountDown + ' tries left!');
        console.log('user guess: ' +  number + '; ' + ' attempt: ' + gameOneCounter);

      } else if (number > 5) {
        gameOneCountDown--;
        gameOneCounter++;
        alert('My name is shorter than that!  You have ' + gameOneCountDown + ' tries left!');
        console.log('user guess: ' +  number + '; ' + ' attempt: ' + gameOneCounter);

      } else {
        gameOneCountDown--;
        gameOneCounter++;
        alert('Please enter a number! Counts as a try! ' + gameOneCountDown + ' tries left!');
        console.log('user guess: ' +  number + '; ' + ' attempt: ' + gameOneCounter);
      }
    }

  } else if (defaultAnswersArr.indexOf(playGameOneQuestion) > 3 && defaultAnswersArr.indexOf(playGameOneQuestion) < 8) {
    var greetingQuestionTwo = prompt('Do you like having fun? (Y/N)').toUpperCase();

    if ((defaultAnswersArr.indexOf(playGameOneQuestion) > 3 && defaultAnswersArr.indexOf(playGameOneQuestion) < 8) && (defaultAnswersArr.indexOf(greetingQuestionTwo) > 3 && defaultAnswersArr.indexOf(greetingQuestionTwo) < 8)) {
      alert('Two NO\'s in a row?? You\'re no fun!');
    } else {
      alert('Well, we can play a different game later!');
    }

  } else {
    alert('Please put a valid response!');
  }

  if (number === 5) {
    alert('You win! I have 5 letters in my name.');
    gameOneFlagOne = true;
    console.log('user guess: ' +  number + '; ' + ' attempt: ' + gameOneCounter);
  } else if (gameOneCounter === 4) {
    gameOneFlagOne = false;
    alert('You lose! Oh well! Let\'s play another game');
  }
}


// game two
function gameTwo() {
  var greeting = prompt('Let\'s see if our names have letters in common! Ready? (Y/N)').toUpperCase();

  if (defaultAnswersArr.indexOf(greeting) <= 3 && defaultAnswersArr.indexOf(greeting) > 0) {
    console.log(defaultAnswersArr.indexOf(greeting));
    var lettersArr = ['J', 'O', 'N', 'A', 'H'];
    var questionAnswersArr = [];
    var userLetterArr = [];

    for (var i = 0; i < lettersArr.length; i++) {
      var letterQuestionYesNo = prompt('Do you have a "' + lettersArr[i] + '" in your first name?').toUpperCase();
      console.log('user has "' + lettersArr[i] + '" in their first name? ' + letterQuestionYesNo);

      if (defaultAnswersArr.indexOf(letterQuestionYesNo) <= 3) {
        questionAnswersArr.push(1);
        userLetterArr.push(lettersArr[i]);
      } else {
        questionAnswersArr.push(0);
      }
    }

    console.log('user response in an array: ' + questionAnswersArr + '. user response joined: ' + questionAnswersArr.join('') + '.');

    for (var j = 0; j < questionAnswersArr.length; j++) {
      sum += questionAnswersArr[j];
    }
    console.log('total sum:', sum);

    alert('We have ' + sum + ' letters in common!');

    alert('Now that you know my first name, let\'s guess my last name!');
  }
}

function gameThree() {

  var lastNameArr = ['O', 'H'];

  while (!gameTwoFlagOne && gameTwoCountDown !== 0){
    var gameTwoQuestion = prompt('Let\'s guess one letter of my last name! What letter do you choose? (A-Z)').toUpperCase();

    for (var k = 0; k < lastNameArr.length; k++) {
      if(gameTwoQuestion === lastNameArr[k]) {
        gameTwoFlagOne = true;
        console.log('flag status:', gameTwoFlagOne);
      }
    }
    if (!gameTwoFlagOne) {
      gameTwoCountDown--;
      alert('Keep guessing! You have ' + gameTwoCountDown + ' tries left!');
      gameTwoFlagOne = false;
    }
  }

  if (gameTwoFlagOne) {
    alert('That\'s right! ' + gameTwoQuestion + ' is a letter of my last name! This took you ' + (6 - gameTwoCountDown) + ' tries!');
  }
}

function endOfGameSummary() {
  if (gameOneFlagOne === true && gameTwoFlagOne === true) {
    alert(userName + '\'s Question Summary: You guessed how many letters are in my last name in ' + gameOneCounter + ' tries! We also have ' + sum + ' letters in common! You also guessed ' +  gameTwoCountDown + ' tries!');
  } else if (gameOneFlagOne === false && gameTwoFlagOne === true) {
    alert(userName + '\'s Question Summary: Looks like you weren\'t able to guess the letters in my name, but we have ' + sum + ' letters in common! You also guessed ' +  gameTwoCountDown + ' tries!');
  } else if (gameOneFlagOne === true && gameTwoFlagOne === false) {
    alert(userName + '\'s Question Summary: You guessed how many letters are in my last name in ' + gameOneCounter + ' tries! We also have ' + sum + ' letters in common! You didn\'t guess any letters in my last name though!');
  } else if (gameOneFlagOne === false && gameTwoFlagOne === false) {
    alert(userName + '\'s Question Summary: You didn\'t guess the number of letters in my first name or any letters of my last name! But we found out we have ' + sum + ' letters in common!');
  }
}


capitalFirstLetter(userName);
gameOne();
gameTwo();
gameThree();
endOfGameSummary();
