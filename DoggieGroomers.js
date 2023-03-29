/* Name : Tharani Gnanasegaram
Student number : 8822155 */

"use strict";

const $ = selector => document.querySelector(selector);


document.addEventListener("DOMContentLoaded", () => {


    const mainImage = $("#main_image");
    const imageLinks = $("#image_list").querySelectorAll("a");

    const imageCache = [];
    let image = null;

    for (let link of imageLinks) {
        image = new Image();
        image.src = link.href;
        image.alt - link.title;

        imageCache[imageCache.length] = image;
    }

    let imageCounter = 0;
    setInterval(() => {
        imageCounter = (imageCounter + 1) % imageCache.length;
        image = imageCache[imageCounter];

        mainImage.src = image.src;
        mainImage.alt = image.alt;
    }, 2000);
});

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
};


const h2s = document.querySelectorAll("h2");
for (let h2 of h2s) {
    h2.addEventListener("click", (evt) => {
        evt.currentTarget.nextElementSibling.classList.toggle("open");
    });
}


const SLIDE_OFFSET = 300;

jQuery(document).ready(function($) {
    
    const slider = $("#image_list_slider");
    
    $("#left_button").click(() => {
        const leftProperty = parseInt(slider.css("left"));

        let newLeftProperty = 0;
         if (leftProperty != 0) {
            newLeftProperty = (leftProperty + SLIDE_OFFSET);
        } 
        slider.animate(
            { left: newLeftProperty },
            1000
        );
    });

    
    $("#right_button").click(() => {

        const leftProperty = parseInt(slider.css("left"));
        let newLeftProperty = 0;
        console.log(leftProperty);
         if (leftProperty == 0) {
            newLeftProperty -= SLIDE_OFFSET;
        }
        else{
            return;
        }
        slider.animate(
            { left: newLeftProperty },
            1000
        );
    });
});