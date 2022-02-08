const shakeEight = () => {

    var option1 = "It is certain"
    var option2 = "Without a doubt"
    var option3 = "Outlook good"
    var option4 = "Reply hazy, try again"
    var option5 = "Ask again later"
    var option6 = "Don't count on it"
    var option7 = "My sources say no"
    var option8 = "It's not a problem"


    var magicEight = Math.ceil(Math.random() * 8)

    if (magicEight === 1) {
        document.getElementById("result").innerHTML = option1
    } else if (magicEight === 2) {
        document.getElementById("result").innerHTML = option2
    } else if (magicEight === 3) {
        document.getElementById("result").innerHTML = option3
    } else if (magicEight === 4) {
        document.getElementById("result").innerHTML = option4
    } else if (magicEight === 5) {
        document.getElementById("result").innerHTML = option5
    } else if (magicEight === 6) {
        document.getElementById("result").innerHTML = option6
    } else if (magicEight === 7) {
        document.getElementById("result").innerHTML = option7
    } else if (magicEight === 8) {
        document.getElementById("result").innerHTML = option8
    }

}

const shakeBall = () => {
    document.getElementById("eightBall").style.animation = "shakeBall 2s 2";
}
