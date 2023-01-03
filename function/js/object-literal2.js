var hotel = {
    name:'park',
    rooms:120,
    booked:77,
    checkAvalability: function(){
        return this.rooms - this.booked
    }
}

var elName = document.getElementById('hotelName')
elName.textContent = hotel.name

var elRooms = document.getElementById('rooms')
elRooms.textContent = hotel.name


var hotel = new Object(
    hotel.name = 'Quay'
)


//creating many object 

function Hotel(name,rooms,booked){
    this.name = name
    this.rooms = rooms
    this.booked = booked

    this.checkAvalability = function(){
        return this.rooms - this.booked
    }
}

var quayHotel = new Hotel('Quay',40,25)
var parkHotel = new Hotel ('Park',120,77)