class App extends React.Component {

    constructor(){
        super();
        this.state = {
            access_token: '',
            loaded: false,
        }

    }

    componentDidMount() {
        if(document.URL.includes('access_token')){
            let temp_at = document.URL.split('=')[1].split('&')[0]
            console.log(temp_at)
            this.setState({
                access_token: temp_at
            })

            setTimeout(()=>{
                this.getCurrentPlayingSong(this.state.access_token)
            }, 1)
        }
    }

    getCurrentPlayingSong(access_token) {
            fetch('https://api.spotify.com/v1/me/player/recently-played?limit=50', {
                 method: 'GET',
                 headers: {
                     'Content-Type': 'application/json',
                     'Authorization': 'Bearer ' + access_token
                 }
            })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    recently_played: data.items,
                    loaded: true,
                })
            })
    }

    render() {

        let footer = (
            <h6>This is done with all of my passion. Please support my work(s) on <a href='https://github.com/renabil/recentlyplayed'>GitHub</a></h6>
        )
        
        let map = this.state.recently_played ? this.state.recently_played.map(song => {
            console.log(song.track)
            return(
                <div id='song'>
                    <h1>{song.track.name}</h1>
                    <h3>By {song.track.artists[0].name}</h3>

                    <a id='spotify-button' href={song.track.external_urls.spotify}>
                        <i className="fa fa-spotify spotify-button" aria-hidden="true"></i> Open In Spotify
                    </a>

                </div>
            )
        }) : null

        let invalid_access_token = (
            <div id='header'>
                <h1>Hello There!</h1>
                <h3>It seems that you do not have a Access Token</h3>
                <h3>You can get it by going <a href='./Auth.html' >here</a></h3>
                <ol>
                    <li>Log in with your Spotify Account</li>
                    <li>Click on Accept when Prompted</li>
                    <li>You will be automatically redirected to the Home Page where you can see your recently played tracks!</li>
                    <li>You can share with your friends or family members by copying the whole link and sharing it! The link is valud for 1 Hour after Authentication, Read below.</li>
                </ol>

                <h4>Please note that your Access Token will expire in 1 Hour after Authentication, If it expires, Just do the steps above again!</h4>

                <h5>Please note that I DO NOT keep any of your Spotify email(s) or password(s) anywhere in the server. This website is fully client-based.</h5>


                {footer}
            </div>
        )
                
        return(
            <div>
                <div id='container'>
                {this.state.loaded ? map : invalid_access_token}
                </div>
            </div>
        )
    }
}