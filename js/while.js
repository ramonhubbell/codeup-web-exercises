// while (/*condition*/) {
    // body
// }
var i = 2;

while (i <= 65536) {
    console.log("While loop numbers are: " + i);
    i = i * 2;
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// var conesBought = Math.floor(Math.random() * 5) + 1;
//
do {
    var conesSold = Math.floor(Math.random() * 5) + 1;
    console.log('All cones: ' + allCones + ' Cones to purchase: ' + conesSold);
    if (conesSold <= allCones) {
        console.log(conesSold + " cones sold.");
        allCones = allCones - conesSold;
    } else {
        console.log("Cannot sell you " + conesSold + " cones. I only have " + allCones + " ... ");
    }
    console.log(allCones);
} while (allCones > 0);

console.log("Yay! I sold them all!");
