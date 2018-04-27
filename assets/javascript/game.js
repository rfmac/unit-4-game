var target = Math.floor(Math.random()) * 100;
var crystal=[];
var images=[];
var wins = 0;
var losses = 0;

for (var i = 0; i < 4; i++)
{
    crystal[i] = Math.floor(Math.random()) * 10;
    var b = $('<buttons>');
    b.attr('data-let', crystal[i]);
    $('#buttons').append(b);
    //how do I attach an image and a value together. div with multiple attributes?
}

$('buttons').on('click', function()
{
    var total = $('<div>'.text($(this).data)'let'));

    $("#display").append(total);
    //need to add not append
    //total = total + append


    if(total == target)
    {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        target = Math.floor(Math.random()) * 100;
        for (var i = 0; i < 4; i++)
        {
            crystal[i] = Math.floor(Math.random()) * 10;
            var b = $('<button>');
            b.attr('data-let', crystal[i]);
            $('#buttons').append(b);
        }
    }

    if(total > target)
    {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        target = Math.floor(Math.random()) * 100;
        for (var i = 0; i < 4; i++)
        {
            crystal[i] = Math.floor(Math.random()) * 10;
            var b = $('<button>');
            b.attr('data-let', crystal[i]);
            $('#buttons').append(b);
        }

    }
});

