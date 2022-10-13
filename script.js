window.onload = function () {
    generateMainBoard()
    const randBtn = document.getElementById("randBtn")
    const numbers = fillArray()
    randBtn.addEventListener("click", function() {generateRandNumber(numbers)})
    const userBoardBtn = document.getElementById("userBoardBtn")
    userBoardBtn.addEventListener("click", generateUserBoards)
}

function generateMainBoard (){
    const board = document.querySelector(".main-board")
    for (let i=0; i < 76; i++)
    {
        board.innerHTML+=`<div class="cell">${i+1}</div>`
    }
}

function fillArray (){
    const arr = []
    for (let i = 0; i < 76; i++){
        arr.push(i + 1)
    }
    return arr
}

function getRandomNum (numbers){
    const randIndex = Math.floor(Math.random() * numbers.length)
    const random = numbers[randIndex]
    numbers.splice(randIndex,1)
    return random
}

function generateRandNumber (numbers){
    const random = getRandomNum(numbers)

    const randNumDiv = document.getElementById("randNum")
    if (random !== undefined){
        randNumDiv.innerText = "Number: " + random
    }
    else{
        randomNumDiv.innerText = "No more numbers left. Finished!"
    }

    const cells = document.querySelectorAll(".main-board .cell")
    cells [random -1 ].classList.add("highlight")

    const userCells = document.querySelectorAll(".user-board .cell")
    for (let cell of userCells){
        if (parseInt(cell.innerText) === random) {
            cell.classList.add("highlight")
        }
    }
}

function generateUserBoards () {
    const usersNumber = document.getElementById("usersNumber").value 
    const container = document.querySelector(".container")
    if (parseInt(usersNumber) > 0){
        for (let i=0; i <parseInt(usersNumber); i++){
        const numbers = fillArray()
        const board = document.createElement("div")
        board.className = "board user-board"
        for (let i = 0; i < 24; i++){
            const random = getRandomNum(numbers)
            board.innerHTML += `<div class="cell">${random}</div`
        }
        container.appendChild(board)
     }
    }
}