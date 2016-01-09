var res1 = document.getElementById('resultOne');
var res2 = document.getElementById('resultTwo');
var res3 = document.getElementById('resultThree');
var res4 = document.getElementById('resultFour');
var resFinal = document.getElementById('finalResults');
var answersRight = 0;
var timesTried = 0;

var userName = prompt('Hello, friend! What is your name?');
alert('Greetings, ' + userName + '. My name is Zach. I\'ll ask you a few questions about me to break the ice.');
console.log('User\'s name is ' + userName + '.');

var questData = [['First question, ' + userName + '! Am I from Bellevue? Click "OK" for true, "Cancel" for false',
false,
 userName + ' got the first question right!',
 'That\'s right! I was born in Redmond.',
 'That\'s not where I\'m from.',
 userName + ' got the first question wrong',
 res1],
 ['Next question, ' + userName + '! Did I go to college in Walla Walla? Click "OK" if you think it\'s true, "Cancel" if false.',
 true,
 userName + ' got the second question right!',
  'That\'s right! I went to school over there at Whitman College. Lots of wheat fields. Lots of socially conservative billboards.',
  'Nope, I did',
  userName + ' got the second question wrong',
  res2],
  ['Next question,' + userName + '! Is my cat\'s name Sophocles? Again, click "OK" if you think it\'s true, "Cancel" if false..',
  false,
  userName + ' got the third question right!',
  'That\'s right! His name is Archimedes. The educated cat.',
  'Nope, That\'s not his name. Wise choice on my part. He\'s not a deeply moral creature',
  userName + ' got the third question wrong',
  res3
]];

function askQuestion(){
  var answerTwo = confirm(questData[i][0]);
  if (answerTwo === questData[i][1]) {
    // Right Answer
    questData[i][6].textContent  = questData[i][3];
    questData[i][6].className = 'right';
    answersRight++;
    console.log(questData[i][2]);
  }
  else {
    console.log(questData[i][5]);
    // Wrong Answer
    questData[i][6].textContent = questData[i][4];
    questData[i][6].className = 'wrong';
  };
  console.log(answersRight + ' answers right.');
}
for (var i = 0; i < questData.length; i++) {
  askQuestion();
}

function fourthQuestion(){
  var correctAnswerFour = false;
  while (correctAnswerFour === false) {
    var answerFour = prompt('Final question, ' + userName +'. How old am I? Please answer with a numeral.');
    console.log(userName + ' guessed my age was ' + answerFour + '.');
    answerFour = parseInt(answerFour);
    if (answerFour === 27) {
      correctAnswerFour = true;
      answersRight++;
      timesTried++;
      res4.textContent = 'Yes, I\'m 27 years old and it took you ' + timesTried + ' tries.';
      res4.className = 'right';
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
}
fourthQuestion();

function reportScore() {
resFinal.textContent = 'Congratulations, ' + userName + '! You got ' + answersRight + ' questions correct! And it only took you ' + timesTried + ' attempts to guess my age.';
}
reportScore();



//alert('Congratulations, ' + userName + '! You got ' + answersRight + ' questions correct! And it only took you ' + timesTried + ' attempts to guess my age.');
