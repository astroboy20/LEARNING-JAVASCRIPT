/*This script displays a greeting to the user based upon the current time.
it is an example from JavaScript & jQuery book
 */

var today = new Date() // create a new date object
var hourNow = today.getHours() //find the current hour
var gretting



//display the appropriate greeting based on the current time
if (hourNow>18){
    greeting = 'Goog evening!'
} else if (hourNow >12){
    greeting ='Good afternoon!'
} else if (hourNow >0){
    greeting ='Good morning!'
} else{
    greeting ='Welcome'
}

document.write('<h3>' + greeting + '</h3>')