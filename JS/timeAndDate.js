"use strict";

/*var toggleButton = $("#toggleButton");
toggleButton.on("click", togglePI() {});*/


function warnMe()
{
    alert("ZugZug Booga")
}

function genRandomColor()
{
    var rgb = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    return rgb;
}

function changeOverlayColor()
{
    document.getElementById('overlay').style.background = genRandomColor();
    //$("#overlay").style.background = genRandomColor();

    var t = setTimeout(changeOverlayColor, Math.round(Math.random() * 500));
}

function changeBackgroundColor()
{
    //document.body.style.background = this.genRandomColor();
    //$("#body").style.background = this.genRandomColor();

    var t = setTimeout(changeBackgroundColor, Math.round(Math.random() * 1000));
}

function randomNumber()
{
    var a = Math.random();
    //document.getElementById('randNum').innerHTML = a;
    $("#randNum").text(a);
    var t = setTimeout(randomNumber, Math.round(a * 1000));
}

function togglePI()
{
    console.log("Toggle Pi!");

    var piToggle = false;
    if(!piToggle)
    {
        $("#pi").text(Math.PI);
        //document.getElementById('pi').innerHTML = Math.PI;
    }
    else
    {
        $("#pi").text("");
        //document.getElementById('pi').innerHTML = Math.PI;
    }

}

function currentTime()
{
    var today = new Date();
    var h = checkTime(today.getHours());
    var m = checkTime(today.getMinutes());
    var s = checkTime(today.getSeconds());

    // Fetch an portion of the HTML script by ID
    //document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    var clock = $("#clock");
    clock.text(`${h}:${m}:${s}`);
    // The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
    var t = setTimeout(currentTime, 500);
};

function checkTime(i)
{
    if(i < 10)
    {
        i = `0${i}`
    }
    return i;
};