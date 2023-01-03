//object uses varibale and fuction to describe something
//in object variable is used as properties, it tell us about the object
// in object fuction is describe a method , it performs certain task



var hotel ={
    name:'Quay',
    rooms:40,
    booked:25,

    checkAvalability: function(){
        return this.room - this.booked
    }
}

var hotelName =  hotel.name
var roomFree = hotel.checkAvalability