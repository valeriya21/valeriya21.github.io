const saveName = () => {
    let newUserName = document.getElementById('newname').value
    localStorage['username'] = newUserName
}

const redirect = () => {
    window.location = "game.html"
}

