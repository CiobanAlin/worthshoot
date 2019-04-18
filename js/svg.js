function svg() {
        // arrow
        var i;
        var scrollToPacket = document.getElementsByClassName("scrollToPacket");
        console.log("scrollToPacket: " + scrollToPacket.length);
        scrollToPacket[0].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 2048 2048" style=" margin-left: -15px; margin-top: 2px; fill: #f68937;"><path d="M1523 1440q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23zm0-384q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>';

        var gift = document.getElementsByClassName("gift");
        console.log("gift: " + gift.length);
        for (i = 0; i < gift.length; i++) {
                console.log(3);
                gift[i].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="868.000000pt" height="981.000000pt" viewBox="0 0 868.000000 981.000000" preserveAspectRatio="xMidYMid meet" style="&#10;    height: 20px;    width: 20px;&#10;"><g transform="translate(0.000000,981.000000) scale(0.100000,-0.100000)" fill="#c57283" stroke="none" style="&#10;    width: 50px;&#10;    height: 50px;&#10;"><path d="M6620 9789 c-281 -36 -561 -143 -825 -317 -543 -355 -1046 -1054 -1414 -1964 -39 -97 -93 -243 -121 -325 -28 -81 -53 -155 -56 -163 -3 -8 -19 37 -35 100 -149 588 -374 1120 -639 1515 -184 273 -413 517 -610 648 -186 123 -390 207 -590 243 -129 24 -356 24 -473 1 -489 -97 -832 -462 -898 -954 -15 -116 -6 -342 20 -454 105 -463 384 -823 900 -1162 76 -51 156 -102 178 -114 l38 -22 -1047 -1 -1048 0 0 -1240 0 -1240 310 0 310 0 0 -2170 0 -2170 3720 0 3720 0 0 2170 0 2170 310 0 310 0 0 1240 0 1240 -911 0 -910 0 102 77 c217 165 436 372 573 543 203 254 352 566 417 870 30 140 34 450 7 576 -80 370 -285 640 -602 794 -114 56 -208 84 -346 105 -102 16 -284 18 -390 4z m322 -700 c244 -52 373 -262 339 -549 -23 -185 -109 -401 -233 -582 -115 -169 -345 -389 -594 -568 -240 -173 -622 -381 -946 -514 l-136 -56 -250 2 -250 3 63 176 c179 503 404 948 648 1284 336 462 671 718 1048 800 79 17 240 19 311 4z m-4712 -254 c231 -49 428 -194 635 -470 189 -251 343 -549 475 -916 58 -161 133 -410 125 -417 -6 -6 -92 18 -255 70 -514 165 -939 390 -1230 653 -167 150 -253 281 -306 466 -23 80 -26 104 -22 208 4 105 7 123 35 183 41 87 101 151 177 188 103 51 233 63 366 35z m1490 -3255 l0 -620 -1550 0 -1550 0 0 620 0 620 1550 0 1550 0 0 -620z m4340 0 l0 -620 -1550 0 -1550 0 0 620 0 620 1550 0 1550 0 0 -620z m-4340 -2945 l0 -2015 -1240 0 -1240 0 0 2015 0 2015 1240 0 1240 0 0 -2015z m3720 0 l0 -2015 -1240 0 -1240 0 0 2015 0 2015 1240 0 1240 0 0 -2015z"/></g></svg>';
        }

        var check = document.getElementsByClassName("check");
        for (i = 0; i < check.length; i++) {
                check[i].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="20px" height="20px" viewBox="0 0 840.000000 635.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,635.000000) scale(0.100000,-0.100000)" fill="#21B866" stroke="none"><path d="M7005 5832 c-563 -344 -1075 -733 -1660 -1261 -196 -176 -830 -811 -1021 -1021 -511 -562 -989 -1152 -1409 -1738 -56 -78 -85 -110 -95 -106 -8 3 -370 205 -803 450 -434 245 -790 444 -791 442 -3 -3 1873 -2181 1883 -2186 4 -1 37 60 75 135 441 889 980 1809 1481 2528 723 1038 1451 1869 2460 2808 28 26 48 47 45 46 -3 0 -77 -44 -165 -97z"/></g></svg>';
        }

        var checkDouble = document.getElementsByClassName("checkDouble");
        for (i = 0; i < checkDouble.length; i++) {
                checkDouble[i].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="20px" height="20px" viewBox="0 0 840.000000 635.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,635.000000) scale(0.100000,-0.100000)" fill="#1fa0fe" stroke="none"><path d="M7005 5832 c-563 -344 -1075 -733 -1660 -1261 -196 -176 -830 -811 -1021 -1021 -511 -562 -989 -1152 -1409 -1738 -56 -78 -85 -110 -95 -106 -8 3 -370 205 -803 450 -434 245 -790 444 -791 442 -3 -3 1873 -2181 1883 -2186 4 -1 37 60 75 135 441 889 980 1809 1481 2528 723 1038 1451 1869 2460 2808 28 26 48 47 45 46 -3 0 -77 -44 -165 -97z"/></g></svg>';
        }
}