function checkGDPR() {
    if (localStorage.getItem('ws-GDPR')) {
        document.getElementsByClassName('ws-GDPR')[0].style.display = "none";
    } else {
        document.getElementsByClassName('ws-GDPR')[0].style.display = "block";
    }
}

checkGDPR();

document.getElementsByClassName("ws-permite")[0].onclick = setGDPR;
document.getElementsByClassName("ws-permite")[1].onclick = setGDPR;

function setGDPR() {
    localStorage.setItem('ws-GDPR', 'true');
    checkGDPR();
}

if (document.URL == 'https://worthshoot.com/date-cu-caracter-personal.html') {
    document.getElementsByClassName('ws-text')[0].style.display = "none";
    document.getElementsByClassName('ws-butoane')[0].style.display = "none";
    document.getElementsByClassName('ws-GDPR')[0].style.paddingBottom = "5px";
} else {
    document.getElementsByClassName('ws-text')[0].style.display = "block";
    document.getElementsByClassName('ws-butoane')[0].style.display = "block";
    document.getElementsByClassName('ws-GDPR')[0].style.paddingBottom = "30px";
}