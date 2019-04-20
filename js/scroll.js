// OPTIMIZED

function scrollToF(e) {
  var elmnt = className(e + "Target")[0];
  elmnt.scrollIntoView();
}

function scrollTo(e) {
  e = "scrollTo" + e;
  className(e)[0].addEventListener("click", function () {
    scrollToF(e);
  });
}

var scrollToVal = [
  "Echipa",
  "AlegeParagraful",
  "Fotografii",
  "FormGroup",
  "Packet"
];

for (var i = 0; i < scrollToVal.length; i++) {
  scrollTo(scrollToVal[i]);
}

window.addEventListener("scroll", function () {
  scrollToPacketShow();
});
window.addEventListener("resize", function () {
  scrollToPacketShow();
});
var scrollToPacket = className("scrollToPacket")[0];

function scrollToPacketShow() {
  var element = className("scrollToPacketShow")[0];
  var elementHeightPosition =
    element.offsetTop - element.scrollTop + element.clientTop;
  var scrollHeight = this.scrollY;
  if (elementHeightPosition < scrollHeight) {
    scrollToPacket.style.display = "block";
  } else {
    scrollToPacket.style.display = "none";
  }
}