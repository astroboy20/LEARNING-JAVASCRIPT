//getting a single value out of a funtion

function findArea(width,height){
    var area = width * height
    return area
}
var wallOne = findArea(3,5)
var wallTwo = findArea(3,5)


//getting multiple values out of a function

function getSize(width,height,depth){
    var area = width * height
    var volume = width * height * depth
    var sizes = [area,volume]
    return sizes
}

var areaOne = getSize(3,2,3)[0] // in the array area is the first this gives 3*2
var volumeOne = getSize(3,4,4)[1] // in the array volume is the second which gives 3*4*4


///function declaration

function area(width, height){
    return width * height
}

var getArea = area(2,4)

//function expression

var area = function(width,height){
    return width * height
}

var size = area(2,3)