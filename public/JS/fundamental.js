/*
    FUNDAMENTALS CODE
    shift alt F titles prettier or something idk
*/ 
// Windows Alert
function initialize() 
{
window.alert("Hello World");

document.getElementById("printhere").innerHTML = "Hello World"


    let x = "20"
    let y = "25"
    document.getElementById("datatypes").innerHTML = par(x) + par(y);

    // booleans and conditionals
    x - 5;
    y = 9;
    if(x !=y){document.getElementById("boolean").innerHTML = "its true" + x + "!=" + y}

}
//Function
function dateTime(){
    document.getElementById("printhere").innerHTML = Date();
}