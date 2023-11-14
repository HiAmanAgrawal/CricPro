var batsman = document.querySelectorAll(".Batsman");
var images = [
    '<img class=" stats b1" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sehwag.png" alt="Sehwag-stats">',
    '<img class=" stats b2" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sachin.png" alt="sachin-stats">',
    '<img class=" stats b3" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-gambhir.png" alt="Gambhir-stats">',
    '<img class=" stats b4" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-virat-kohli.png" alt="Virat-stats">',
    '<img class=" stats b5" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-dhoni.png" alt="dhoni-stats">',
    '<img class=" stats b6" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-yuvraj.png" alt="yuvraj-stats">',
    '<img class=" stats b7" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-suresh-raina.jpg" alt="suresh-stats">',
    '<img class=" stats b8" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-harbhajan.jpg" alt="Harbhajan-stats">',
    '<img class=" stats b9" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-zaheer-khan.jpg" alt="zaheer-stats">',
    '<img class=" stats b10" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-munaf-patel.jpg" alt="munaf-stats">',
    '<img class=" stats b11" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sreeshanth.jpg" alt="Sreesanth-stats">',
]
batsman[0].onclick = function(){appear(0)};
batsman[1].onclick = function(){appear(1)};
batsman[2].onclick = function(){appear(2)};
batsman[3].onclick = function(){appear(3)};
batsman[4].onclick = function(){appear(4)};
batsman[5].onclick = function(){appear(5)};
batsman[6].onclick = function(){appear(6)};
batsman[7].onclick = function(){appear(7)};
batsman[8].onclick = function(){appear(8)};
batsman[9].onclick = function(){appear(9)};
batsman[10].onclick = function(){appear(10)};
batsman[11].onclick = function(){appear(11)};
function appear(a) {
    document.getElementById("image").innerHTML = images[a];
  }