function MyName() {

  var nome = prompt("Inserisci il tuo nome:");

  if (nome == null || nome == "" || nome != 'Lorenzo Fazioli') {

      alert("Non hai inserito il nome giusto");

      return false;
  } else {

      alert("Ciao");

      return true;
  }
}

while(!MyName());

function digit(n){
  document.querySelector("#display").value =  document.querySelector("#display").value+n
}
function cancella() {
   document.querySelector("#display").value = '';
}

function ris() {
  document.querySelector("#display").value  = eval(document.querySelector("#display").value);

}


