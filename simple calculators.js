function add(a,b){
    var sum = a + b;
console.log(sum)
}


add(4,5);

function addMore() {
    var starting = 0;

    for(var i = 0; i<arguments.length; i++){
        starting += arguments[i]
    }
    console.log(starting)
}
addMore(1,2,3,4);
   

function multiply(a,b) {
    var product = a*b;

    console.log(product)
}
multiply(1,2)

function multiplyMore() {
    var multiply = 1;
    for(var j = 0; j < arguments.length; j++) {
        multiply *= arguments[j]
    } console.log(multiply)
} multiplyMore(1,2,3,4)