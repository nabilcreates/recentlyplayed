// M2E4OWIyMmI3MDk1NDQ1NzgyMDc4YzIzNzQ1NGRhZmQ6ZjA5NmM0ZjcwMjI0NGExN2E3MzE3MjVkN2E0ODQ0NDA=

let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        Authorization: 'Basic M2E4OWIyMmI3MDk1NDQ1NzgyMDc4YzIzNzQ1NGRhZmQ6ZjA5NmM0ZjcwMjI0NGExN2E3MzE3MjVkN2E0ODQ0NDA='
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};

fetch(authOptions.url, {
    method: 'POST',
    headers: {
        Authorization: 'Basic M2E4OWIyMmI3MDk1NDQ1NzgyMDc4YzIzNzQ1NGRhZmQ6ZjA5NmM0ZjcwMjI0NGExN2E3MzE3MjVkN2E0ODQ0NDA='
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
})

.then(res => console.log(res))