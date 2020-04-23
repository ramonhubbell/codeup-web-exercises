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

// Exercise 3: Use .map to create an array of strings where each element
// is a user's email address.

var userEmails = users.map(function(address) {
    return address.email;
});

console.log('userEmails ' , userEmails);

// Exercise 4: Use .reduce to get the total years of experience from the list of
// users. Once you get the total of years you can use the result to
// calculate the average.

var totalYearsExperience = users.reduce((acc, currYear) => {
    return (acc + currYear.yearsOfExperience);
}, 0);

console.log('totalYearsExperience ' , totalYearsExperience);
console.log('average years of experience ' , totalYearsExperience/users.length);

// Exercise 5: Use .reduce to get the longest email from the list of users.

console.log(userEmails);
console.log(users[0].email.length);
var longestEmail = userEmails.reduce((longest, currEmail) => {
    if (currEmail.length > longest.length) {
        return currEmail;
    } else {
        return longest;
    }
    }, '');

console.log(longestEmail);

// ["ryan@codeup.com", "luis@codeup.com", "zach@codeup.com",
//     "fernando@codeup.com", "justin@codeup.com"]
