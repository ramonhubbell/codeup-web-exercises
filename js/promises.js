console.log('page is ready');
// lastFMPromise
//     .then( response => response.json()
//         .then( data => {
//             let xlCover = "";
//             let generatedHTML = "<div>";
//             for(let album of data.topalbums.album){
//                 xlCover = album.image[3]['#text'];
//                 generatedHTML += `
//                     <h3>${album.name}</h3>
//                     <h4>${album.artist.name}</h4>
//                     <img src="${xlCover}" alt="album's artwork">
//                     `;
//             }
//             generatedHTML += "</div>";
//             document.body.innerHTML = generatedHTML;
//         })
//     ).catch( error => console.log(error));

// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
// /users/:username/events/public

function userCommitDate (username) {
    let url = `https://api.github.com/users/${username}/events`;
    fetch (url, {headers: {'Authorization':`token ${GIT_KEY}`}})
        .then(response => {
            return response.json().then(users => {
                    console.log(users);
                    // users.forEach( userObj => {
                    //     console.log(userObj.login);
                    // })
                })
        })
}
console.log(GIT_KEY);
userCommitDate('ramonhubbell');
// const url = `https://api.github.com/users/${username}/events/public`;
// const userCommit = fetch (url, {headers: {'Authorization': `token ${GIT_KEY}`}});
// userCommit
//     .then( response => response.json()
//         .then(data => {
//             console.log(data);
//             console.log(data[0].type);
//             console.log(data[0].payload);
//             console.log(data[0].payload.commits);
//             console.log(data[0].payload.commits.created_at);
            // if (data[0].type === "PushEvent") {
            //     console.log()
            // }
    //     }))
    // .catch( error => console.log(error));

// function getGithubUsernames() {
//     return fetch('https://api.github.com/users')
//         .then(response => response.json())
// }

// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj.login);
//     });
// }).catch(error => console.error(error));