console.log('page is ready!');

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Exercise 2: Use .filter to create an array of user objects where each
// user object has at least 3 languages in the languages array.

var atLeast3Languages = users.filter(function(name){
    return name.languages.length <= 3;
});

console.log('atLeast3Languages ' , atLeast3Languages);

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// var evens = numbers.filter(function(n) {
//     return n % 2 === 0;
// });
// console.log(evens); // [2, 4, 6, 8, 10]