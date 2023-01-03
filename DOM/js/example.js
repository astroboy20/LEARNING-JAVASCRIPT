var list = document.getElementsByTagName('ul')[0] //get ul
var newEl = document.createElement('li') //create element
var lastEl = document.createTextNode('I am new') //
newEl.appendChild(lastEl)
list.appendChild(newEl)


var newEl2 = document.createElement('li')
var firstEl = document.createTextNode('i dey bottom')
newEl2.appendChild(firstEl)
list.insertBefore(newEl2, list.firstChild)
list.style.fontSize

