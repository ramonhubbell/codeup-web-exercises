console.log('this page works.');



function lastCommit (username) {
    let url = `https://api.github.com/users/${username}/events/public`;
    return fetch(url, {headers: {'Authorization': `token ${GIT_KEY}`}})
        .then( response => response.json()
        .then( users => {
            console.log(users);
            // console.log(users[6]);
            // console.log(users[6].type);
            // console.log(users[6].created_at);
            for( let userObj of users ) {
                if ( userObj.type === 'PushEvent') {
                    console.log(userObj.created_at);
                    return userObj.created_at;
                }
            }
        })
        )
        .catch(error => console.error(error));
}

lastCommit('ramonhubbell')
    // .then(lastCommitDate => console.log('lastCommitDate ', lastCommitDate));
    .then(lastCommitDate => document.body.innerHTML = `lastCommitDate: ${lastCommitDate}`);

// Write a function named wait that accepts a number as a parameter, and returns
// a promise that resolves after the passed number of milliseconds.

function wait (milliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ( milliseconds) ;
        }, milliseconds);
    });
}
console.log(wait()); // a pending promise

wait(1000).then((ms) => console.log(`You\'ll see this after ${ms/1000} seconds`));
wait(3000).then((ms) => console.log(`You\'ll see this after ${ms/1000} seconds`));
