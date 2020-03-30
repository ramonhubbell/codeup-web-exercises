(function(){
    "use strict";
console.log("Planets String Exercise.")
    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsStringBreak = planetsArray.join("<br>");
    console.log(planetsStringBreak);
    document.write(planetsStringBreak);

// Bonus

    // var unorderedPlanets1 = planetsString.unshift("<ul>");

    // console.log(planets.unshift("The Sun"));
    // console.log(planets);











})();
