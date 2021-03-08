var page = document.getElementById('page');
var currentPosition;
var currentObject;

const Dictionary = new Map(
  [
    ["CO-PAH", "Президиум СО-РАН"],
    ["Integral", "Интеграл"],
    ["Techpark", "Технопарк"],
    ["NSU", "Новосибирский Государственный Университет"],
    ["House_of_scientists", "Дом ученых"],
    ["Mouse_Monument", "Памятник мыши"],
    ["Color_Passage", "Цветной проезд"],
    ["Mall", "Торговый центр Академгородка"],
    ["Pond", "Пруд с утками"],
    ["Botanical_Garden", "Ботанический сад"],
    ["Pointer", "Приложение Trails"],
    ["Isle", "Обское море и пляж"],
  ]
);

const HrefsDictionary = new Map(
  [
    ["CO-PAH", "CO-PAH/CO-PAH.html"],
    ["Integral", "Integral/integral.html"],
    ["Techpark", "Techpark/techpark.html"],
    ["NSU", "NSU/NSU.html"],
    ["House_of_scientists", "HOS/HOS.html"],
    ["Mouse_Monument", "MOUSE/Mouse.html"],
    ["Color_Passage", "CP/CP.html"],
    ["Mall", "MALL/Mall.html"],
    ["Pond", "Pond/Pond.html"],
    ["Isle", "Isle/Isle.html"],
  ]
);

document.onmouseover = function (e) {
  if (e.target.className == "active") {
    currentObject = e.target;
    document.getElementById("info_text").innerHTML = Dictionary.get(e.target.id);
  }
  else {
    currentObject = null;
    document.getElementById("info_text").innerHTML = "";
  }
}

document.onclick = function () {
  if (currentObject != null && HrefsDictionary.get(currentObject.id) != undefined) {
    //TODO: create pages for links
    /*window.location.href = HrefsDictionary.get(currentObject.id);*/
    window.scrollTo(0, currentPosition);
  }
}

window.onscroll = function () {
    var y = document.body.getBoundingClientRect().top;
    page.scrollLeft = -y;
    currentPosition = -y;
}

window.onresize = resize;

resize();

function resize() {
  var h = page.scrollHeight - window.innerHeight + window.innerWidth;
  var w = page.scrollWidth - window.innerWidth + window.innerHeight;
  document.body.style.height = w + 'px';
  document.body.style.width = h + 'px';
}