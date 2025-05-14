//Kaikki kentät
const id = document.getElementById("idInput");
const password = document.getElementById("passwordInput");
const name = document.getElementById("nameInput");
const address = document.getElementById("addressInput");
const country = document.getElementById("country");
const postNum = document.getElementById("postNumInput");
const email = document.getElementById("emailInput");
const moreInfo = document.getElementById("moreInfo");

//Viesti käyttäjälle punaisella
let alerting = document.getElementById("alerting");

//muu maa ja tekstilokero
const select = document.getElementById("country");
const textarea = document.getElementById("otherText");

const sendBtn = document.getElementById("send");

const fields = [id, password, name, address, country, postNum, email];

//laittaa kentän "muu, mikä" piiloon ja näyttää, jos on valittu
function countryFieldMore() {
    if (select.value === "country_other") {
        textarea.style.display = "block";
    } else {
        textarea.style.display = "none";
    }
}

countryFieldMore(); //kun sivu avautuu, piilottaa kentän: "muu, mikä"
select.addEventListener("change", countryFieldMore); //tarkistaa ja avaa kentä "muu, mikä", jos se on valittu

function showErrorField(field, value) {
    if (value) {
        field.style.border = "2px solid red";
    } else {
        field.style.border = "1px solid black";
    }
}

//tarkistaa, onko kenttä tyhjä
function checkEmptyField() {
    //saa uudet arvot, kun käyttäjä valitsee ja painaa lähetä
    const gender = document.querySelector('input[name="choice"]:checked');
    const lang = document.querySelectorAll('.lang .option');

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

    checkFields();
}


//taskistaa onko kaikki kirjoitettu oikein ja oikeissa muodoissa
function checkFields() {
    alerting.innerText = "";
    alerting.style.color = "red";

    
    let errorMessages = [];

    showErrorField(password, false);
    //salasanan tarkistus:
    if (password.value.length < 6) {
        errorMessages.push("Salasanan pitää olla 6 merkkiä pitkä");
        showErrorField(password, true);
    }
    
    if (!/[1234567890]/.test(password.value)) {
        errorMessages.push("Salasanassa pitää sisältää numero");
        showErrorField(password, true);
    }
    
    if (!/[ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ]/.test(password.value)) {
        errorMessages.push("Salasanassa pitää sisältää iso kirjain");
        showErrorField(password, true);
    }
    
    if (!/[!@£$€&%#]/.test(password.value)) {
        errorMessages.push("Salasanassa pitää sisältää erikoismerkki: !@£$€&%#");
        showErrorField(password, true);
    }

    showErrorField(id, false);
    //id tarkistus
    if (id.value.trim().length < 6) {
        errorMessages.push("ID pitää olla vähintään 6 merkkiä pitkä");
        showErrorField(id, true);
    }

    showErrorField(postNum, false);
    //postinumero tarkistus:
    if (postNum.value.trim().length != 5) {
        errorMessages.push( "Postinumerossa pitää olla 5 numeroa");
        showErrorField(postNum, true);
    }

    showErrorField(email, false);
    //sähköpostin tarkistus:
    if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1 || email.value.indexOf('@') > email.value.indexOf('.')) {
        errorMessages.push("Sähköpostiosoitteen tulee olla sähköpostiosoitteen muotoinen.");
        showErrorField(email, true);
    }
    
    if (errorMessages.length > 0) {
        alerting.innerText = errorMessages.join("\n");
        return;
    }
    

    //viesti, jos kaikki oikein
    alerting.style.color = "black";
    alerting.innerText = "Kaikki tiedot oikein, kiitos!";
}


sendBtn.onclick = function() {
    checkEmptyField()
}