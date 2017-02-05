var xo, yo, x, y, vo, vx, vy, g, t, sudut, marginkiri, marginkanan, marginatas, marginbawah, ax, ay, waktu, ymax, a, b, c, t1, t2;

function kanvas() {
  createCanvas(window.innerWidth, window.innerHeight);
  marginkiri = 0.05 * window.innerWidth;
  marginkanan = window.innerWidth - 1.3 * marginkiri;
  marginatas = 0.05 * window.innerHeight;
  marginbawah = window.innerHeight - 7 * marginatas;
  data();
  textSize(width * 0.04);
  textFont("Cambria Math");
  text("y", marginatas / 4.5, marginatas + ((height - marginbawah)));
  text("x", width / 2, marginbawah + 12);
}

function data() {
  textSize(width * 0.035);
  textFont("Helvetica");
  input1 = createInput("");
  input1.position(marginkiri, window.innerHeight - 3 * marginkiri);
  text("Kecepatan Awal", marginkiri, window.innerHeight - 3.2 * marginkiri);
  input2 = createInput("");
  input2.position(marginkiri, window.innerHeight - 5 * marginkiri);
  text("Sudut Elevasi", marginkiri, window.innerHeight - 5.2 * marginkiri);
  input3 = createInput("");
  input3.position(marginkiri, window.innerHeight - 7 * marginkiri);
  text("Posisi Awal", marginkiri, window.innerHeight - 7.2 * marginkiri);
}

function tombol() {
  button = createButton('Mulai');
  button.position(250, 0.75 * window.innerHeight);
  button.mousePressed(mulai);
  button = createButton('Ulang');
  button.position(250, 0.8 * window.innerHeight);
  button.mousePressed(kanvas);
}

function mulai() {
  vo = 10 * parseInt(input1.value(), 10);
  sudut = parseInt(input2.value(), 10);
  xo = marginkiri;
  yo = marginbawah - 100 * parseInt(input3.value(), 10);
  y = marginbawah;
  a = 5;
  c = (yo - y);
  b = -(vo * sin(sudut * PI / 180));
  t1 = (-1 * b + sqrt(b * b - 4 * a * c)) / (2 * a);
  t2 = (-1 * b - sqrt(b * b - 4 * a * c)) / (2 * a);
  if (t1 > 0) {
    print(t1)
    t = t1
  } else {
    print(t2)
    t = t2
  }
  g = 10;
  waktu = 0;
  x = xo + (vo * cos(sudut * PI / 180) * t);
  ymax = yo - (vo * vo * sin(sudut * PI / 180) * sin(sudut * PI / 180)) / (2 * g);
  /*if (x > window.innerWidth) {
    resizeCanvas(x + marginkanan, height)
  }*/

}

/*if (ymax < 0) {
  resizeCanvas(width, height + abs(2 * ymax))
  marginatas = abs(2 * ymax);
}*/
/*y = yo - vo * vo * (sin(sudut * PI / 180) * sin(sudut * PI / 180)) / (2 * g);*/
/*x = xo + vo * cos(sdt * PI / 180) * t;*/


function setup() {
  tombol();
  kanvas();
  print(c)
}


function draw() {
  /*if (ymax < 0) {
    strokeWeight(2);
    line(marginkiri, marginatas, marginkiri, marginbawah);
    triangle(0.5 * marginkiri, marginatas, marginkiri, marginatas - marginkiri * sqrt(3) / 2, 1.5 * marginkiri, y - 50);
  } else {
    strokeWeight(2);
    line(marginkiri, marginatas, marginkiri, marginbawah);
    triangle(0.5 * marginkiri, marginatas, marginkiri, marginatas - marginkiri * sqrt(3) / 2, 1.5 * marginkiri, marginatas);
  }*/
  strokeWeight(2);
  line(marginkiri, marginatas + 60, marginkiri, marginbawah);
  triangle(0.5 * marginkiri, marginatas + 60, marginkiri, marginatas + 60 - marginkiri * sqrt(3) / 2, 1.5 * marginkiri, marginatas + 60);
  if (x > window.innerWidth) {
    strokeWeight(2);
    line(marginkiri, marginbawah, x + 50, marginbawah);
    triangle(x + 50, marginbawah - 0.5 * marginkiri, x + 50, marginbawah + 0.5 * marginkiri, (x + 50) + marginkiri * sqrt(3) / 2, marginbawah);
  } else {
    strokeWeight(2);
    line(marginkiri, marginbawah, marginkanan, marginbawah);
    triangle(marginkanan, marginbawah - 0.5 * marginkiri, marginkanan, marginbawah + 0.5 * marginkiri, marginkanan + marginkiri * sqrt(3) / 2, marginbawah);
  }
  fill(0);
  waktu = waktu + 0.1;

  ax = xo + vo * cos(sudut * PI / 180) * waktu;
  ay = yo - vo * sin(sudut * PI / 180) * waktu + g * waktu * waktu / 2;

  if (ay < y) {
    ellipse(ax, ay, 5, 5);
    textSize(width * 0.04);
    textFont("Helvetica");
    text("Tinggi Maksimum", marginkiri, window.innerHeight - 10 * marginkiri);
    text(":" + " " + nfc(((y) - ymax) / 100, 2) + " " + "m", marginkiri + 0.4 * width, window.innerHeight - 10 * marginkiri)
    text("Jarak Maksimum", marginkiri, window.innerHeight - 9 * marginkiri);
    text(":" + " " + nfc((x - xo) / 100, 2) + " " + "m", marginkiri + 0.4 * width, window.innerHeight - 9 * marginkiri)
    text("Waktu Puncak", marginkiri, window.innerHeight - 8 * marginkiri);
    text(":" + " " + nfc(t / 10, 2) + " " + "s", marginkiri + 0.4 * width, window.innerHeight - 8 * marginkiri)
  }
  print(ay)
  print(ymax)
}