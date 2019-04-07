let url = document.URL
let spotify_auth_link = 'https://accounts.spotify.com/authorize?client_id=3a89b22b7095445782078c237454dafd&redirect_uri=http://127.0.0.1:8080/Auth.html&scope=user-read-currently-playing&response_type=token&state=123'

if(url.includes('access_token')){
    let access_token = url.split('#')[1].split('=')[1].split('&')[0]
    console.log(url)
    window.location.replace('/?access_token=' + access_token)
}else{
    window.location.replace(spotify_auth_link)
}