var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = ["He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];

var newArr = [];

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
return newArr;
}

var newArr2 = [];

function johnLennonFacts(facts) {
  var counter = 0;
  while (counter < 5) {
    newArr2.push(facts[counter] + "!!!")
    counter++;
  }
  return newArr2;
}
