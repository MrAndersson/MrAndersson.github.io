"use strict";

/// Makes sure the DOM is ready before start to load functions
$(document).ready(function()
{
    var toggleButton = $("#toggleButton");
    toggleButton.on("click", function() 
    {
        var pi = $("#pi");

        if(toggleButton.text() === "Show PI!")
        {
            toggleButton.text("Hide PI!");
            pi.text(Math.PI);
        }
        else
        {
            toggleButton.text("Show PI!");
            pi.text("");
        }
    });

    var results = [];
    
    /// New cool object
    function person(ID, occupation, human)
    {
        this.id = ID;
        this.occupation = occupation;
        this.human = human;
    }
    
    var blorf1 = new person("66 666 66", "Demon", false);
    var blorf2 = new person("22 222 22", "Paladin", true);
    var blorf3 = new person("00 111 00", "Druid", false);
    
    results.push(blorf1); results.push(blorf2); results.push(blorf3);
    var resultList = $("#randomList");
    resultList.empty();
    
    $.each(results, function(i, item)
    {
        var textResult = $(`<div class='result'>
                            <div class='title'>ID: ${item.id} </div>
                            <div>Occupation: ${item.occupation} </div>
                            <div>Human: ${item.human} </div>
                            </div>`);

        textResult.hover(function()
        {
            $(this).css("background-color", "lightblue");
        }, 
        function()
        {
            $(this).css("background-color", "transparent");
        });

        $(textResult).css({"border-color": "#D3D3D3", "border-width":"1px", "border-style":"solid"});

        resultList.append(textResult);
    });

    var callbackButton = $("#callbackButton");
    callbackButton.on("click", function()
    {print($("#callbackText"), "Booga Booga")});
});

function print(HTMLPageID, text)
{
    $(HTMLPageID).text(`${text}, this is a callback function`);
}

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