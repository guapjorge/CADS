var inputUser = document.querySelector('#input-username')
var searchButton = document.querySelector('#search-button')
/* function findUserName(id) {
    fetch('https://www.googleapis.com/youtube/v3/channels&appid=AIzaSyAIkxCpJ31trsgp_oqRjz9IflOIUIOjiUw')
    fetch(https://    .then(function (res) {
            return res.json()
          })
          .then(function (data) {
            console.log(data)
          })
      }
      
      checksocial("blah")
} */

searchButton.addEventListener('click', function () {
    var searchedUser = inputUser.value
    findUserName(searchedUser)
})

inputUser.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.querySelector('#search-button').click();
    }
})

function 
    var url = 
    url: `https://check-username.p.rapidapi.com/check/${url}/${username}`;

    function checksocial(username) {
        console.log("HELLO WORLD!")
        fetch(https://    .then(function (res) {
            return res.json()
          })
          .then(function (data) {
            console.log(data)
          })
      }
      
      checksocial("blah")

function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({ scope: "https://www.googleapis.com/auth/youtube.readonly" })
        .then(function () { console.log("Sign-in successful"); },
            function (err) { console.error("Error signing in", err); });
}

function loadClient() {
    gapi.client.setApiKey("AIzaSyAIkxCpJ31trsgp_oqRjz9IflOIUIOjiUw");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function () { console.log("GAPI client loaded for API"); },
            function (err) { console.error("Error loading GAPI client for API", err); });
}

// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
    return gapi.client.youtube.channels.list({
        "part": [
            "brandingSettings"
        ],
        "mine": true
    })
        .then(function (response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
        },
            function (err) { console.error("Execute error", err); });
}

gapi.load("client:auth2", function () {
    gapi.auth2.init({ client_id: "YOUR_CLIENT_ID" });
})

fetch(
    "https://checkmarks.com/api/v1/username/andresray/account/ARS2989/password/cQgPy9VnDN"
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
