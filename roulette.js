document.addEventListener("DOMContentLoaded", function () {
    let p1 = window.prompt("Player 1: ");
    let p2 = window.prompt("Player 2: ");
    document.getElementById("players").innerText = `Players: ${p1} vs ${p2}`;

    const chambers = 6; 
    let bulletChamber; 
    let currentChamber; 
    let currentPlayer = p1; 
    let isChamberSpun = false; 

    function resetGame() {
        bulletChamber = Math.floor(Math.random() * chambers) + 1; 
        currentChamber = 1; 
        isChamberSpun = false; 
        document.getElementById("triggerButton").disabled = true; 
        document.getElementById("spinButton").disabled = false; 
        document.getElementById("resetButton").style.display = "none"; 
        document.getElementById("message").innerText = ""; 
    }


    function spinChamber() {
        currentChamber = Math.floor(Math.random() * chambers) + 1; 
        isChamberSpun = true;
        document.getElementById("triggerButton").disabled = false; 
        document.getElementById("spinButton").disabled = true; 
        document.getElementById("message").innerText = `${currentPlayer}, it's your turn!`;
    }

    function pullTrigger() {
        if (currentChamber === bulletChamber) {
            document.getElementById("message").innerText = `BANG! ${currentPlayer} lost.`;
            document.getElementById("triggerButton").disabled = true; 
            document.getElementById("resetButton").style.display = "block"; 
        } else {
            document.getElementById("message").innerText = `Click! ${currentPlayer} survived.`;
            currentChamber = (currentChamber % chambers) + 1; 
            currentPlayer = currentPlayer === p1 ? p2 : p1; 
            document.getElementById("message").innerText += ` ${currentPlayer}, it's your turn!`;
        }
    }


    function restartGame() {
        resetGame();
        currentPlayer = p1;
        document.getElementById("message").innerText = `${currentPlayer}, it's your turn!`;
    }

    document.getElementById("spinButton").addEventListener("click", spinChamber);
    document.getElementById("triggerButton").addEventListener("click", pullTrigger);
    document.getElementById("resetButton").addEventListener("click", restartGame);

    resetGame();
});