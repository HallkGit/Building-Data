// Dataset https://www.kaggle.com/datasets/nationalparkservice/park-biodiversity/?select=parks.csv
// https://p5js.org/reference/

// Delare variable table, with global scope
let table

function preload() {
  // my table is comma separated value "csv"
  // and has a header specifying the columns labels
  table = loadTable('assets/Archibus All-Campus Export.csv', 'csv', 'header');
  exp = loadImage('assets/EXP.png');
  cb = loadImage('assets/Cb.png');
  csc = loadImage('assets/CSC.png');
  dalt = loadImage('assets/Dalt.png');
  ev = loadImage('assets/EV.png');
  inv = loadImage('assets/Inv.png');
  isec = loadImage('assets/isec.png');
  rp = loadImage('assets/Rp.png');
  sl = loadImage('assets/SL.png');
  wva = loadImage('assets/wva.png');


}

function setup() {
  createCanvas(1250, 580);
  // print object to table
  // print(table)
}


function draw() {
  // print(name) // print to console, console.log(name) will do the same thing
  noFill();
  clear()
  textAlign(CENTER, TOP)





  // get first bldg
  invName = table.getString(0, 'Building Name');
  invArea = table.getNum(0, 'Total Area');

  // get second bldg
  expName = table.getString(1, 'Building Name');
  expArea = table.getNum(1, 'Total Area');

  // get third bldg
  cbName = table.getString(2, 'Building Name');
  cbArea = table.getNum(2, 'Total Area');

  // get fourth bldg
  slName = table.getString(3, 'Building Name');
  slArea = table.getNum(3, 'Total Area');

  // get fifth bldg
  isecName = table.getString(4, 'Building Name');
  isecArea = table.getNum(4, 'Total Area');

  // get sixth bldg
  daltName = table.getString(5, 'Building Name');
  daltArea = table.getNum(5, 'Total Area');

  // get seventh bldg
  wvaName = table.getString(6, 'Building Name');
  wvaArea = table.getNum(6, 'Total Area');

  // get eighth bldg
  evName = table.getString(7, 'Building Name');
  evArea = table.getNum(7, 'Total Area');

  // get ninth bldg
  cscName = table.getString(8, 'Building Name');
  cscArea = table.getNum(8, 'Total Area');

  // get tenth bldg
  rpName = table.getString(9, 'Building Name');
  rpArea = table.getNum(9, 'Total Area');

  if ((mouseY > height * 0.05) && (mouseY < height * 0.58) && (mouseX < width * 0.7) && (mouseX > width * 0.49)) {
    displayParkorange(780, 180, invName, invArea);
    imageMode(CENTER);
    image(inv, 300, 250, 500, 600);
    tint(255);
  }
  else {
    displayPark(780, 180, invName, invArea);
    ellipseMode(CENTER);
    ellipse(300, 250, 450, 450)
  }

  if ((mouseY < height * 0.11) && (mouseY > height * 0.03) && (mouseX < width * 0.74) && (mouseX > width * 0.7)) {
    displayParkorange(900, 40, rpName, rpArea);
    imageMode(CENTER);
    image(rp, 300, 250, 500, 600);
  }
  else {
    displayPark(900, 40, rpName, rpArea);
  }

  if ((mouseY > height * 0.67) && (mouseY < height * 0.92) && (mouseX < width * 0.72) && (mouseX > width * 0.59)) {
    displayParkorange(810, 460, slName, slArea);
    imageMode(CENTER);
    image(sl, 300, 250, 500, 600);
  }
  else {
    displayPark(810, 460, slName, slArea);
  }

  if ((mouseY > height * 0.73) && (mouseY < height * 0.9) && (mouseX < width * 0.8) && (mouseX > width * 0.72)) {
    displayParkorange(950, 470, wvaName, wvaArea);
    imageMode(CENTER);
    image(wva, 300, 250, 500, 600);
  }
  else {
    displayPark(950, 470, wvaName, wvaArea);
  }

  if ((mouseY < height * 0.49) && (mouseY > height * 0.19) && (mouseX < width * 0.94) && (mouseX > width * 0.84)) {
    displayParkorange(1100, 200, cbName, cbArea);
    imageMode(CENTER);
    image(cb, 300, 250, 500, 600);
  }
  else {
    displayPark(1100, 200, cbName, cbArea);
  }

  if ((mouseY > height * 0.58) && (mouseY < height * 0.7) && (mouseX < width * 0.76) && (mouseX > width * 0.68)) {
    displayParkorange(900, 350, evName, evArea);
    imageMode(CENTER);
    image(ev, 300, 250, 500, 600);
  }
  else {
    displayPark(900, 350, evName, evArea);
  }

  if ((mouseY < height * 0.22) && (mouseY > height * 0.01) && (mouseX < width * 0.84) && (mouseX > width * 0.75)) {
    displayParkorange(1000, 60, isecName, isecArea);
    imageMode(CENTER);
    image(isec, 300, 250, 500, 600);
  }
  else {
    displayPark(1000, 60, isecName, isecArea);
  }

  if ((mouseY < height * 0.49) && (mouseY > height * 0.39) && (mouseX < width * 0.82) && (mouseX > width * 0.78)) {
    displayParkorange(1000, 250, cscName, cscArea);
    imageMode(CENTER);
    image(csc, 300, 250, 500, 600);
  }
  else {
    displayPark(1000, 250, cscName, cscArea);
  }

  if ((mouseY > height * 0.48) && (mouseX < width * 0.98) && (mouseX > width * 0.8)) {
    displayParkorange(1100, 400, expName, expArea);
    imageMode(CENTER);
    image(exp, 300, 250, 500, 600);
  }
  else {
    displayPark(1100, 400, expName, expArea);
  }

  if ((mouseY < height * 0.17) && (mouseY > height * 0.03) && (mouseX < width * 0.96) && (mouseX > width * 0.86)) {
    displayParkorange(1150, 60, daltName, daltArea);
    imageMode(CENTER);
    image(dalt, 300, 250, 500, 600);
  }
  else {
    displayPark(1150, 60, daltName, daltArea);
  }

  print(invName, invArea);
  print(expName, expArea);
  print(cbName, cbArea);
  print(slName, slArea);
  print(isecName, isecArea);
  print(daltName, daltArea);
  print(wvaName, wvaArea);
  print(evName, evArea);
  print(cscName, cscArea);





}

function displayPark(x, y, name, acres) {
  // use map to scale output size
  let circle_size = map(acres, 147158, 355446, 40, 300)
  noStroke();
  fill('#FCA311');
  circle(x, y, circle_size)

}

function displayParkorange(x, y, name, acres) {
  // use map to scale output size
  let circle_size = map(acres, 147158, 355446, 40, 300)
  noStroke();
  fill('#D00000');
  circle(x, y, circle_size)
  textSize(13);
  fill('#FFFFFF');
  textFont('Cambria');
  textSize(24);
  text(name + '\n' + acres + ' Total Area', 295, 510);

}



// Resizes canvas to new window width and height  
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  noloop()
}