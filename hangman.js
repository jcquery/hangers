var words = [
  "javascript",
  "monkey",
  "amazing",
  "pancake",
  "penguin",
  "gravy",
  "conservatory",
  "llama",
  "utilitarianism"
];
var choice = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
for (var i = 0; i < choice.length; i++) {
  answerArray[i] = "_";
}
var remainingLetters = choice.length;
var remainingGuesses = 5;
var record = [];
while ((remainingLetters > 0) && (remainingGuesses > 0)) {
  alert(answerArray.join(" "));
  alert("Remaining lives: " + remainingGuesses);
  var guess = prompt("Guess a letter, or click Cancel to leave us all hanging. So far, here's what you've tried: " + record.join(", "));
  var ref = remainingLetters;
  var check = 0;
  if (guess === null) {
    break;
  }
  else if (guess.length !== 1) {
    alert("A letter. As in, one letter.");
  }
  else {
    guess = guess.toLowerCase();
    for (var j = 0; j < choice.length; j++) {
      if (choice[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
    if (ref === remainingLetters) {
    remainingGuesses--;
    alert("Sorry, there is no " + guess +".");
    }
    for (var k = 0; k > record.length; k++) {
      if (record[k] === guess) {
      check = 1;
      }
    }
    if (!check) {
      record.push(guess);
    }
  }
}
alert (answerArray.join(" "));
if (remainingLetters === 0) {
  alert ("Good job! The word was \"" + choice + ".\"");
}
else {
  alert ("Whoops! The word was \"" + choice + ".\" Better luck next time!");
}
