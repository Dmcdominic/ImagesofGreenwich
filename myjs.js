var pictureArray = ["http://www.imagesofgreenwich.com/ImagesOfGreenwich/Welcome_files/shapeimage_2.png", "http://www.imagesofgreenwich.com/ImagesOfGreenwich/Contact_files/shapeimage_4.png", "http://static.wixstatic.com/media/c0f817_497eb4a326da498e9a22f348eb78ba21.jpg/v1/fill/w_628,h_341,al_c,q_80,usm_0.66_1.00_0.01/c0f817_497eb4a326da498e9a22f348eb78ba21.jpg", "http://ww2.hdnux.com/photos/14/37/13/3273425/3/920x920.jpg", "http://static.wixstatic.com/media/c0f817_5b468c9b8e394d84aeafbd27a688b4c6.jpg_srz_635_350_85_22_0.50_1.20_0.00_jpg_srz", "http://static1.squarespace.com/static/505a1a54e4b0567d6bacbf90/5164de3ce4b0d3f496663ff6/5164de3ce4b018661c5e141f/1365564991188/Binney1.jpg?format=500w", "http://ww2.hdnux.com/photos/41/20/62/8719517/12/920x920.jpg"];
var descriptionArray = ["Tod's Point Bridge", "Sunset", "The Boathouse", "Shoreline", "Winter Kayaks", "Binney Park Bridge", "Toy Sailboats"];

for (i=0; i<pictureArray.length/3; i++) {
  var tr = document.createElement("tr");
  var cell1 = document.createElement("td");
  var cell2 = document.createElement("td");
  var cell3 = document.createElement("td");
  var image1 = document.createElement("img");
  var image2 = document.createElement("img");
  var image3 = document.createElement("img");
  var desc1 = document.createElement("p");
  var desc2 = document.createElement("p");
  var desc3 = document.createElement("p");
  
  image1.src = pictureArray[3*i];
  image2.src = pictureArray[3*i+1];
  image3.src = pictureArray[3*i+2];
  image1.style.width = "93%";
  image2.style.width = "93%";
  image3.style.width = "93%";
  image1.style.maxHeight = "auto";
  image2.style.maxHeight = "auto";
  image3.style.maxHeight = "auto";
  
  desc1.innerHTML = descriptionArray[3*i];
  desc2.innerHTML = descriptionArray[3*i+1];
  desc3.innerHTML = descriptionArray[3*i+2];
  
  cell1.appendChild(image1);
  cell1.appendChild(desc1);
  cell2.appendChild(image2);
  cell2.appendChild(desc2);
  cell3.appendChild(image3);
  cell3.appendChild(desc3);
  
  tr.appendChild(cell1);
  if (3*i+1 < pictureArray.length) {
    tr.appendChild(cell2);
  }
  if (3*i+2 < pictureArray.length) {
    tr.appendChild(cell3);
  }
  
  document.getElementById("tableBody").appendChild(tr);
}

var emailList = [];

function addEmail() {
  var x = document.getElementById("emailForm").value;
  emailList.push(x);
  console.log(emailList);
}

/*
googledrive.com/host/0B6gEWVu3ZZKdVjh2OV8tMWp1cUE
*/
