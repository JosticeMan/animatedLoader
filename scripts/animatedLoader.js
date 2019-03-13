/* -----------------------------------------------
/* Author : Justin Yau - justinyau.me
/* ----------------------------------------------- */

document.addEventListener("DOMContentLoaded", function(event) {
    var loader = document.getElementById("progress");
    var percent = document.getElementById("al-per");

    var incrementPercentage = function() {

        var newPercentage = parseInt(percent.innerHTML, 10) + 1;
        loader.style.strokeDashoffset = (315 - (((newPercentage/100) * 315)));
        percent.innerHTML = newPercentage;
        if(newPercentage >= 100) {
            clearInterval(timer);
            /*Insert function to execute to transition here */
        }
    }

    var timer = setInterval(incrementPercentage, 100);

});