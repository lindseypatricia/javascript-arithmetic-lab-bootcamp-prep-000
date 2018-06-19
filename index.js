function add(a, b) {
  return a + b
}
function subtract(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}
function divide(a, b) {
  return a / b
}

function inc(n) {
  var n = n++
  console.log(n)
}

function dec(n) {
  return n--
}
dec()

function makeInt(n) {
  var n = 5
  return parseInt(n, 10)
}