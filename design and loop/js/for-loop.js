var score  = [20,30,40]
var arrayLength = score.length
var roundNumber = 0

var msg = ''
var i

for (i=0; i<arrayLength; i++){
    roundNumber = (i + 1)

    msg += 'Round' + roundNumber + ':'
    msg += score[i] + '<br/>'
}

document.getElementById('answer').innerHTML =msg