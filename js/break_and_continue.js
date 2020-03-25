
console.log("Break and continue exercises");



do {
    var oddNumber = prompt("Enter an odd number 1 through 50.");

} while (oddNumber % 2 == 0);

var oddNumber2 = console.log("Number to skip is: " + oddNumber);

console.log("Here is an odd number: " + i);
for(var i = 1; i <= 50; i += 2) {
    if ((oddNumber2 = i) && (oddNumber2 % 2 !== 0)) {
        console.log("Yikes! Skipping number: " + oddNumber2);
    }
        // if (i % 2 !== 0) {
    //     console.log("Here is an odd number: " + i);
//         console.log("Yikes! Skipping number: " + oddNumber);
//         break;
//         continue;
//     } if (i % 2 == 1) {
//         // console.log("Here is an odd number: " + oddNumber);
//     } if (oddNumber = i) {
//         console.log("Yikes! Skipping number: " + oddNumber);
//     } else {
//         console.log("Here is an odd number: " + i);
//     } if(oddNumber % 2 == 0 || oddNumber === true) {
//         break;

}

// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
        // use the break keyword to exit from the while loop
        // break;
        // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }