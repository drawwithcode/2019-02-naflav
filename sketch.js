function setup() {
  createCanvas(windowWidth, windowHeight);


}

function draw() {
  noStroke();


  for (var x = 0; x < width; x += 10) {
    for (var y = 0; y < height; y += 10) {

      if (random() < 0.1) {
        fill("#333333");
      } else {
        fill("#F87E61");
      }

      rect(x, y, x + 10, y + 10);


    }
  }

  //title
  textSize(20);
  textAlign(CENTER);
  fill("#F87E61");
  stroke("#333333");
  textFont("Roboto Mono");
  text("low blood pressure time", width / 2, height / 2);


}
