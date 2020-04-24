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
    return fetch (url, {headers: {'Authorization':`token ${GIT_KEY}`}})
        .then(response => {
             response.json()
                .then(listOfEvents => {
                    // console.log(listOfEvents);
                    // console.log(listOfEvents[0].type);
                    // console.log(listOfEvents[0].created_at);
                    for(let event of listOfEvents){
                    // listOfEvents.forEach( event => {
                    if ( event.type === 'PushEvent' ) {
                        return event.created_at;
                    }
                    }
                })
        })
}
// console.log(GIT_KEY);
userCommitDate('ramonhubbell')
    .then( lastCommitDate => console.log('lastCommitdate ', lastCommitDate));
console.log(userCommitDate('ramonhubbell'));


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

const wait = milliseconds => {
    return new Promise( (resolved, reject) => {
        setTimeout( () => {
            resolved(milliseconds);
        }, milliseconds);
    });
};

wait(1000).then( (ms) => console.log(`You'll see this after ${ms/1000} seconds`));

wait(3000).then( (ms) => console.log(`You'll see this after ${ms/1000} seconds`));

