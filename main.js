const displayPicLength = 1536
const displayPicHeight = 2048

const displayPic = document.getElementById('displayPic')

displayPic.style.width = `${displayPicLength / 5}px`
displayPic.style.height = `${displayPicHeight / 5}px`

const semicolon = document.getElementById('semicolon')

setInterval(()=>{
  semicolon.classList.toggle('hide')
}, 500)