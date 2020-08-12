console.log("Pizza Exercise");

(function () {
    "use strict";

    $(document).ready(function () {
        console.log('This page is ready.');

        // var url = "data/pizzas.json";
        var url = "https://cors-anywhere.herokuapp.com/https://www.olo.com/pizzas.json";
        var $toppings = $('#insertToppings');
        var generatedHTML = "";
        var toppings = "";

        getInfo();

        function renderHTML(toppingsArray) {
            $('#insertToppings').empty();
            for (let i = 0; i < 20; i++){
                generatedHTML =
                    "<tr>" +
                    "<td>" + (i + 1) + "</td>" +
                    "<td>" + toppingsArray[i] + "</td>" +
                    "</tr>";
                $toppings.append(generatedHTML);
            }
        };

        function getInfo() {
            $.get(url).done(function (data) {
                var parseData = JSON.parse(data);
                console.log(Array.isArray(parseData));
                console.log(typeof parseData);
                console.log(parseData);
                // console.log(data);
                var combinations = parseData.filter(function (topping) {
                    return topping.toppings;
                });
                var newCombinationArray = [];
                for (let combination of combinations) {
                    newCombinationArray.push(combination.toppings);
                }
                function countCombinations(newCombinationArray) {
                    const combinationCountObject = newCombinationArray.reduce((combinationCounts, combination) => {
                        if (typeof combinationCounts[combination] === 'undefined') {
                            combinationCounts[combination] = 1;
                        } else {
                            combinationCounts[combination] += 1;
                        }
                        return combinationCounts;
                    }, {});
                    return Object.entries(combinationCountObject).sort((a,b) => b[1]-a[1]);
                }
                // console.log(countCombinations(newCombinationArray));
                renderHTML(countCombinations(newCombinationArray));
            }).fail(function (error) {
                console.error(error);
            });
        };

        $('#update-btn').click(function () {
            getInfo();
        });
    });
})();