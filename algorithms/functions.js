function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function shuffleArray(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;
  for (var i = array.length; i >= 0; i--) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    swap(array, currentIndex, randomIndex);
  }
  return array;
}

function crtaj(array, piramida, stubovi, kruznice) {
  if (piramida) {
    for (var i = 0; i < array.length; i++) {
      stroke(niz[i], maxNiza, maxNiza);
      line(i, height / 2, i, height / 2 - array[i]);
      line(i, height / 2, i, height / 2 + array[i]);
    }
  } else if (stubovi) {
    stroke(0);
    fill(255);
    for (var i = 0; i < array.length; i++)
      rect(i * rectWidth, height - array[i], rectWidth, height);
  } else if (kruznice) {
    noFill();
    for (var i = 0; i < array.length; i++) {
      stroke(niz[i], maxNiza, maxNiza);
      ellipse(width / 2, height / 2, i, array[i] / 2);
    }
  }
}

function ispisiPodatke(s, compN, elemN) {
  fill(0, 0, maxNiza);
  let fps = s.value() + "fps";
  stroke(0, 0, maxNiza);
  textSize(25);
  text(fps, 290, 40);
  let brUtxt = "Broj operacija: " + compN;
  textSize(19);
  text(brUtxt, width - 250, 25);
  let nTxt = "Broj elemenata: " + elemN;
  text(nTxt, width - 195, 50);
}

function makeSlider(slider, canvas, alg) {
  slider = createSlider(1, 60, 60);
  slider.position(canvas.position().x + 20, canvas.position().y + 20);
  slider.size(250);
  return slider;
}