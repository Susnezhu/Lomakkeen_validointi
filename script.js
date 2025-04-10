//laittaa kentän "muu, mikä" piiloon ja näyttää, jos on valittu
function checkOther() {
    let select = document.getElementById("country");
    let textarea = document.getElementById("otherText");

    if (select.value === "country_other") {
      textarea.style.display = "block";
    } else {
      textarea.style.display = "none";
    }
  }
checkOther(); //laittaa, kun sivu avautuu "muu, mikä" kentän piiloon

function checkValues() {
    
}