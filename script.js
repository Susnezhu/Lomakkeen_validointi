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

    let fields = [id, password, name, address, country, postNum, email];

    for (let field of fields) {
        if (field.value == "" || field.value == "nothing") {
            alert("Täytä kaikki pakolliset kentät!");
            return;
        }
    }

    if (!gender) {
        alert("Täytä kaikki pakolliset kentät!");
        return;
    }

    let isLanguageSelected = Array.from(lang).some(language => language.checked);

    if (!isLanguageSelected) {
        alert("Täytä kaikki pakolliset kentät!");
        return;
    }

    checkAgain();
}


function checkAgain() {
    alert("kaikki kentät täytetty")
    //taskistaa onko kaikki kirjoitettu oikein ja oikeissa muodoissa
}