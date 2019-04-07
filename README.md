# recentlyplayed
> Shows the recently played tracks of the Spotify User and is Sharable (as a link [FOR ONE HOUR ONLY!!!])

## What was the point of this?
-   Use of Spotify's Authentication (Implicit Grant)
    -   Everything is CLIENT-SIDE
-   Maybe people can share their Recently-played with other people
    -   Increase social-interaction (???)

## Process Of Authentication (Spotify)
-   user goes to /
    -   Checks if 'access_token' is inside the URL
        -   If No
            -   Display a div that shows that they need to Authenticate
            -   user goes to Auth.html (***)
        -   If Yes
            -   Show the recently played
-   user goes to Auth.html (***)
    -   Checks if 'access_token' is inside the URL
        - WHY???
            -   After authenticating with Spotify using implicit-grant, it will return a access_token and state and scope and all these stuff in the URL
                -   If No
                    -   Authenticate On Spotify
                -   If Yes
                    -   Extract the access_token
                    -   Redirect user to / with the query string access_token with the value    of the access token