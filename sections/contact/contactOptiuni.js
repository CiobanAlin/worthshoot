function contactOptiuni() {
    var contactOpt = [
        ([
            ([classOpt = ['cardPocketEveniment']]),
            ([
                [(value = ['EFFizic']), (html = ['Persoană Fizică -100lei/h'])],
                [(value = ['EFJuridic']), (html = ['Persoană Juridică -150lei/h'])],
                [(value = ['EFC']), (html = ['Ofertă'])]
            ])
        ]),
        (classOpt = ['cardPocketReclama']),
        ([
            [(value = ['RF1']), (html = ['RF1 -100lei'])],
            [(value = ['RF5']), (html = ['RF5 -250lei'])],
            [(value = ['RFC']), (html = ['Ofertă'])]
        ]),
        (classOpt = ['cardPocketSedintaFoto']),
        ([
            [(value = ['SFoto']), (html = ['SFoto -60lei'])],
            [(value = ['SFCuplu']), (html = ['SFotoCuplu -100lei'])],
            [(value = ['SFotoC']), (html = ['Ofertă'])]
        ]),
        (classOpt = ['cardPocketNunta']),
        ([
            [(value = ['NF1']), (html = ['NFoto1 -440e'])],
            [(value = ['NF2']), (html = ['NFoto2 -1090e'])],
            [(value = ['NFC']), (html = ['Ofertă'])]
        ]),
        (classOpt = ['cardPocketBotez']),
        ([
            [(value = ['BoF1']), (html = ['BFoto1 -190e'])],
            [(value = ['BoF2']), (html = ['BFoto2 -290e'])],
            [(value = ['BoFC']), (html = ['Ofertă'])]
        ]),
        (classOpt = ['cardPocketBanchet']),
        ([
            [(value = ['BaF1']), (html = ['BanchetFoto1 -60lei/persoană'])],
            [(value = ['BaF2']), (html = ['BanchetFoto2 -80lei/persoană'])],
            [(value = 'BaFC'), (html = 'Ofertă')]
        ])
    ];
    // console.log(contactOpt);
    // console.log(contactOpt[1]);
    // console.log(contactOpt[1][1]);
    // console.log(contactOpt[5][2][0]);
    // console.log(contactOpt.length);
    // name='Pachet'
    var option = document.createElement('option');
    var optionParent = document.getElementsByName('Pachet')[0];
    optionParent.appendChild(option);
    option.classList.add(contactOpt[0][0][0][0]);
    // console.log(contactOpt[5]);
    option.setAttribute("value", contactOpt[0][1][0][0][0]);
    option.innerHTML = contactOpt[0][1][0][1][0];
    console.log(option);
    // console.log(document.getElementsByName('Pachet')[0].innerHTML);
    // console.log(document.getElementsByName('Pachet').innerHTML);
    // console.log(contactOpt[0]);
    console.log(contactOpt[0][0][0][0], "class");
    // console.log(contactOpt[0][1][0]);
    console.log(contactOpt[0][1][0][0][0], "value");
    console.log(contactOpt[0][1][0][1][0], "html");
}