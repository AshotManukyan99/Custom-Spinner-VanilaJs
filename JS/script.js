const spinner = document.querySelector('#Gira')


function randomNumber(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}



function startSlot() {

    let spinnerCol1 = 0
    let spinnerCol2 = 0
    let spinnerCol3 = 0

    let numeberSlot1 = randomNumber(1, 10)
    let numeberSlot2 = randomNumber(1, 10)
    let numeberSlot3 = randomNumber(1, 10)

    let slot1 = setInterval(spin1, 50);
    let slot2 = setInterval(spin2, 50);
    let slot3 = setInterval(spin3, 50);


    function spin1() {
        spinnerCol1++;
        // Stop Slot 
        if (spinnerCol1 >= numeberSlot1) {
            clearInterval(slot1);
            return null;
        }
        slotTile = document.getElementById("slot1");
        if (slotTile.className == "a7") {
            slotTile.className = "a0";
        }
        slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
    }

    function spin2() {
        spinnerCol2++;
        // Stop Slot 
        if (spinnerCol2 >= numeberSlot2) {
            clearInterval(slot2);
            return null;
        }
        slotTile = document.getElementById("slot2");
        if (slotTile.className == "a7") {
            slotTile.className = "a0";
        }
        slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
    }
    function spin3() {
        spinnerCol3++;
        // Stop Slot 
        if (spinnerCol3 >= numeberSlot3) {
            clearInterval(slot3);
            return null;
        }
        slotTile = document.getElementById("slot3");
        if (slotTile.className == "a7") {
            slotTile.className = "a0";
        }
        slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
    }


}


spinner.addEventListener('click', () => startSlot())