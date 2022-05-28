let showDisplay = document.querySelector(".display"); //Get the number displayed

let number = document.querySelectorAll(".show-display"); //Get and show numbers that entered

number.forEach(item => {
    item.addEventListener("click", show)
});
function show (event) {
    const num = event.target.innerText;
    if (showDisplay.innerText == 0){
        return showDisplay.innerText = num;
    } else {
        return showDisplay.innerText += num;
    }
}

document.querySelector(".equal-display").addEventListener("click", calc);//Perform calculations and display it
function calc() {
    let result = showDisplay.innerText;
    showDisplay.innerText = eval(result);
}

document.querySelector(".delete-all").addEventListener("click", deleteAll);//Deleting all numbers on screen
function deleteAll () {
    showDisplay.innerText = 0;
};

document.querySelector(".delete").addEventListener("click", clear);//Deleting numbers one by one
function clear () {
    let text = showDisplay.innerText;
    if (text.length === 1)
        showDisplay.innerText = 0;
    else 
        showDisplay.innerText = text.substring(0, text.length - 1);
}