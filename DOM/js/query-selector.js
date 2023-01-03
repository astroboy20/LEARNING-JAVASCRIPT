var el = document.querySelector('li.hot')
el.className ='cool'

var els = document.querySelectorAll('li.hot')
els[1].className='cool'

//node-list

var hotItems = document.querySelectorAll('li.hot')


if (hotItems.length > 0 ){
    for(var i =0; i<hotItems.length; i++){
        hotItems[i].className = 'cool'
    }
}