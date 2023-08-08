
// Change box background color change
console.log(document.getElementsByClassName('boxes'));
function changeBoxValue() {
    let box = document.getElementsByTagName('input');

    for(i=0;i<box.length;i++) {
        if(box[i].type = "radio") {
            const allBoxes = document.getElementsByClassName('box');
            if(box[i].checked) {
                allBoxes[i].classList.add('selectedColor');
            } else {
                allBoxes[i].classList.remove('selectedColor');
            }
        }
    }
}


// DDK value change

document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const priceDisplay = document.getElementById('price-display');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                const selectedPrice = parseFloat(this.value);
                priceDisplay.textContent = `Total : DDK ${selectedPrice.toFixed(2)}`;
            }
        });
    });
});