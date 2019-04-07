# recentlyplayed
> Shows the recently played tracks of the Spotify User and is Sharable (as a link [FOR ONE HOUR ONLY!!!])

## What was the point of this?
-   Use of Spotify's Authentication (Implicit Grant)
    -   Everything is CLIENT-SIDE
-   Maybe people can share their Recently-played with other people
    -   Increase social-interaction (???)

## Process Of Authentication (Spotify)
-   user goes to / (**)
    -   Checks if 'access_token' is inside the URL
        -   If No
            -   Display a div that shows that they need to Authenticate
            -   user goes to Auth.html (***)
        -   If Yes
            -   Extract the access_token from the URL
                -   Show the recently played
-   user goes to Auth.html (***)
    -   redirect to Spotify Authentication
        -   After Authentication, it will redirect to `/` that is given as request param (redirect_uri) (**)