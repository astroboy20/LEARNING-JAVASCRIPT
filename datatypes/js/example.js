var firstName = 'Howdy '
var lastName = 'Molly'
var instruction = 'please check your order:'
var greeting = firstName + lastName + ',' + instruction

var customSign = 'Montague House'
var total = customSign.length
var subTotal = total*5
var shipping = 7
var grandTotal = subTotal + shipping




var greetEl = document.getElementById('greeting')
greetEl.textContent = greeting

var elSign = document.getElementById('userSign')
elSign.textContent = customSign

var elTotal = document.getElementById('titles')
elTotal.textContent = total

var elSubTotal = document.getElementById('subTotal')
elSubTotal.textContent = '$' + subTotal

var elShipping = document.getElementById('shipping')
elShipping.textContent = '$' + shipping

var elGrandTotal = document.getElementById('grandTotal')
elGrandTotal.textContent = '$' + grandTotal
