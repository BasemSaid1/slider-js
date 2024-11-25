var images = Array.from(document.querySelectorAll(" .item img"));
var lightBoxContainer = document.querySelector("#lightBoxContainer");
var close = document.querySelector(" #close ");
var lightBox = document.querySelector(".lightBox");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var currentIndex;

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function (e) {
    lightBoxContainer.classList.remove("d-none");
    var mySrc = e.target.getAttribute("src");
    lightBox.style.backgroundImage = `url(${mySrc})`;
    currentIndex = images.indexOf(e.target);
  });
}
close.addEventListener("click", function () {
  lightBoxContainer.classList.add("d-none");
});

function slide(step) {
  currentIndex += step;

  if (currentIndex == images.length) {
    currentIndex = 0;
  }
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  var mySrc = images[currentIndex].getAttribute("src");
  lightBox.style.backgroundImage = `url(${mySrc})`;
}
next.addEventListener("click", function () {
  slide(1);
});
prev.addEventListener("click", function () {
  slide(-1);
});
document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") {
    slide(1);
  } else if (e.key == "ArrowLeft") {
    slide(-1);
  } else if (e.key == "Escape") {
    lightBoxContainer.classList.add("d-none");
  }
});
document.addEventListener("click", function (e) {
  if (e.target.id == "lightBoxContainer") {
    lightBoxContainer.classList.add("d-none");
  }
});
