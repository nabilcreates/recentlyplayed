class App extends React.Component {

    constructor(){
        super();
        this.state = {
            access_token: 'BQCtKf7RP_GcjLZn97ay_YtnOqHQfKNy7OwrvoOHBPLXblvZS8abwbnVez1OA70tE0SyfjJ730XQ4ryWU3dc5OXCgN_g6ltl0fOJJNJ7MC9BT_ww54nmbjw_5R3KDH1fI7vAx9jPD9nXxzHnzZWcIW7LJiwrGXiM1H-n1xSN24s9-cn6xZWAl_o0638',
            loaded: false,
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.getCurrentPlayingSong(this.state.access_token)
    }

    getCurrentPlayingSong(access_token) {

            if(this.state.access_token != ''){
                fetch('https://api.spotify.com/v1/me/player/recently-played', {
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
        
    }

    handleChange(e){
        console.log(e.target.value)
        this.setState({
            access_token: e.target.value
        })

        this.getCurrentPlayingSong(this.state.access_token)
    }

    render() {

        let map = this.state.loaded ? this.state.recently_played.map(song => {

            console.log(song.track)
            return(
                <div id='song'>
                    <h1>{song.track.name}</h1>
                    <h3>By {song.track.artists[0].name}</h3>

                    <div id='audio'>
                    <p>Preview:</p>
                    <audio controls>
                        <source src={song.track.preview_url} type="audio/mpeg"></source>
                    </audio>
                    </div>
                </div>
            )
        }) : null
        
        return(
            <div>
                <div id='container'>
                <p>Access Token (Go <a href='./Auth.html' >Here</a> to get a Access Code and paste it here)</p>
                <input type='text' value={this.state.access_token} onChange={this.handleChange} ></input>
                {this.state.loaded ? map : 'Invalid Access Token!'}
                </div>
            </div>
        )
    }
}