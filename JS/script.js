"use strict";

/// Makes sure the DOM is ready before start to load functions, jQuery
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

(function()
{
    var app = angular.module('myApp', []);

    /////////////////
    //  Functions  //
    /////////////////

    function MainCtrl($scope)
    {
        $scope.helloworld = "Hello World!";
    }

    function RandomNumberCtrl()
    {
        var a = Math.random();
        return a;
    }

    function TimeCtrl()
    {
        var today = new Date();
        var h = checkTime(today.getHours());
        var m = checkTime(today.getMinutes());
        var s = checkTime(today.getSeconds());
    
        // Fetch an portion of the HTML script by ID
        return (`${h}:${m}:${s}`);
    };

    function checkTime(i)
    {
        if(i < 10)
        {
            i = `0${i}`
        }
        return i;
    };

    function RandomColorCtrl()
    {
        var rgb = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        return rgb;
    }
    
    function changeOverlayColor()
    {
        document.getElementById('overlay').style.background = RandomColorCtrl();
    }

    function RandomNumerForTime(multiplyer = 1)
    {
       return (Math.round(Math.random() * 500));
    };

    /////////////////
    // Controllers //
    /////////////////

    //app.controller(Define func, Which func to use);
    app.controller('MainCtrl', ["$scope", MainCtrl]);
    app.controller('RandomNumberCtrl', function($scope, $interval)
    {
        $scope.randNum = RandomNumberCtrl();
        $interval(function(){$scope.randNum = RandomNumberCtrl()}, RandomNumerForTime());
    });
    app.controller('TimeCtrl', function($scope, $interval)
    {
        $scope.clock = TimeCtrl()
        $interval(function(){$scope.clock = TimeCtrl()}, 500);
    });
    app.controller('RandomColorCtrl', function($scope, $interval)
    {
        changeOverlayColor();
        $interval(function(){changeOverlayColor()}, RandomNumerForTime(500));
    });
}());