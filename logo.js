// const displayPicLength = 1536
// const displayPicHeight = 2048

// const displayPic = document.getElementById('displayPic')

// displayPic.style.width = `${displayPicLength / 6}px`
// displayPic.style.height = `${displayPicHeight / 6}px`

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const CANVASHEIGHT = 450
const CANVASWIDTH = 630

canvas.width = CANVASWIDTH
canvas.height = CANVASHEIGHT
const lineColor = 'white'
ctx.clearRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = 'white'
const fontSize = 1.5
const allLines = []
const tick = []

function drawLines() { 
  // tick
  ctx.lineWidth = 5
  ctx.lineCap = 'round'
  for(line of tick){
    let { startX, startY, endX, endY } = line
  ctx.beginPath()
    
    ctx.moveTo(startX * fontSize, startY * fontSize)
    ctx.lineTo(endX * fontSize, endY * fontSize)
    ctx.strokeStyle = '#33b9b3'
    ctx.stroke()
  }
  for (line of allLines) {
    let { startX, startY, currentX, currentY, endX, endY } = line
    let xDirection = startX < endX ? 1 : -1
    let yDirection = startY < endY ? 1 : -1

    let xRatio =
      xDirection === 1 ? (endX - startX) / 40 : ((startX - endX) / 40) * -1
    let yRatio =
      yDirection === 1 ? (endY - startY) / 40 : ((startY - endY) / 40) * -1

    
    ctx.beginPath()
    ctx.moveTo(startX * fontSize, startY * fontSize)
    ctx.lineTo(currentX * fontSize, currentY * fontSize)
    ctx.strokeStyle = '#33b9b3'
    ctx.stroke()

    let xOperator = xDirection === 1 ? currentX < endX : currentX > endX
    let yOperator = yDirection === 1 ? currentY < endY : currentY > endY

    if (currentX != endX && xOperator) {
      line.currentX += xRatio
    } else if (!line.break) {
      line.xDone = true
    }
    if (currentY != endY && yOperator) {
      line.currentY += yRatio
    } else if (!line.break && currentY == endY) {
      line.yDone = true
    }

    // if(line.xDone && line.yDone){
    //     line.yDone = false
    //     line.xDone = false
    //     line.break = true
    //     window.setTimeout(()=>{
    //         line.startX = endX
    //         line.startY = endY
    //         line.currentX = endX
    //         line.currentY = endY
    //         line.endX = startX
    //         line.endY = startY
    //         line.break =false
    //     }, 500)
    // }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  drawLines()

}


allLines.push({
  startX: 50,
  startY: 50,
  currentX: 50,
  currentY: 50,
  endX: 50,
  endY: 200,
})

allLines.push({
  startX: 70,
  startY: 200,
  currentX: 70,
  currentY: 200,
  endX: 70,
  endY: 50,
})

allLines.push({
  startX: 70,
  startY: 50,
  currentX: 70,
  currentY: 50,
  endX: 50,
  endY: 50,
})
allLines.push({
  startX: 50,
  startY: 200,
  currentX: 50,
  currentY: 200,
  endX: 150,
  endY: 200,
})

// // v

tick.push({
  startX: 150,
  startY: 200,
  currentX: 150,
  currentY: 200,
  endX: 110,
  endY: 150,
})
tick.push({
  startX: 260,
  startY: 80,
  currentX: 260,
  currentY: 80,
  endX: 150,
  endY: 200,
})

// // k

allLines.push({
  startX: 200,
  startY: 200,
  currentX: 200,
  currentY: 200,
  endX: 200,
  endY: 50,
})
allLines.push({
  startX: 260,
  startY: 200,
  currentX: 260,
  currentY: 200,
  endX: 200,
  endY: 143,
})


console.log(allLines)
ctx.clearRect(0, 0, canvas.width, canvas.height)
setTimeout(()=>setInterval(animate, 10), 3000)
animate()
