function paragraf() {
    // <!-- optiune -->

    var bodyTarget = document.getElementsByTagName("BODY")[0];
    var optiuniList = document.getElementsByClassName("optiuniList")[0];
    var optiuniListBackground = document.getElementsByClassName("optiuniListBackground")[0];
    var optiuniInitial = document.getElementsByClassName("optiuniInitial")[0];
    var optiuniSelectat = document.getElementsByClassName("optiuniSelectat");
    var optiuniListSelector = document.getElementsByClassName("optiuniListSelector");

    var cardPocketEveniment = document.getElementsByClassName("cardPocketEveniment");
    var cardPocketReclama = document.getElementsByClassName("cardPocketReclama");
    var cardPocketSedintaFoto = document.getElementsByClassName("cardPocketSedintaFoto");

    var cardPocketNunta = document.getElementsByClassName("cardPocketNunta");
    var cardPocketBotez = document.getElementsByClassName("cardPocketBotez");

    var cardPocketBanchet = document.getElementsByClassName("cardPocketBanchet");

    optiuniInitial.addEventListener("click", optiuniListToggle);
    optiuniList.addEventListener("click", optiuniListToggle);
    optiuniListBackground.addEventListener("click", optiuniListToggle);

    function optiuniListToggle() {
        if (optiuniList.classList) {
            optiuniList.classList.toggle("displayNone");
            optiuniListBackground.classList.toggle("displayNone");
            bodyTarget.classList.toggle("scrollHidden");
        }
    }
    console.log("optiuniListSelector.length: " + optiuniListSelector.length);
    for (i = 0; i < optiuniListSelector.length; i++) {
        optiuniListSelector[i].addEventListener("click", functieOptiuneSelectata);
    }

    function functieOptiuneSelectata() {
        for (i = 0; i < optiuniListSelector.length; i++) {
            optiuniSelectat[i].classList.add("displayNone");
            if (optiuniListSelector[i] == this) {
                optiuniSelectat[i].classList.remove("displayNone");
                optiuniList.classList.add("displayNone");
                optiuniListBackground.classList.add("displayNone");
                bodyTarget.classList.remove("scrollHidden");
                optiuniListToggle();
                if (i == 0) {
                    for (j = 0; j < cardPocketEveniment.length; j++) {
                        cardPocketEveniment[j].classList.remove("displayNone");
                    }
                    for (j = 0; j < cardPocketReclama.length; j++) {
                        cardPocketReclama[j].classList.add("displayNone");
                    }
                    for (j = 0; j < cardPocketSedintaFoto.length; j++) {
                        cardPocketSedintaFoto[j].classList.add("displayNone");
                    }

                    for (j = 0; j < cardPocketNunta.length; j++) {
                        cardPocketNunta[j].classList.add("displayNone");
                    }
                    for (j = 0; j < cardPocketBotez.length; j++) {
                        cardPocketBotez[j].classList.add("displayNone");
                    }

                    for (j = 0; j < cardPocketBanchet.length; j++) {
                        cardPocketBanchet[j].classList.add("displayNone");
                    }
                }
                if (i == 1) {
                    for (j = 0; j < cardPocketEveniment.length; j++) {
                        cardPocketEveniment[j].classList.add("displayNone");
                    }
                    for (j = 0; j < cardPocketReclama.length; j++) {
                        cardPocketReclama[j].classList.remove("displayNone");
                    }
                    for (j = 0; j < cardPocketSedintaFoto.length; j++) {
                        cardPocketSedintaFoto[j].classList.add("displayNone");
                    }

                    for (j = 0; j < cardPocketNunta.length; j++) {
                        cardPocketNunta[j].classList.add("displayNone");
                    }
                    for (j = 0; j < cardPocketBotez.length; j++) {
                        cardPocketBotez[j].classList.add("displayNone");
                    }

                    for (j = 0; j < cardPocketBanchet.length; j++) {
                        cardPocketBanchet[j].classList.add("displayNone");
                    }
                }
                if (i == 2) {
                    for (j = 0; j < cardPocketEveniment.length; j++) {
                        cardPocketEveniment[j].classList.add("displayNone");
                    }
                    for (j = 0; j < cardPocketReclama.length; j++) {
                        cardPocketReclama[j].classList.add("displayNone");
                    }
                    for (j = 0; j < cardPocketSedintaFoto.length; j++) {
                        cardPocketSedintaFoto[j].classList.remove("displayNone");
                    }

                    for (j = 0; j < cardPocketNunta.length; j++) {
                        cardPocketNunta[j].classList.add("displayNone");
                    }
                    for (j = 0; j < cardPocketBotez.length; j++) {
                        cardPocketBotez[j].classList.add("displayNone");
                    }

                    for (j = 0; j < cardPocketBanchet.length; j++) {
                        cardPocketBanchet[j].classList.add("displayNone");
                    }
                }

                if (i == 3) {
                    for (j = 0; j < cardPocketEveniment.length; j++) {
                        cardPocketEveniment[j].classList.add("displayNone");
                    }
                    for (j = 0; j < cardPocketReclama.length; j++) {
                        cardPocketReclama[j].classList.add("displayNone");
                    }
                    for (j = 0; j < cardPocketSedintaFoto.length; j++) {
                        cardPocketSedintaFoto[j].classList.add("displayNone");
                    }

                    for (j = 0; j < cardPocketNunta.length; j++) {
                        cardPocketNunta[j].classList.remove("displayNone");
                    }
                    for (j = 0; j < cardPocketBotez.length; j++) {
                        cardPocketBotez[j].classList.add("displayNone");
                    }

                    for (j = 0; j < cardPocketBanchet.length; j++) {
                        cardPocketBanchet[j].classList.add("displayNone");
                    }
                }
                if (i == 4) {
                    for (j = 0; j < cardPocketEveniment.length; j++) {
                        cardPocketEveniment[j].classList.add("displayNone");
                    }
                    for (j = 0; j < cardPocketReclama.length; j++) {
                        cardPocketReclama[j].classList.add("displayNone");
                    }
                    for (j = 0; j < cardPocketSedintaFoto.length; j++) {
                        cardPocketSedintaFoto[j].classList.add("displayNone");
                    }

                    for (j = 0; j < cardPocketNunta.length; j++) {
                        cardPocketNunta[j].classList.add("displayNone");
                    }
                    for (j = 0; j < cardPocketBotez.length; j++) {
                        cardPocketBotez[j].classList.remove("displayNone");
                    }

                    for (j = 0; j < cardPocketBanchet.length; j++) {
                        cardPocketBanchet[j].classList.add("displayNone");
                    }
                }
                if (i == 5) {
                    for (j = 0; j < cardPocketEveniment.length; j++) {
                        cardPocketEveniment[j].classList.add("displayNone");
                    }
                    for (j = 0; j < cardPocketReclama.length; j++) {
                        cardPocketReclama[j].classList.add("displayNone");
                    }
                    for (j = 0; j < cardPocketSedintaFoto.length; j++) {
                        cardPocketSedintaFoto[j].classList.add("displayNone");
                    }

                    for (j = 0; j < cardPocketNunta.length; j++) {
                        cardPocketNunta[j].classList.add("displayNone");
                    }
                    for (j = 0; j < cardPocketBotez.length; j++) {
                        cardPocketBotez[j].classList.add("displayNone");
                    }

                    for (j = 0; j < cardPocketBanchet.length; j++) {
                        cardPocketBanchet[j].classList.remove("displayNone");
                    }
                }

                // if (i == 6) {
                //     for (j = 0; j < cardPocketEveniment.length; j++) {
                //         cardPocketEveniment[j].classList.add("displayNone");
                //     }
                //     for (j = 0; j < cardPocketReclama.length; j++) {
                //         cardPocketReclama[j].classList.add("displayNone");
                //     }
                //     for (j = 0; j < cardPocketSedintaFoto.length; j++) {
                //         cardPocketSedintaFoto[j].classList.add("displayNone");
                //     }

                //     for (j = 0; j < cardPocketNunta.length; j++) {
                //         cardPocketNunta[j].classList.add("displayNone");
                //     }
                //     for (j = 0; j < cardPocketBotez.length; j++) {
                //         cardPocketBotez[j].classList.add("displayNone");
                //     }

                //     for (j = 0; j < cardPocketBanchet.length; j++) {
                //         cardPocketBanchet[j].classList.remove("displayNone");
                //     }
                // }

            }
        }
    }
}