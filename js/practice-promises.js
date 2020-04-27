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
    .then(lastCommitDate => console.log('lastCommitDate ', lastCommitDate));
