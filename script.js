let body = document.getElementsByTagName("body")[0];
let sliderRed = document.getElementById("slider-red");
let sliderGreen = document.getElementById("slider-green");
let sliderBlue = document.getElementById("slider-blue");
let sliderRedVal = document.getElementById("slider-red-value");
let sliderGreenVal = document.getElementById("slider-green-value");
let sliderBlueVal = document.getElementById("slider-blue-value");
let hexValue = document.getElementById("hex-value")

const toZeroPaddedHex = (string) => {
    let hex = Number(string).toString(16);
    return ("0" + hex).substr(-2)
}
const changeColor = () => {
    let redHex = toZeroPaddedHex(sliderRed.value);
    let greenHex = toZeroPaddedHex(sliderGreen.value);
    let blueHex = toZeroPaddedHex(sliderBlue.value);

    let hexVal = ('#' + redHex + greenHex + blueHex).toUpperCase();
    body.style.backgroundColor = hexVal;
    hexValue.textContent = hexVal;

    sliderRedVal.textContent = sliderRed.value;
    sliderGreenVal.textContent = sliderGreen.value;
    sliderBlueVal.textContent = sliderBlue.value;
}
changeColor();

sliderRed.addEventListener("input", changeColor);
sliderGreen.addEventListener("input", changeColor);
sliderBlue.addEventListener("input", changeColor);

// slider.addEventListener("change", () => {
//     let hexValue = `#${Number(slider.value).toString(16)}`;
//     body.style.backgroundColor = hexValue;
//     sliderValue.textContent = hexValue.toUpperCase();
// })


