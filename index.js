buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];
var level = 0;
var c = 0;
var l = 0;


$( "body" ).on( "keypress", function start() {
    if(level === 0){
        nextSequence();
        c++;
    }
} );


function nextSequence()
{
    var randomNumber = Math.floor(Math.random()* 4);
    // console.log(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern);
    level++;
    $("#level-title").text("Level " + level);
    $("#" + randomChosenColour).fadeOut("fast");
    sound(randomChosenColour);
    $("#" + randomChosenColour).fadeIn("fast");
    userClickedPattern = [];
    l = 0;
    
}


$(".btn").on("click", function clicked() {
    if(c === 1){
    var userChosenColour = $(this). attr("id");
    // console.log( userChosenColour);
    userClickedPattern.push(userChosenColour);
    sound(userChosenColour);
    $("#" + userChosenColour).addClass("pressed");
    setTimeout(function unpress(){
        $("#" + userChosenColour).removeClass("pressed");
    }, 100)
    l++;
    checkAnswer();
    }
} );


function checkAnswer()
{
    // var l = userClickedPattern.length;
    if(gamePattern[l - 1] === userClickedPattern[l - 1])
        {
            console.log("success");
            if(gamePattern.length === userClickedPattern.length)
            {
                setTimeout(function delay(){
                    nextSequence();
                }, 500)
            }
            
        }
    else
    {
        $("body").addClass("game-over");
        $("#level-title").text("Game Over Press Any Key To Restart");
        c = 0;
        level = 0;
        gamePattern = [];
        userClickedPattern = [];
        setTimeout(function over(){
            $("body").removeClass("game-over");
        }, 200)
        // console.log("wrong");
    }
}


function sound(h){

    switch (h) 
    {
        case "red":
            var red = new Audio("./sounds/red.mp3");
            red.play();
            break;
        case "blue":
            var blue = new Audio("./sounds/blue.mp3");
            blue.play();
            break;
        case "green":
            var green = new Audio("./sounds/green.mp3");
            green.play();
            break;
        case "yellow":
            var yellow = new Audio("./sounds/yellow.mp3");
            yellow.play();
            break;
        default:
            break;
    }
}