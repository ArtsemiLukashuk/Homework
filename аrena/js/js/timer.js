var countDownDate = new Date('2020-11-03T18:30')
var intervalID = setInterval(function() {
    var currentDate = new Date();
    var difference = countDownDate.getTime() - currentDate.getTime();
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / (1000));

    if (hours > 0) {
        hours--;
        if (hours < 10) {
            hours = '0' + hours;
        }
    } else {
        end = true;
    }

    if (minutes > 0) {
        minutes--;
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
    } else {
        end = true;
    }

    if (seconds > 0) {
        seconds--;
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
    } else {
        seconds = 60;
    }

    document.getElementById('timer').innerHTML = hours + ":" + minutes + ":" + seconds + "";
    if (difference < 0) {
        clearInterval(intervalID);
        document.getElementById("timer").innerHTML = "Live!";
    }
}, 1000)