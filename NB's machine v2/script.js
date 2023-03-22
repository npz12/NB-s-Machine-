
function converter() {
    
    var decimal = Number (demo1.value);

let octal = decimal.toString(8);

let hexadecimal = decimal.toString(16);

let binaria = decimal.toString(2);

console.log (decimal);
console.log (octal);
console.log (hexadecimal);
console.log (binaria);

document.getElementById("demo1").innerHTML = `Valor em decimal ${decimal}`;
document.getElementById("demo2").innerHTML = `Valor em octal: ${octal}`;
document.getElementById("demo3").innerHTML = `Valor em hexedecimal: ${hexadecimal}`;
document.getElementById("demo4").innerHTML = `Valor em binario: ${binaria}`;


}

function aparecer_bin() {
    demo4.style.display = 'block'
}

function aparecer_hexa() {
    demo3.style.display = 'block'
}

function aparecer_octal() {
    demo2.style.display = 'block'
}
document.bgColor = "#00ffff";
