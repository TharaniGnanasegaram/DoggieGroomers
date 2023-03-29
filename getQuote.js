/* Name : Tharani Gnanasegaram
Student number : 8822155 */

"use strict";


const $ = function (id) {
    return document.getElementById(id);
};

var displayCurrentTime = function () {

    var $ = function (id) {
        return document.getElementById(id);
    };

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

    $("get_quote").onclick = getQuote;
};


function getQuote() {

    if($("age").value != ""){
        var i;
        var newtype;
        var newBreed = $("breeds").value;
        var newAge = parseInt($("age").value);
        var newRate;
        var fulltax = parseFloat(0.085);
    
        var radioval = document.getElementsByTagName('input');
    
        for (i = 0; i < radioval.length; i++) {
    
            if (radioval[i].type == "radio") {
    
                if (radioval[i].checked) {
                    newtype = radioval[i].value;
                }
            }
        }
        
    
        if (newtype == "Basic") {
    
            switch (newBreed) {
                case "Labrador Retriever":
                    newRate = 150 + (newAge * 50);
                    break;
    
                case "French Bulldog":
                    newRate = 170 + (newAge * 70);
                    break;
    
                case "German Shepherd":
                    newRate = 190 + (newAge * 80);
                    break;
    
                case "Golden Retriever":
                    newRate = 200 + (newAge * 90);
                    break;
    
                case "Rottweiler":
                    newRate = 210 + (newAge * 100);
                    break;
            }
            $("rate").value = "$" + newRate;
            $("total").value = newRate + (newRate * 0.075);
            $("tax").value = "7.5%";
    
        }
        else if (newtype == "Full") {
    
            switch (newBreed) {
                case "Labrador Retriever":
                    newRate = 200 + (newAge * 50);
                    break;
    
                case "French Bulldog":
                    newRate = 220 + (newAge * 60);
                    break;
    
                case "German Shepherd":
                    newRate = 250 + (newAge * 80);
                    break;
    
                case "Golden Retriever":
                    newRate = 280 + (newAge * 100);
                    break;
    
                case "Rottweiler":
                    newRate = 300 + (newAge * 110);
                    break;
    
            }
    
            $("rate").value = "$" + newRate;
            $("total").value = newRate + (newRate * 0.085);
            $("tax").value = "8.5%";
        }
    }


}


jQuery(document).ready(function ($) {

    $("#get_quote").click((evt) => {
        $(".control").each((n, control) => {
            $(control).next().text("");
        });

        var isValid = true;
        $(".control").each((n, control) => {
            var val = $(control).val().trim();
            if (val == "") {
                $(control).next().text("Give the Age of your pet.");
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