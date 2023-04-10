function azzera() {
    primoValore("");
    secondoValore("");
    display("");
}

function $(id) {
    return document.getElementById(id);
}

/**
 * Returns or set the display value.
 * 
 * @author =lory=
 * @version 0.1.0
 * @since v1.4
 * 
 * @param {number} value 
 * 
 * @returns If the input params is not defined returns the value of the display
 */
function display(value) {
    if(value !== undefined) {
        return $("display").innerHTML;
    }

    $("display").innerHTML = value;
}

function primoValore(value) {
    if(value === undefined) {
        return parseInt($("numero1").value);
    }

    $("numero1").value = value;
}

function secondoValore(value) {
    if(value === undefined) {
        return $("numero2").value;
    }

    $("numero2").value = value;
}

function som() {
    var n1 = primoValore();
    var n2 = parseInt(secondoValore());

    var risultato = n1 + n2;

    Maxlength = 6;

    $("display").innerHTML = risultato;

    if (isNaN(risultato)) {
        primoValore('');
        secondoValore("");

        display("");
        
        alert("inserisci due numeri");

    } else if(risultato > Maxlength) {
        display(risultato.toPrecision(3));
    }
}

const lorenzo = () => {
    
}