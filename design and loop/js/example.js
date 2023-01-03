var i = 1
var operator1 = '+'
var msg=''

if (operator1 == '+'){
    while(i<11){
        msg += i + ' + 3 =' + (i + 3 )+ '<br/>'
        i++
    }
}else{
    while(i<11){
        msg += i + ' * 3 =' + (i * 3) + '<br/>'
        i++
    }
}

var el = document.getElementById('blackboard')
el.innerHTML = msg