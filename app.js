var userName = prompt('Hello, friend! What is your name?');
alert('Greetings, ' + userName + '. My name is Zach. I\'ll ask you a few      questions about me to break the ice.');
console.log('User\'s name is ' + userName + '.');

var answersRight = 0;

var answerOne = prompt('First question,' + userName + '! Am I from Bellevue? Answer \'Yes\' or \'No\'');
if (answerOne.toUpperCase() === 'NO' || answerOne.toUpperCase() === 'N') {
  answersRight++;
  console.log(userName + ' got the first question right!');
  alert('That\'s right, ' + userName + '! I was born in Redmond');
}
else if (answerOne === 'yes' || answerOne === 'y') {
  alert('Nope, ' + userName + '. That\'s not where I\'m from.');
  console.log(userName + ' got the first question wrong');
}
else {
  alert('You need to answer yes or no, ' + userName + '.')
};
console.log(answersRight + ' answers right.');

var answerTwo = confirm('Next question,' + userName + '! Did I go to college in Walla Walla? Click OK if you think it\'s true, Cancel if false..');
if (answerTwo === true) {
  answersRight++;
  console.log(userName + ' got the second question right!');
  alert('That\'s right, ' + userName + '! I went to school over there at Whitman College. Lots of wheat fields. Lots of socially conservative billboards.');
}
else {
  console.log(userName + ' got the second question wrong.');
  alert('Nope, ' + userName + '. I did.');
};
console.log(answersRight + ' answers right.');

var answerThree = confirm('Next question,' + userName + '! Is my cat\'s name Sophocles? Again, click OK if you think it\'s true, Cancel if false..');
if (answerThree === false) {
  answersRight++;
  console.log(userName + ' got the third question right!');
  alert('That\'s right, ' + userName + '! His name is Archimedes. The educated cat.');
}
else {
  console.log(userName + ' got the third question wrong.');
  alert('Nope, ' + userName + '. That\'s not his name. Wise choice on my part. He\'s not a deeply moral creature');
};
console.log(answersRight + ' answers right.');

var correctAnswerFour = false;
var timesTried = 0;
while (correctAnswerFour === false) {
  var answerFour = prompt('Final question, ' + userName +'. How old am I? Please answer with a numeral.');
  console.log(userName + ' guessed my age was ' + answerFour + '.');
  answerFour = parseInt(answerFour);
  if (answerFour === 27) {
    answersRight++;
    correctAnswerFour = true;
    timesTried++;
    alert('That\'s right, ' + userName + '! I\'m 27 years old.');
  }
  else if (answerFour < 27) {
    timesTried++;
    alert('Too low, ' + userName + '! But flattering. Try again.');
  }
  else if (answerFour > 27) {
    timesTried++;
    alert('Too high, ' + userName + '. Is it the beard? Try again.');
  }
  else {
    timesTried++;
    alert(userName + '! You were supposed to answer with a numeral. Try again.')
  };
};

alert('Congratulations, ' + userName + '! You got ' + answersRight + ' questions correct! And it only took you ' + timesTried + ' attempts to guess my age.');
