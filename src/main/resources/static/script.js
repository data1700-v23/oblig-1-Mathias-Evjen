const billetter = [];

function leggTilBillett() {

    // Sjekker om feltene er tomme
    if (document.getElementById("filmer").value === "default") {
        document.getElementById("filmError").innerHTML = "Må velge en film";
    } else {
        document.getElementById("filmError").innerHTML = "";
    }
    erTom("antall", "antallError");
    erTom("fornavn", "fornavnError");
    erTom("etternavn", "etternavnError");
    erTom("tlfnr", "tlfError");
    erTom("epost", "epostError");

    // Dersom feltene har en error skal funksjonen returnere
    if (document.getElementById("filmError").innerHTML !== "" ||
        document.getElementById("antallError").innerHTML !== "" ||
        document.getElementById("fornavnError").innerHTML !== "" ||
        document.getElementById("etternavnError").innerHTML !== "" ||
        document.getElementById("tlfError").innerHTML !== "" ||
        document.getElementById("epostError").innerHTML !== "") {
        return;
    }

    let eksisterendeBilletter = billetter.length; // Lagrer antall billetter allerede skrevet ut

    // Array med navn på filmer indeksert tilsvarende verdier i "filmer"-select
    const filmer = ["Dune", "Spider-Man", "The Lord of the Rings", "La La Land"];

    // Oppretter et billett-objekt fra inputs
    const billett = {
        film: filmer[document.getElementById('filmer').value],
        antall: document.getElementById('antall').value,
        fornavn: document.getElementById('fornavn').value,
        etternavn: document.getElementById('etternavn').value,
        tlf: document.getElementById('tlfnr').value,
        epost: document.getElementById('epost').value
    };

    billetter.push(billett); //Legger til billett-objekt i billetter-arrayet

    // Skriver ut billetter i billeter-arrayet som ikke allerede er skrevet ut
    for (let i = eksisterendeBilletter; i < billetter.length; i++) {
        let nyttAvsnitt = document.createElement("p");
        nyttAvsnitt.textContent = "Film: " + billetter[i].film + ", antall: " + billetter[i].antall + ", Navn: " + billetter[i].fornavn + " " + billetter[i].etternavn + ", telefonnummer: " + billetter[i].tlf + ", epost: " + billetter[i].epost;
        document.getElementById("billetter").appendChild(nyttAvsnitt);
        document.getElementById("billetter").appendChild(document.createElement("br"));
    }

    // Resetter inputs etter at billett blir kjøpt
    document.getElementById("filmer").selectedIndex = "default";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("tlfnr").value = "";
    document.getElementById("epost").value = "";


}

function slettBilletter() {
    while (billetter.length !== 0) {
        billetter.pop();
    }
    document.getElementById("billetter").innerHTML = "";
}

function sjekkSkrivefeilNavn(navn, error) {
    let tillatt = /^[a-zA-Z]*$/;

    if (!tillatt.test(document.getElementById(navn).value)) {
        document.getElementById(error).innerHTML = "Ikke gyldig fornavn";
    } else {
        document.getElementById(error).innerHTML = "";
    }
}

function sjekkTlf() {
    let tillatt = /^[0-9]*$/;

    if (!tillatt.test(document.getElementById("tlfnr").value) || document.getElementById("tlfnr").value.length !== 8) {
        document.getElementById("tlfError").innerHTML = "Ikke gyldig telefonnummer";
    } else {
        document.getElementById("tlfError").innerHTML = "";
    }
}

function sjekkEpost() {
    let trenger = /\S+@\S+\.\S+$/;

    if (!trenger.test(document.getElementById("epost").value)) {
        document.getElementById("epostError").innerHTML = "Ikke gyldig epostadresse";
    } else {
        document.getElementById("epostError").innerHTML = "";
    }
}

function erTom(id, error) {
    if (document.getElementById(id).value === "") {
        document.getElementById(error).innerHTML = "Må fylles inn";
        return true;
    } else {
        document.getElementById(error).innerHTML = "";
        return false;
    }
}

function erFyltFilm() {
    if (document.getElementById("filmer").value != "default") {
        document.getElementById("filmError").innerHTML = "";
    } else {
        document.getElementById("filmError").innerHTML = "Må velge en film";
    }
}