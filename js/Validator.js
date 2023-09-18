"use-strict";

/**
 * Validační třída, která provádí validaci všech vstupních dat z formuláře
 * @member {boolean} jeValidni Oznamuje, zda jsou vstupní data validní či ne
 * @member {string} chyba Obsahuje chybové hlášky při neúspěšné validaci
 */
class Validator {
  constructor() {
    this.jeValidni = true;
    this.chybneUdaje = document.getElementById("chybne-udaje");
  }

  /**
   * Validační metoda, která bere data z formulářových polí a validuje je.
   * V případě neúspěšné validace uloží chybové hlášení do chybových zpráv
   * a ty následně vypíše do elementu v HTML stránce
   * @param {string} jmeno jméno pojištěnce
   * @param {string} prijmeni příjmení pojištěnce
   * @param {number} vek věk pojištěnce
   * @param {string} telefon telefon pojištěnce
   * @var {string} chyboveZpravy výpis chybových stavů do elementu v HTML stránce
   */
  validujCelek(jmeno, prijmeni, vek, telefon) {
    let chyboveZpravy = "";
    this.jeValidni = true;
    const overJmeno = this.#validujJmeno(jmeno);
    const overPrijmeni = this.#validujPrijmeni(prijmeni);
    const overVek = this.#validujVek(vek);
    const overTelefon = this.#validujTel(telefon);
    let vymazat = this.chybneUdaje.innerHTML = "";

    if (overJmeno) {
      chyboveZpravy += overJmeno;
    }

    if (overPrijmeni) {
      chyboveZpravy += overPrijmeni;
    }

    if (overVek) {
      chyboveZpravy += overVek;
    }

    if (overTelefon) {
      chyboveZpravy += overTelefon;
    }

    if (chyboveZpravy) this.jeValidni = false;
    this.chybneUdaje.innerHTML = chyboveZpravy;

  }

  #validujJmeno(jmeno) {
    if (!jmeno.value.trim() || jmeno.value.replace(/[\p{L}\p{M}]+/u, "")) {
      return `Nesprávně zadané jméno. <br>`;
    }
  }

  #validujPrijmeni(prijmeni) {
    if (
      !prijmeni.value.trim() ||
      prijmeni.value.replace(/[\p{L}\p{M}]+/u, "")
    ) {
      return `Nesprávně zadané příjmení. <br>`;
    }
  }

  #validujVek(vek) {
    if (vek.value > 120 || vek.value < 1) {
      return `Nesprávně zadaný věk. <br>`;
    }
  }

  #validujTel(telefon) {
    if (
      telefon.value
        .replaceAll(" ", "")
        .replaceAll("+", "")
        .replace(/^\d+$/, "") ||
      !telefon.value
    ) {
      return `Nesprávně zadané telefonní číslo.`;
    }
  }
}
