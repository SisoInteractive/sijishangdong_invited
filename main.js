"use strict";

var idList = [];

for (var i = 1; i <= 150; i++) {
    var id = i;

    if ((i+"i").indexOf('4') == -1) {
        if (id < 10) {
            id = '00' + i;
        }
        else if (id < 100) {
            id = "0" + i;
        }

        idList.push('888' + id);
    }
}

console.dir(idList.length);
