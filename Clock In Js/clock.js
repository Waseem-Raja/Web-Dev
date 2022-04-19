function showTime() {
    var date = new Date(); //date object
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    /*
    Firstly, the getHours(), getMinutes()
     and getSeconds() methods return values between 0 to 23, 59, 59 respectively. 
     The key point here is that single digit values are returned as # (eg: 7), however, in our clock, 
     these values need to be displayed as ## (eg: 07).
     And to achieve this we use ternary operators. This operator returns a value if the 
     condition is true and another value if it is false. 
    */
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("screen").value = time;
    // document.getElementById("screen").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();