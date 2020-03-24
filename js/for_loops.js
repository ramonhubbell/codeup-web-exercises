
// function showMultiplicationTable(input) {
//     console.log(input + " * 1" + " = " + (input * 1));
// }
//
// showMultiplicationTable(7);


// function showMultiplicationTable(input) {
// for (var i = 1; i <= 10; i++) {
//     console.log(input + " * " + i + " = " + (input * i));
// }
// }
// showMultiplicationTable(7);

// for (var i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }

// This is how you get a random number between 50 and 100

// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 200) + 20;

for (var i = 1; i <= 10; i++) {
    var randomNumber = Math.floor(Math.random() * 180) + 20;
    if (randomNumber % 2 == 0){
        console.log(randomNumber + " is even.");
    } else {
        console.log(randomNumber + " is odd.");
}
}