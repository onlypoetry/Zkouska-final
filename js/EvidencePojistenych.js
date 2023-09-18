"use-strict";

/**
 * Třída sloužící k evidenci a následnému výpisu pojištěnců do tabulky v HTML stránce.
 * @member {boolean} jeValidni Oznamuje, zda jsou vstupní data validní či ne
 * @member {string} jmenoVstup Element obsahující vstupní údaj (jméno) zadané uživatelem
 * @member {string} prijmeniVstup Element obsahující vstupní údaj (příjmení) zadané uživatelem
 * @member {string} vekVstup Element obsahující vstupní údaj (věk) zadané uživatelem
 * @member {string} telefonVstup Element obsahující vstupní údaj (telefon) zadané uživatelem
 */
class EvidencePojistenych {
  constructor() {
    this._zaznamy = [];
    this.jmenoVstup = document.getElementById("jmeno");
    this.prijmeniVstup = document.getElementById("prijmeni");
    this.vekVstup = document.getElementById("vek");
    this.telefonVstup = document.getElementById("telefon");
    this.tlacitkoUlozit = document.getElementById("tlacitko-ulozit");
    this.vypisPojistencu = document.querySelector("tbody");
    this.#nastavUdalosti();
    this.validator = new Validator();
  }

  vypisZaznamy() {
    this.vypisPojistencu.innerHTML = "";
    for (const pojistenec of this._zaznamy) {
      this.vypisPojistencu.innerHTML += pojistenec;
    }
  }

  #nastavUdalosti() {
    // this zůstává stále na instanci třídy EvidencePojistenych
    this.tlacitkoUlozit.onclick = () => {
      this.validator.validujCelek(
        this.jmenoVstup,
        this.prijmeniVstup,
        this.vekVstup,
        this.telefonVstup
      );
      if (this.validator.jeValidni) {
        const pojistenec = new Pojistenec(
          this.jmenoVstup.value,
          this.prijmeniVstup.value,
          this.vekVstup.value,
          this.telefonVstup.value
        );
        this._zaznamy.push(pojistenec);
        this.vypisZaznamy();
        this.#vycistiFormular();
      }
    };
  }

  #vycistiFormular() {
    this.jmenoVstup.value = "";
    this.prijmeniVstup.value = "";
    this.vekVstup.value = "";
    this.telefonVstup.value = "";
  }
}
