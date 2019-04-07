let redirect_uri = 'https://renabil.github.io/recentlyplayed/'
let scopes = 'user-read-currently-playing'

let url = document.URL
let spotify_auth_link = `https://accounts.spotify.com/authorize?client_id=3a89b22b7095445782078c237454dafd&redirect_uri=${redirect_uri}&scope=${scopes}&response_type=token`

window.location.replace(spotify_auth_link)