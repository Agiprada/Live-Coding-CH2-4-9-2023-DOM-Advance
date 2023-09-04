
// document.querySelectorAll(".drum")[0].addEventListener("click",handleClick);

// function handleClick() {
//     alert('dont touch me')
// }
let drum = document.querySelectorAll(".drum").length;
for (let i = 0; i < drum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        //this.style.color = "white"
        let buttonInnerHTML = this.innerHTML;
        makeAudio(buttonInnerHTML)

        animatedButton(buttonInnerHTML)
        
    });
    
}
function makeAudio(key) {
    switch (key) {
            case "w" :
                var audio = new Audio('sounds/tom-1.mp3')
                audio.play();
                break;
            case "a" :
                var audio = new Audio('sounds/tom-2.mp3')
                audio.play();
                break;
            case "s" :
                var audio = new Audio('sounds/tom-3.mp3')
                audio.play();
                break;
            case "d" :
                var audio = new Audio('sounds/tom-4.mp3')
                audio.play();
                break;
            case "j" :
                var audio = new Audio('sounds/snare.mp3')
                audio.play();
                break;
            case "k" :
                var audio = new Audio('sounds/crash.mp3')
                audio.play();
                break;
            case "l" :
                var audio = new Audio('sounds/kick-bass.mp3')
                audio.play();
                break;
            default: console.log("not found sound")
                break;
        }
}
addEventListener("keypress", function(event) {
    console.log(event.key)
    makeAudio(event.key)
    animatedButton(event.key)
});

function animatedButton(currentKey) {
    document.querySelector(`.${currentKey}`).classList.add("pressed");

    setTimeout(() => {
        document.querySelector(`.${currentKey}`).classList.remove("pressed");
    }, 200);
}

