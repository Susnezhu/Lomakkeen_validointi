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
checkOther(); //kun sivu avautuu, piilottaa kentän: "muu, mikä"

function checkValues() {
    let id = document.getElementById("idInput");
    let password = document.getElementById("passwordInput");
    let name = document.getElementById("nameInput");
    let address = document.getElementById("addressInput");
    let country = document.getElementById("country");
    let postNum = document.getElementById("postNumInput");
    let email = document.getElementById("emailInput");

    let gender = document.querySelector('input[name="choice"]:checked');
    let lang = document.querySelectorAll('.lang .option');
    let moreInfo = document.getElementById("moreInfo");

    let alerting = document.getElementById("alerting");

    let fields = [id, password, name, address, country, postNum, email];

    for (let field of fields) {
        if (field.value == "" || field.value == "nothing") {
            alerting.innerText = "Täytä kaikki pakolliset kentät! *";
            return;
        }
    }

    if (!gender) {
        alerting.innerText = "Täytä kaikki pakolliset kentät! *";
        return;
    }

    let isLanguageSelected = Array.from(lang).some(language => language.checked);

    if (!isLanguageSelected) {
        alerting.innerText = "Täytä kaikki pakolliset kentät! *";
        return;
    }

    checkAgain(id.value.trim(), password.value, postNum.value.trim(),email.value, alerting);
}


//taskistaa onko kaikki kirjoitettu oikein ja oikeissa muodoissa
function checkAgain(id, password, postNum,email, alerting) {
    alerting.innerText = "";

    //ID tarkistus:
    if (id.length < 6) {
        alerting.innerText = "ID pitää olla vähintään 6 merkkiä pitkä";
        return
    }


    //salasanan tarkistus:
    let errorMessages = [];

    if (password.length < 6) {
      errorMessages.push("Salasanan pitää olla 6 merkkiä pitkä");
    }
    
    if (!/[1234567890]/.test(password)) {
      errorMessages.push("Salasanassa pitää sisältää numero");
    }
    
    if (!/[ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ]/.test(password)) {
      errorMessages.push("Salasanassa pitää sisältää iso kirjain");
    }
    
    if (!/[!@£$€&%#]/.test(password)) {
      errorMessages.push("Salasanassa pitää sisältää erikoismerkki: !@£$€&%#");

    }
    
    if (errorMessages.length > 0) {
      alerting.innerText = errorMessages.join("\n");
      return
    }


    //postinumero tarkistus:
    if (postNum.length != 5) {
        alerting.innerText = "Postinumerossa pitää olla 5 numeroa"
        return
    }


    //sähköpostin tarkistus:
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1 || email.indexOf('@') > email.indexOf('.')) {
        alerting.innerText = "Sähköpostiosoitteen tulee olla sähköpostiosoitteen muotoinen.";
        return
      }


    //viesti, jos kaikki oikein
    alerting.style.color = "black";
    alerting.innerText = "Kaikki tiedot oikein, kiitos!";
}