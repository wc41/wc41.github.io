let bgcolor;
//create variable for input
let input;
let first = true;
let second = false;
let rotateMode = false;
let rotations = 0;
let lastRot = -1.57079632679;
let aInitial = 0;
let a = 0;
let currRot = 0;
let stopNeg = true;
let stopPos = false;
let skipNeg = false;
let length = 125;
let rotation = 0;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  frameRate(30);
  canvas.position(0, 1.1 * windowHeight);
  canvas.class("container");
  //   canvas.parent("parent1");
  canvas.style("display", "block");
  //   div.remove();

  angleMode(RADIANS); // Change the mode to RADIANS
}

function draw() {
  length = windowWidth * 0.08;

  let mh1 = select(".miniheader1");
  mh1.hide();
  let mh2 = select(".miniheader2");
  mh2.hide();
  let mh3 = select(".miniheader3");
  mh3.hide();
  let mh4 = select(".miniheader4");
  mh4.hide();

  let w1chunk = select(".week1chunking");
  w1chunk.hide();
  let w1terrain = select(".week1terrain");
  w1terrain.hide();
  let w1physics = select(".week1physics");
  w1physics.hide();
  let week2caves = select(".week2caves");
  week2caves.hide();
  let week2thread = select(".week2thread");
  week2thread.hide();
  let week2texture = select(".week2texture");
  week2texture.hide();
  let week3rivers = select(".week3-rivers");
  week3rivers.hide();
  let week3blinn = select(".week3-blinn");
  week3blinn.hide();
  let week3wavy = select(".week3-wavy");
  week3wavy.hide();
  let week3cross = select(".week3-cross");
  week3cross.hide();
  let week3fog = select(".week3-fog");
  week3fog.hide();
  let week3day = select(".week3-day");
  week3day.hide();

  let endproc = select(".end-proc");
  endproc.hide();
  let endxblock = select(".end-xblock");
  endxblock.hide();
  let endshadows = select(".end-shadows");
  endshadows.hide();
  let endbiomes = select(".end-biomes");
  endbiomes.hide();
  let endrain = select(".end-rain");
  endrain.hide();
  let endinv = select(".end-inv");
  endinv.hide();

  background(255);
  strokeWeight(2);
  translate(width / 2, height / 2);
  circle(0, 0, length * 2.7);

  rotation = (currRot + a) % 6.28318530718;
  if (rotation < 0) {
    rotation = 6.28318530718 + rotation;
  }
  if (lastRot > 5 && rotation < 3) {
    rotations++;
  }
  if (lastRot < 3 && rotation > 5) {
    console.log("goin here");
    // console.log("lastRot = " + lastRot + " & rotation = " + rotation);
    if (!skipNeg) {
      rotations--;
    }
    skipNeg = false;
  }
  if (rotations < 0) {
    stopNeg = true;
    first = true;
    second = false;
    aInitial = 0;
    a = 0;
    currRot = 0;
    rotation = -1.57079632679;
    rotations = 0;
  }
  if (rotations > 3) {
    stopPos = true;
    rotations = 4;
  }
  if (!stopNeg && !stopPos) {
    rotate(rotation - 1.57079632679);
    line(0, 0, length, rotation - 1.57079632679);
  } else if (stopNeg) {
    rotate(-1.57079632679);
    line(0, 0, length, -1.57079632679);
    if (rotation - lastRot > 0 && rotation - lastRot < 1) {
      stopNeg = false;
    }
  } else {
    rotate(-1.57079632679);
    line(0, 0, length, -1.57079632679);
    if (rotation - lastRot < 0 && rotation - lastRot > -1) {
      stopPos = false;
      rotations = 3;
      first = true;
      second = false;
      aInitial = 0;
      a = 0;
      currRot = 0;
      rotation = -1.57079632679;
      skipNeg = true;
    }
  }
  lastRot = rotation;
  console.log(rotations);
  circle(0, 0, 20);
  if (rotations == 0 && rotation > 1.57) {
    w1chunk.show();
  }
  if (rotations == 0 && rotation > 1.57 * 2) {
    w1terrain.show();
  }
  if (rotations == 0 && rotation > 1.57 * 3) {
    w1physics.show();
  }
  if (rotations == 1 && rotation > 2.356) {
    week2texture.show();
  }
  if (rotations == 1 && rotation > 4.712) {
    week2thread.show();
  }
  if (rotations == 1 && rotation > 5.49778714378) {
    week2caves.show();
  }
  if (rotations == 2 && rotation > 0.4) {
    week3fog.show();
  }
  if (rotations == 2 && rotation > 0.897597901 * 6) {
    week3wavy.show();
  }
  if (rotations == 2 && rotation > 1.79519580205) {
    week3blinn.show();
  }
  if (rotations == 2 && rotation > 0.897597901 * 4) {
    week3rivers.show();
  }
  if (rotations == 2 && rotation > 0.897597901 * 5) {
    week3cross.show();
  }
  if (rotations == 2 && rotation > 0.897597901 * 5.4) {
    week3day.show();
  }

  if (rotations == 2 && rotation > 0.897597901 * 6) {
    week3wavy.show();
  }

  if ((rotations == 3 && rotation > 2.38) || rotations == 4) {
    endproc.show();
  }
  if ((rotations == 3 && rotation > 2.9) || rotations == 4) {
    endxblock.show();
  }
  if ((rotations == 3 && rotation > 3.1415 + 0.8) || rotations == 4) {
    endshadows.show();
  }
  if ((rotations == 3 && rotation > 3.1415 + 1.4) || rotations == 4) {
    endbiomes.show();
  }
  if ((rotations == 3 && rotation > 4.71159265359 + 0.4) || rotations == 4) {
    endrain.show();
  }
  if ((rotations == 3 && rotation > 4.71159265359 + 1.0) || rotations == 4) {
    endinv.show();
  }

  if (rotations == 0) {
    mh1.show();
  }
  if (rotations == 1) {
    mh2.show();
  }
  if (rotations == 2) {
    mh3.show();
  }
  if (rotations >= 3) {
    mh4.show();
  }
}

function mouseReleased() {
  rotateMode = false;
  first = true;
}

function mouseDragged() {
  if (first) {
    aInitial = atan2(mouseY - height / 2, mouseX - width / 2);
    rotateMode = true;
    first = false;
    second = true;
  } else {
    if (second) {
      currRot += a;
      second = false;
    }
    a = atan2(mouseY - height / 2, mouseX - width / 2) - aInitial;
  }
}
