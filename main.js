// function sum () {
//     console.log(23)
// }

// function getNumber(wartosc) {
//     console.log(wartosc)
// }

function getValue(num) {
    let inp = document.getElementsByClassName('inp')[0].value
    inp += num
    document.getElementsByClassName('inp')[0].value = inp
}

function getSum() {
    let inp = document.getElementsByClassName('inp')[0].value
    document.getElementsByClassName('inp')[0].value = eval(inp)
}
