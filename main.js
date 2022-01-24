let genera = document.getElementById('genera')
    genera.addEventListener('click',
    function() {
        let nomeCognome = document.getElementById('nome').value;
        document.getElementById('passeggero').innerHTML = nomeCognome;

        let km = document.getElementById('km').value;

        let eta = document.getElementById('eta').value;

        let prezzo = 0.21 * km

        var sconto20 = prezzo - prezzo * 20 / 100;
        var sconto40 = prezzo - prezzo * 40 / 100;

        if (eta === "minorenne") {
            prezzo = sconto20;
            document.getElementById('offerta').innerHTML = 'Minorenni';
        } else if (eta === "over65") {
            prezzo = sconto40;
            document.getElementById('offerta').innerHTML = 'Over65'
        }   else {
            document.getElementById('offerta').innerHTML = 'Biglietto standard'
        }

        document.getElementById('carrozza').innerHTML = Math.floor((Math.random()* 9) +1);
        document.getElementById('codice').innerHTML = Math.floor((Math.random() * (100000 - 90000) + 1) + 90000);
        document.getElementById('costo').innerHTML = prezzo.toFixed(2) + "€";
        let mostra = document.getElementById('biglietto');
        mostra.classList.remove('nascondi');
    }
);

let annulla = document.getElementById('annulla')
    annulla.addEventListener('click',
    function() {
        let nomeCognome = document.getElementById('nome').value = "";

        let km = document.getElementById('km').value = 0;

        let eta = document.getElementById('eta').value = 'Maggiorenne';

        let nascondi = document.getElementById('biglietto');
        nascondi.classList.add('nascondi');
    }

);
