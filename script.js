var started = false;


function start() {
    document.getElementById("status").innerHTML = "Running...";
    if (Notification.permission !== 'granted') {
        document.getElementById("status").innerHTML = "Stopped";
        Notification.requestPermission();
        document.getElementById("warn").style.visibility = "visible";
        document.getElementById("warn").innerHTML = "Please allow sending notifications to notify you.";
        return;
    } else {
        document.getElementById("status").innerHTML = "Running...";
        document.getElementById("warn").style.visibility = "hidden";
    }
    if (started == false) {
        started = true;
        document.getElementById("start").style = ("color: #5985e6");
        document.getElementById("info").style.visibility = "visible";
        document.getElementById("info").innerHTML = "Every 20 minutes: microbreak (10 seconds) / Every 60 minutes: break (5 minutes)";

        setTimeout(() => {

            document.getElementById("info").style.visibility = "hidden";
            document.getElementById("info").innerHTML = "";
        }, 15000);
        var clock = 0;
        var bclock = 0;

        setInterval(() => {
            clock = clock + 1;
            console.log(clock);

            if (clock == 1200) {
                clock = 0;
                var notification = new Notification("[Refreshy] Take a microbreak!", {
                    body: "Click to accept the microbreak.",
                });
                notification.onclick = function () {
                    microbreak();
                };
            }
            bclock = bclock + 1;
            console.log(bclock);

            if (bclock == 3600) {
                bclock = 0;
                var notification = new Notification("[Refreshy] Take a break!", {
                    body: "Click to accept the break.",
                });
                notification.onclick = function () {
                    bbreak();
                };
            }

        }, 1000);
    } else {
        document.getElementById("warn").style.visibility = "visible";
        document.getElementById("warn").innerHTML = "Sorry, but you can't start timer when it's running.";

        setTimeout(() => {

            document.getElementById("warn").style.visibility = "hidden";
            document.getElementById("warn").innerHTML = "";
        }, 5000);
    }


}
function stop() {
    location.reload();
}


function microbreak() {
    document.getElementById("status").innerHTML = "Take a microbreak!";
    var interval = setInterval(interval, 1000);
    var remeaning = 10;
    function interval() {
        remeaning = remeaning - 1;
        document.getElementById("timer").style.visibility = "visible";
        document.getElementById("timer").innerHTML = "Remeaning: " + remeaning + " sec";
        if (remeaning == 0) {
            clearInterval(interval);
            document.getElementById("timer").style.visibility = "hidden";
            document.getElementById("status").innerHTML = "Running...";
        }
    }
}
function bbreak() {
    document.getElementById("status").innerHTML = "Take a microbreak!";
    var interval = setInterval(interval, 1000);
    var remeaning = 300;
    function interval() {
        remeaning = remeaning - 1;
        document.getElementById("timer").style.visibility = "visible";
        document.getElementById("timer").innerHTML = "Remeaning: " + remeaning + " sec";
        if (remeaning == 0) {
            clearInterval(interval);
            document.getElementById("timer").style.visibility = "hidden";
            document.getElementById("status").innerHTML = "Running...";
        }
    }
}