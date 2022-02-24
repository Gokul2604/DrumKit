var noOfButtons = document.querySelectorAll(".drum").length;

// plays audio for clicks
for(var i = 0; i < noOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonKey = this.innerHTML;

        playsSound(buttonKey);

        buttonAnimation(buttonKey);
    });
}

// plays audio for keyboard press
document.addEventListener("keydown", function (event) {
    var keyPressed = event.key;

    playsSound(keyPressed);

    buttonAnimation(keyPressed);
});

// plays the audio acc to the btn-click or key-press
function playsSound(key) {
    switch(key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "j":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log(this);
            break;
    }
} 

function buttonAnimation(key) {
    var activeBtn = document.querySelector("." + key);

    activeBtn.classList.add("pressed");

    setTimeout(function () {
        activeBtn.classList.remove("pressed");
    }, 100); // delay of 0.1s
}