(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["Ramon", "Douglas", "Fernando", "Joe"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log("The number of elements in this array is: " + names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var index = 0; index < names.length; index++) {
        console.log( "The name at index " + index + " is: " + names[index] );
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    //
    names.forEach(function(item,index,array) {
        console.log( "from the for each", item);
    })
    // someArray.forEach(function(element, index, array) {
    //     // ...
    // })

    var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
    shapes.forEach(function(shape, index, array) {
        console.log('Here is a lovely shape: ' + shape + '.' + index + array);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function firstArray (aray) {
        return array[0];
    }
    var numbers =[1, 2, 3, 4, 5]
    var result = first(numbers);
    console.log(result === 1);
    result = first(names);
    console.log( result === "Ramon");

    function second (array) {
        return array[1];
    }
    var numbers =[1, 2, 3, 4, 5]
    result = second(numbers);
    console.log(result === 2);
    result = second(names);
    console.log( result === "Douglas");

    function last (array) {
        return array[array.length-1];
    }
    result = last(numbers);
    console.log(result === 5);
    result = last(names);
    console.log( result === "Joe");



})();

// console.log("Array loops.")