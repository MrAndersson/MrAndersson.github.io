function warnMe()
{
    alert("ZugZug Booga")
}

function genRandomColor()
{
    return (`rgb( ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`);
}

function changeOverlayColor()
{
    document.getElementById('overlay').style.background = this.genRandomColor();

    var t = setTimeout(changeOverlayColor, Math.round(Math.random() * 500));
}

function changeBackgroundColor()
{
    //document.body.style.background = this.genRandomColor();

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
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
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