
//var speed = "slow"
topColor = "red"
setInterval(getTheTime, 10);


function getTheTime(){
    //var speed = "slow";
    var time = new Date();
    var timeStr = time.toString();
    var timeStr2 = timeStr.split(' ');
    var timeStr1 = timeStr.split(' ')[4];
    //"18:39:14"
    //var TimeZoneStr = timeStr.split(' ')[6]+timeStr.split(' ')[7] + timeStr.split(' ')[8]; 
    var hrsMinsSecs = timeStr.split(' ')[4].split(':');
    // ["18", "39", "14"]
 
    // this is an extra feature I added to make the background color brighter.
    // I multipiled the hour by 4 and the mins and secs by 1.6; 
    bigHr = parseInt(time.getHours() * 4.16);

    document.querySelectorAll('.rgb')[0].style.width = bigHr+"%";

    bigMins = parseInt(time.getMinutes() * 1.68);
    document.querySelectorAll('.rgb')[1].style.width = bigMins+"%";
    if (bigMins<10){
        bigMins = "0" + bigMins;
    } 

    bigSecs = parseInt(time.getSeconds() * 1.68);
    document.querySelectorAll('.rgb')[2].style.width = bigSecs+"%";
    if (bigSecs<10){
        bigSecs = "0" + bigSecs;
    } 
    
    if (topColor == "green")  concatHex = "#"+bigSecs+bigHr+bigMins;
    else if (topColor == "blue") concatHex = "#"+bigMins+bigSecs+bigHr;
    else var concatHex = "#"+bigHr+bigMins+bigSecs;
    

    // change the body's background color:
    document.querySelector('body').style.backgroundColor = concatHex;

    // put the time and greeting on the DOM:
    var xm = "AM";
    document.querySelector("#greet").textContent = "Good Morning!";
    if (time.getHours()>12){
        xm = "PM";
        document.querySelector("#hrs").textContent = time.getHours() - 12;
        document.querySelector("#greet").textContent = "Good Afternoon!";
        if (time.getHours()>17){
            document.querySelector("#greet").textContent = "Good Evening!";
        }
    }else{
        document.querySelector("#hrs").textContent = time.getHours();
    }

    document.querySelector("#mins").textContent = hrsMinsSecs[1];
    document.querySelector("#secs").textContent = hrsMinsSecs[2];
    //document.querySelector("#ms").textContent = time.getMilliseconds();
    //I had it displaying milliseconds, but that wasn't very useful & kind of annoying
    document.querySelector("#xm").textContent = xm;
    document.querySelector("#hex-color").textContent = concatHex;

    document.querySelectorAll(".rgb")[0].textContent = bigHr;
    document.querySelectorAll(".rgb")[1].textContent = bigMins;
    document.querySelectorAll(".rgb")[2].textContent = bigSecs;

} // end getTheTime()

document.querySelector("#switchRed").addEventListener("click", function(){
    location.reload();
})

document.querySelector("#switch").addEventListener("click", function(){
    document.querySelector("#hrs").style.color = "green";
    document.querySelector("#mins").style.color = "blue";
    document.querySelector("#secs").style.color = "red";
    document.querySelectorAll(".rgb")[0].classList.remove("red");
    document.querySelectorAll(".rgb")[0].classList.remove("blue");
    document.querySelectorAll(".rgb")[0].classList.add("green");
    document.querySelectorAll(".rgb")[1].classList.remove("green")
    document.querySelectorAll(".rgb")[1].classList.remove("red");
    document.querySelectorAll(".rgb")[1].classList.add("blue");
    document.querySelectorAll(".rgb")[2].classList.remove("blue")
    document.querySelectorAll(".rgb")[2].classList.remove("green");
    document.querySelectorAll(".rgb")[2].classList.add("red");
    topColor = "green";
    
    getTheTime();
})

document.querySelector("#switchBlue").addEventListener("click", function(){
    document.querySelector("#hrs").style.color = "blue";
    document.querySelector("#mins").style.color = "red";
    document.querySelector("#secs").style.color = "green";
    document.querySelectorAll(".rgb")[0].classList.remove("red");
    document.querySelectorAll(".rgb")[0].classList.remove("green");
    document.querySelectorAll(".rgb")[0].classList.add("blue");
    document.querySelectorAll(".rgb")[1].classList.remove("green")
    document.querySelectorAll(".rgb")[1].classList.remove("blue");
    document.querySelectorAll(".rgb")[1].classList.add("red");
    document.querySelectorAll(".rgb")[2].classList.remove("blue")
    document.querySelectorAll(".rgb")[2].classList.remove("red");
    document.querySelectorAll(".rgb")[2].classList.add("green");
    topColor = "blue";
    getTheTime();
})