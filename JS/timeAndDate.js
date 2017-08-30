function warnMe()
{
    alert("ZugZug Booga")
}

function changeOverlayColor()
{      
    var color = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", "+ Math.floor(Math.random() * 256) + ")";
    document.getElementById('overlay').style.background = color;

    var t = setTimeout(changeOverlayColor, Math.round(Math.random() * 500));
}

function changeBackgroundColor()
{      
    var color = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", "+ Math.floor(Math.random() * 256) + ")";
    //document.body.style.background = color;

    var t = setTimeout(changeBackgroundColor, Math.round(Math.random() * 1000));
}

function randomNumber()
{
    var a = Math.random();
    document.getElementById('randNum').innerHTML = a;
    var t = setTimeout(randomNumber, Math.round(a * 1000));
}

function rotateImage()
{
    document.getElementById('myImg').innerHTML;
};

function showPi()
{
    document.getElementById('pi').innerHTML = Math.PI;
}

function currentTime()
{
    var today = new Date();
    h = checkTime(today.getHours());
    m = checkTime(today.getMinutes());
    s = checkTime(today.getSeconds());

    // Fetch an portion of the HTML script by ID
    document.getElementById('TxT').innerHTML = h + ":" + m + ":" + s;
    // The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
    var t = setTimeout(currentTime, 500);
};

function checkTime(i)
{
    if(i < 10)
    {
        i = "0" + i;
    }
    return i;
};