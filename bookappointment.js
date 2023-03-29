/* Name : Tharani Gnanasegaram
Student number : 8822155 */

"use strict";

const $ = function (id) {
    return document.getElementById(id);
};

var displayCurrentTime = function () {



    var ampm;
    var currentdate = new Date();
    var hour = currentdate.getHours();
    var minutes = currentdate.getMinutes();
    var seconds = currentdate.getSeconds();


    if (hour > 12) {
        hour = hour - 12;
        ampm = 'PM';
    }
    else if (hour == 24) {
        hour = 0;
        ampm = 'AM';
    }
    else {
        ampm = 'AM';
    }

    $("hours").firstChild.nodeValue = padSingleDigit(hour);
    $("minutes").firstChild.nodeValue = padSingleDigit(minutes);
    $("seconds").firstChild.nodeValue = padSingleDigit(seconds);
    $("ampm").firstChild.nodeValue = ampm;

};

var padSingleDigit = function (num) {
    if (num < 10) { return "0" + num; }
    else { return num; }
};

window.onload = function () {
    displayCurrentTime();
    setInterval(function () {
        displayCurrentTime()
    }, 1000);

    $("book_appoint").onclick = appointCreate;
    $("hide").onclick = displayAppointments;
    $("clear_appoint").onclick = clearAppointments;
    

};


var type = [];
var names = [];
var breed = [];
var age = [];
var locations = [];
var dateappoint = [];
var email = [];
var phone = [];


function displayAppointments() {

    if($("hide").value == "Show Appointments"){
        var bookingTable = "<tr> <td colspan='8'> <h2> My Appointments </h2> </td> </tr> <tr> <td> <b> Grooming Type </b> </td> <td> <b> Name </b> </td> <td> <b> Breed </b> </td> <td> <b> Age </b> </td> <td> <b> Location </b> </td> <td> <b> Date </b> </td> <td> <b> Email </b> </td> <td> <b> Phone </b> </td> </tr> ";
        for (var x = 0; x < names.length; x++) {

            bookingTable = bookingTable + "<tr> <td>" + type[x] + "</td> <td>" + names[x] + "</td> <td>" + breed[x] + "</td> <td>" + age[x] + "</td> <td>" + locations[x] + "</td> <td>" + dateappoint[x] + "</td> <td>" + email[x] + "</td> <td>" + phone[x] + "</td> </tr>";
        }
        $('booking_table').innerHTML = bookingTable;
        $("hide").value = "Hide Appointments"
    }else{
        $('booking_table').innerHTML = "";
        $("hide").value = "Show Appointments"
    }
}


function clearAppointments() {

    location.reload();

}

function appointCreate() {

    if( $("name").value != "" && $("breed").value != "" && $("age").value != "" && $("location").value != "" && $("bookdate").value != "" && $("email_address").value != "" && $("phone").value != ""){
        
        var i;
        var newtype;
        var newnames = $("name").value;
        var newbreed = $("breed").value;
        var newage = $("age").value;
        var newlocations = $("location").value;
        var newdateappoint = $("bookdate").value;
        var newemail = $("email_address").value;
        var newphone = $("phone").value;
    
        var radioval = document.getElementsByTagName('input');
                  
        for(i = 0; i < radioval.length; i++) {
              
            if(radioval[i].type =="radio") {
              
                if(radioval[i].checked){
                    newtype = radioval[i].value;
                }
            }
        }
    
        type[type.length] = newtype;
        names[names.length] = newnames;
        breed[breed.length] = newbreed;
        age[age.length] = newage;
        locations[locations.length] = newlocations;
        dateappoint[dateappoint.length] = newdateappoint;
        email[email.length] = newemail;
        phone[phone.length] = newphone;
    
    
        alert("Appointment created successfully");
        displayAppointments();
    }

}

jQuery(document).ready(function ($) {

    $("#book_appoint").click((evt) => {
        $(".control").each((n, control) => {
            $(control).next().text("");
        });

        var isValid = true;
        $(".control").each((n, control) => {
            var val = $(control).val().trim();
            if (val == "") {
                $(control).next().text("This field can't be empty");
                isValid = false;
            } else {
                $(control).val(val);
            }
        });

        if (!isValid) {
            evt.preventDefault();
        }
    });
});

