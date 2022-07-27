for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let btn = this.innerHTML;
        makesound(btn);
        buttonAnimation(btn);

    });
    document.addEventListener("keypress", function(event) {

        makesound(event.key);
        buttonAnimation(event.key);
    });

    function makesound(key) {
        switch (key) {
            case "w":
                let t1 = new Audio("sounds/tom-1.mp3")
                t1.play();
                break;
            case "a":
                let t2 = new Audio("sounds/tom-2.mp3")
                t2.play();
                break;
            case "s":
                let t3 = new Audio("sounds/tom-3.mp3")
                t3.play();
                break;
            case "d":
                let t4 = new Audio("sounds/tom-4.mp3")
                t4.play();
                break;
            case "j":
                let t5 = new Audio("sounds/snare.mp3")
                t5.play();
                break;
            case "k":
                let t6 = new Audio("sounds/crash.mp3")
                t6.play();
                break;
            case "l":
                let t7 = new Audio("sounds/kick-bass.mp3")
                t7.play();
                break;
            default:
                console.log(btn);




        }


    }

    function buttonAnimation(currentKey) {
        let act = document.querySelector("." + currentKey);
        act.classList.add("pressed");

        setTimeout(function() {
                act.classList.remove("pressed");
            }, 100


        );
    }

}