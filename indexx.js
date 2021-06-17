var radnomNumber1 = Math.floor(Math.random() * 6) + 1;
var radnomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".dice .img1").setAttribute("src", `images/dice${radnomNumber1}.png`);
document.querySelector(".dice .img2").setAttribute("src", `images/dice${radnomNumber2}.png`);



for (var i = 0; i <= 10; i++) {
  var stevecPrvi = 0;
  var stevecDrugi = 0;
  if (radnomNumber1 > radnomNumber2) {
    document.querySelector(".container h1").innerHTML = "First player has won";
    stevecPrvi = stevecPrvi + 1;;


  } else if (radnomNumber1 < radnomNumber2) {

    document.querySelector(".container h1").innerHTML = "Second player has won";
    stevecDrugi = stevecDrugi + 1;;
  } else if (radnomNumber1 = radnomNumber2) {
    document.querySelector(".container h1").innerHTML = "Draw";
    if (i = 9) {

      if (stevecDrugi > stevecPrvi) {
        document.querySelector(".zmagovalec p").innerHTML = "Zmagovalec je drugi igralec";
      }
      if (stevecDrugi < stevecPrvi) {
        document.querySelector(".zmagovalec p").innerHTML = "Zmagovalec je prvi igralec";
      } else if (stevecDrugi = stevecPrvi) {
        document.querySelector(".zmagovalec p").innerHTML = "Enako točk";
      }
    }


  }

}
