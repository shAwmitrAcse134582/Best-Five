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


//*manager & coach
document.getElementById('calculate-total-cost').addEventListener('click', function () {
    //*manager section
    const managerField = document.getElementById('manager-input');
    const managervalueString = managerField.value;
    const managerValue = parseInt(managervalueString);

    //*coach Section
    const coachField = document.getElementById('coach-input');
    const coachValueString = coachField.value;
    const coachValue = parseInt(coachValueString);
    // console.log(coachValue);
})