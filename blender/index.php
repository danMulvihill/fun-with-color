<?php include("../header.php") ?>
<div class="blender">
<div id="toggleButtons">
  <button onclick="toggleRGB()">RGB</button>
  <button onclick="toggleHSL()">HSL</button>
</div>

<h3>select to blend:</h3>
<div id="rgb">
    <div id="Red">
    Red: <span id="redOut">0</span><br>
    <input type="range" id="red" value="0" min="0" max="255">
    </div> 

    <div id="Green">
    Green: <span id="greenOut">0</span><br>
      <input type="range" id="green" value="0" min="0" max="255">
  </div> 
    <div id="Blue">
    Blue: <span id="blueOut">0</span><br>
      <input type="range" id="blue" value="0" min="0" max="255">
  </div> 
</div>
<div id="hsl">
  <div id="Hue">
    Hue: <span id="hueOut">0</span><br>
      <input type="range" id="hue" value="0" min="0" max="360">
  </div> 

    <div id="Sat">
    Saturation: <span id="satOut">100</span><br>
      <input type="range" id="sat" value="100" min="0" max="100">
  </div> 
    <div id="Lit">
    Lightness: <span id="litOut">50</span><br>
      <input type="range" id="lit" value="50" min="0" max="100">
  </div> 
</div>
  <div id="output"></div>
</div> <!-- end blender -->



</div>
<script src="scripts.js"></script>
</body>
</html>