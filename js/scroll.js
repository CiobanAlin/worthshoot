function scrollToF(e) {
    var elmnt = document.getElementsByClassName(e + 'Target')[0];
    elmnt.scrollIntoView();
}

function scrollTo(e) {
    document.getElementsByClassName(e)[0].addEventListener("click", function () {
        scrollToF(e);
    });
}

// <!-- scrollToEchipa -->
scrollTo("scrollToEchipa");
// <!-- scrollToAlegeParagraful -->
scrollTo("scrollToAlegeParagraful");
// <!-- scrollToFotografii -->
scrollTo("scrollToFotografii");
// <!-- scrollToFormGroup -->
scrollTo("scrollToFormGroup");
// <!-- scrollToPacket -->
scrollTo("scrollToPacket");
// <!-- scrollToPacketShow -->


window.addEventListener('scroll', function (e) {
    scrollToPacketShow();
});
window.addEventListener('resize', function (e) {
    scrollToPacketShow();
});
var scrollToPacket = document.getElementsByClassName("scrollToPacket")[0];

function scrollToPacketShow() {
    var element = document.getElementsByClassName("scrollToPacketShow")[0];
    var elementHeightPosition = element.offsetTop - element.scrollTop + element.clientTop;
    var scrollHeight = this.scrollY;
    if (elementHeightPosition < scrollHeight) {
        scrollToPacket.style.display = "block";
    } else {
        scrollToPacket.style.display = "none";
    }
}