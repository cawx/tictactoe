document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('td')
    const reset = document.getElementById("resetbtn")
    const info = document.getElementById("info")
    let current = "X"
    let game = ["", "", "", "", "", "", "", "", ""]
    const wins = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
    let isActive = true

    cells.forEach(function (cell, index) {
        
        cell.addEventListener('click', () => {
            if(cell.textContent === '' && isActive == true) {
                cell.textContent = current
                game[index] = current
                checkwin()
                current = current === "X" ? "O" : "X"
                if(isActive) { info.textContent = current + " turn" }
            }
        })
    })

    reset.addEventListener('click', () => {
        cells.forEach((cell) => { 
            cell.textContent = '' 
            isActive = true
        })
        info.textContent = "X turn"
    })

    function checkwin() {
        for(let i = 0; i < wins.length; i++) {
            const [a, b, c] = wins[i]
            if (game[a] === current && game[b] === current && game[c] === current) {
                isActive = false
                alert("Winner has been decided!")
                info.textContent = current + " has won!"
                game = ["", "", "", "", "", "", "", "", ""]
                return
            }
        }
        if(!game.includes("")) {
            info.textContent = "it's a tie!"
            isActive = false
        }
    }
})


