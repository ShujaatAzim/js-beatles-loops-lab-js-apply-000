var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var newArr = [];

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
return newArr;
}


function johnLennonFacts(array) {
  var newArr2 = [];
  var counter = 0;
  while (counter < array.length) {
    newArr2.push(array[counter] + "!!!")
    counter ++;
  }
  return newArr2;
}

function iLoveTheBeatles(number) {
  var newArr3 = [];
  var newNum = 15 - number;
  do {
    newArr3.push("I love the Beatles!")
    number --;
  } while (newNum > 0)
}