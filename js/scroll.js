// <!-- scrollToEchipa -->

document.getElementsByClassName("scrollToEchipa")[0].onclick = scrollToEchipa;

function scrollToEchipa() {
    var elmnt = document.getElementsByClassName("scrollToEchipaTarget")[0];
    elmnt.scrollIntoView();
}

// <!-- scrollToFotografii -->

document.getElementsByClassName("scrollToAlegeParagraful")[0].onclick = scrollToAlegeParagraful;

function scrollToAlegeParagraful() {
    var elmnt = document.getElementsByClassName("scrollToAlegeParagrafulTarget")[0];
    elmnt.scrollIntoView();
}

// <!-- scrollToFotografii -->

document.getElementsByClassName("scrollToFotografii")[0].onclick = scrollToFotografii;

function scrollToFotografii() {
    var elmnt = document.getElementsByClassName("scrollToFotografiiTarget")[0];
    elmnt.scrollIntoView();
}

// <!-- scrollToFormGroup -->

document.getElementsByClassName("scrollToFormGroup")[0].onclick = scrollToFormGroup;

function scrollToFormGroup() {
    var elmnt = document.getElementsByClassName("scrollToFormGroupTarget")[0];
    elmnt.scrollIntoView();
}

// <!-- scrollToPacket -->

document.getElementsByClassName("scrollToPacket")[0].onclick = scrollToPacket;

function scrollToPacket() {
    var elmnt = document.getElementsByClassName("scrollToPacketTarget")[0];
    elmnt.scrollIntoView();
}

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