var score1 =8
var score2 =8

var pass1 = 6
var pass2 = 6


var passBoth = (score1 >=score2) && (score1>=pass2)

var msg = 'Both rounds passed: ' + passBoth

var el = document.getElementById('answer')
el.textContent = msg


//logical or and not


var score1 =8
var score2 = 8
var pass1 = 6
var pas2 =6

var minPass = (score1>=pass1) || (score2>=pas2)

var msg ='Result required: ' + !minPass

var el = document.getElementById('answer')
el.textContent = msg