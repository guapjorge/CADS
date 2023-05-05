var inputUser = document.querySelector('#input-username')
var searchButton = document.querySelector('#search-button')
searchButton.addEventListener('click', function () {
  var searchedUser = inputUser.value
  // execute(searchedUser)
  checksocial(searchedUser)
})

inputUser.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.querySelector('#search-button').click();
  }
})

function authenticate() {
  return gapi.auth2.getAuthInstance()
    .signIn({
      scope: "https://www.googleapis.com/auth/youtube.readonly)"
        .then(function () { console.log("Sign-in successful"); },
          function (err) { console.error("Error signing in", err); })
    })
}

function loadClient() {
  gapi.client.setApiKey("AIzaSyAIkxCpJ31trsgp_oqRjz9IflOIUIOjiUw");
  return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest%22")
    .then(function () { console.log("GAPI client loaded for API"); },
      function (err) { console.error("Error loading GAPI client for API", err); });
}

// Make sure the client is loaded and sign-in is complete before calling this method.
function execute(username) {
  return gapi.client.youtube.channels.list({
    "part": [
      "snippet,contentDetails,statistics"
    ],
    "forUsername": username
  })
    .then(function (response) {
      // Handle the results here (response.result has the parsed body).
      console.log("Response", response);
    },
      function (err) { console.error("Execute error", err); });
}

function checksocial(username) {

  fetch('https://checkmarks.com/api/v1/username/'+username+'/account/ARS2989/password/cQgPy9VnDN')
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      console.log(data)
    })
}

checksocial("username")
