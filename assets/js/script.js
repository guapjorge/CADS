var inputUser = document.querySelector('#input-username')
var searchButton = document.querySelector('#search-button')
function findUserName(id) {
    fetch('https://www.googleapis.com/youtube/v3/channels&appid=AIzaSyAIkxCpJ31trsgp_oqRjz9IflOIUIOjiUw')
    
}

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