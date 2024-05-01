let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

let bits = [];

function numberInput() {
    if (num1.value <= 255) { // number must be equal or lower than the total sum of each number in 8 bits
        let tempNum1 = num1.value;
        let starter = 128;
        for (let i = 0; i < 8; i++) {
            if (tempNum1 - starter >= 0) { // bit number can be subtracted from input
                tempNum1 -= starter;
                bits[i] = 1 // save in array
            } else { // bit number cannot be subtracted from input
                bits[i] = 0; // save in array
            }
            starter /= 2; // go to next bit
        }
        let strAns = "";
        for (let e = 0; e < 8; e++) {
            strAns += bits[e].toString();
        }
        num2.textContent = strAns;
    }
}