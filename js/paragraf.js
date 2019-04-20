// OPTIMIZED

function paragraf() {

    var i, j, k;
    var bodyTarget = tagName("BODY")[0];
    var optiuniList = className("optiuniList")[0];
    var optiuniListBackground = className("optiuniListBackground")[0];
    var optiuniInitial = className("optiuniInitial")[0];
    var optiuniSelectat = className("optiuniSelectat");
    var optiuniListSelector = className("optiuniListSelector");


    var cardPocketEveniment = className("cardPocketEveniment");
    var cardPocketReclama = className("cardPocketReclama");
    var cardPocketSedintaFoto = className("cardPocketSedintaFoto");
    var cardPocketNunta = className("cardPocketNunta");
    var cardPocketBotez = className("cardPocketBotez");
    var cardPocketBanchet = className("cardPocketBanchet");
    //add here opt
    var cardPocketOpt = [

        cardPocketEveniment,
        cardPocketReclama,
        cardPocketSedintaFoto,
        cardPocketNunta,
        cardPocketBotez,
        cardPocketBanchet
        //add here opt
    ];


    optiuniInitial.addEventListener("click", optiuniListToggle);
    optiuniList.addEventListener("click", optiuniListToggle);
    optiuniListBackground.addEventListener("click", optiuniListToggle);
    for (i = 0; i < optiuniListSelector.length; i++) {
        optiuniListSelector[i].addEventListener("click", functieOptiuneSelectata);
    }


    function optiuniListToggle() {
        if (optiuniList.classList) {
            optiuniList.classList.toggle("displayNone");
            optiuniListBackground.classList.toggle("displayNone");
            bodyTarget.classList.toggle("scrollHidden");
        }
    }

    function optiuniListSelectorAdd(e) {
        for (j = 0; j < e.length; j++) {
            e[j].classList.add("displayNone");
        }
    }

    function optiuniListSelectorRemove(e) {
        for (j = 0; j < e.length; j++) {
            e[j].classList.remove("displayNone");
        }
    }

    function functieOptiuneSelectata() {
        for (i = 0; i < optiuniListSelector.length; i++) {
            optiuniSelectat[i].classList.add("displayNone");
            optiuniListSelectorAdd(cardPocketOpt[i]);

            if (optiuniListSelector[i] == this) {
                optiuniSelectat[i].classList.remove("displayNone");
                bodyTarget.classList.remove("scrollHidden");
                optiuniListSelectorRemove(cardPocketOpt[i]);
                optiuniList.classList.add("displayNone");
                optiuniListBackground.classList.add("displayNone");
                optiuniListToggle();
            }
        }
    }
}