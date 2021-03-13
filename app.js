//const sum = (a,b) => {
    //return a + b
//}

// just a console log for ourselves.
//console.log(7,3)

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
//module.exports = { sum };


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
function fromDollarToYen(valorDolar){
let dolar=valorDolar*106.56;
return dolar
}
module.exports = { fromDollarToYen };

function fromEuroToDollar(valorEuro){
    let euro=valorEuro*128.58;
return euro
}

function fromYanToPound(ValorYen){
    let yen=valorYen*0.0067;
return yen
}

