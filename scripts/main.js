/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue (hand) {

  for (var i = 0; i < hand.length; i++) {
    if (hand[i] == "J" || hand[i] == "Q" || hand[i] == "K" ) {
      hand[i] = 10;
    } else if (hand[i] == "A") {
      hand[i] = 1;
    }
    else {
      hand[i] = parseInt(hand[i]);
    }
  }

  console.log("initial hand values:", hand);

  //sum values of hand
  let handSum = 0;

  let sumFunction = function(array) {
    let sumArray = 0;
    for (var i = 0; i < array.length; i++) {
      sumArray = sumArray + array[i]
    }
    return sumArray;
  }

  for (var i = 0; i < hand.length; i++) {
    handSum = sumFunction(hand)

    if (handSum <= 11 && hand[i] == 1) {
      hand[i] = 11;
    }

  }

  handSum = sumFunction(hand);

  console.log("final hand values:", hand);
  console.log("hand sum:", handSum);

  return handSum;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
