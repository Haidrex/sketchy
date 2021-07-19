const container = document.getElementById("grid-container");
let color = "red";
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", function () {
            cell.style.backgroundColor = color;
        });
        container.appendChild(cell).className = "grid-item";
    };
};
makeRows(16, 16);
const clear = document.getElementById("clear-button");
const gridForm = document.forms['new-grid'];
clear.addEventListener("click", function (e) {
    let cells = document.getElementsByClassName("grid-item");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "white";
    };
});

gridForm.addEventListener("submit", function (e) {
    let cells = document.getElementsByClassName("grid-item");
    for (var i = cells.length - 1; i >= 0; i--) {
        cells[i].remove();
    }
    e.preventDefault();
    const value = gridForm.querySelector('input[type="number"]').value;
    makeRows(value, value);
});

const eraser = document.getElementById("eraser-button");
eraser.addEventListener("click", function (e) {
    color = "white";
});

function update(picker) {
    color = picker.toRGBString();
};
jscolor.trigger('input change');