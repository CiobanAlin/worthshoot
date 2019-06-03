document.getElementById("menuGalerie").onclick = menuGalerie;
document.getElementById("menuGalerieClose").onclick = menuGalerieClose;


function menuGalerie() {
    document.getElementById("menuOne").style.display = "none";
    document.getElementById("menuTwo").style.display = "block";
    document.getElementById("menuGalerieClose").style.display = "block";
}

function menuGalerieClose() {
    document.getElementById("menuOne").style.display = "flex";
    document.getElementById("menuTwo").style.display = "none";
    document.getElementById("menuGalerieClose").style.display = "none";
}