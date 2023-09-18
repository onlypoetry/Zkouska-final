"use-strict";

/**
 * Třída sloužící k vytváření jednotlivých pojištěnců, kteří jsou poté ve třídě
 * EvidencePojistenych následně zaevidováni.
 * @member {string} jmeno jméno pojištěnce
 * @member {string} prijmeni příjmení pojištěnce
 * @member {number} vek věk pojištěnce
 * @member {string} telefon telefon pojištěnce
 */
class Pojistenec {
  constructor(jmeno, prijmeni, vek, telefon) {
    this.jmeno = jmeno;
    this.prijmeni = prijmeni;
    this.vek = vek;
    this.telefon = telefon;
  }

  /**
   * Přednastavená metoda toString() vrací zadané vlastnosti třídy Pojištěnec
   * a předává je dále třídě EvidencePojistenych
   */
  toString() {
    return `<tr><td>${this.jmeno} ${this.prijmeni}</td>
    <td>${this.telefon}</td><td>${this.vek}</td></tr>`;
  }
}
