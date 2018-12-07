
<?php include("../header.php") ?>
    <p class="clock-body">
        <!-- <span>
            Change color on: 
            <button id="sec-button">Seconds</button>
            <button id="cs-button">1/100 secs</button>
        </span> -->
        <span>
            Current color:
            <span id = "hex-color"></span>
        </span>
        <span>
            Switch hour to: 
            <button class="switch" id="switchRed">Red</button>
            <button id="switch">Green</button>
            <button id="switchBlue">Blue</button>
        </span>
    </p>

    <div id="clock">
        <span id="hrs">00</span>:<span id="mins">00</span>:<span id="secs">00</span>
        <span id="ms"></span> <span id="xm"></span>
        <div class="rgb red"> </div>
        <div class="rgb green"></div>
        <div class="rgb blue"> </div>
    </div>
    <div id="greet">Good Day!</div>



    
</div>
    <script src="main.js"></script>
    
</body>
</html>