var score = 75
var msg

function Congratulate(){
    msg +='Congratulations'
}

if (score >= 50){
    Congratulate()
    msg += 'procedd to the next round'
}

var el = document.getElementById('answer')
el.textContent = msg