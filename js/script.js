//*player List 
function addPlayer(selectedPlayer) {
    let playerName = selectedPlayer.parentNode.children[0].innerText;
    let listItem = document.createElement("li");
    listItem.classList.add("py-0");
    listItem.innerText = playerName;
    const playerList = document.getElementById('player-list');
    playerList.appendChild(listItem);
    selectedPlayer.disabled = true;
}
//*cards list 
document.getElementById("cards").addEventListener("click", (event) => {
    let selectedPlayer = event.target;
    let selectedText = event.target.innerText;
    let listLength = document.getElementById('player-list').children.length;
    if (selectedText == "Select") {
        if (listLength < 5) {
            addPlayer(selectedPlayer)
        }
        else {
            alert("You Have already selected five players");
        }
    }
});
//*player cost Button
document.getElementById('calculate-player-cost').addEventListener('click', function () {
    let perPlayerCost = document.getElementById('player-input').value;
    let numberOfPlayer = document.getElementById('player-list').children.length;
    if (perPlayerCost == '') {
        alert("Enter the cost of a player");
    }
    else if (numberOfPlayer == 0) {
        alert("Insert your favorite player name");
    }
    else {
        let totalCostplayer = parseInt(perPlayerCost) * parseInt(numberOfPlayer);
        document.getElementById('dollar-sign-player').style.display = "block";
        document.getElementById("players-cost").innerText = totalCostplayer;
    }

})


//*total cost,manager & coach
document.getElementById('calculate-total-cost').addEventListener('click', function () {
    //*manager section
    const managerField = document.getElementById('manager-input');
    const managervalueString = managerField.value;
    const managerValue = parseInt(managervalueString);

    //*coach Section
    const coachField = document.getElementById('coach-input');
    const coachValueString = coachField.value;
    const coachValue = parseInt(coachValueString);

    //*player cost section
    const playercostString = document.getElementById("players-cost").innerText;
    const playerCost = parseInt(playercostString);

    const totalCostField = document.getElementById('total-cost');

    if (isNaN(coachValue) || isNaN(managerValue)) {
        alert("Please,fill up the empty input value");
    } else if (isNaN(playerCost)) {
        alert("Please,Calculate the cost for players");
    }

    const totalCost = playerCost + coachValue + managerValue;


    document.getElementById('dollar-sign-total').style.display = "block";
    totalCostField.innerText = totalCost;



})