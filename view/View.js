class View {
  #inputA;
  #inputB;
  #gomb;
  #eredmeny;
  constructor(szuloElem) {
    this.szuloElem = szuloElem;

    this.#htmlOsszeallitas();

    this.#inputA = this.szuloElem.find("#input-a");
    this.#inputB = this.szuloElem.find("#input-b");
    this.#gomb = this.szuloElem.find("button");
    this.#eredmeny = this.szuloElem.find(".eredmeny");

    this.#gomb.on("click", () => {
      this.#esemenyTrigger("adatokFeldolgozasa");
    });
  }

  #htmlOsszeallitas() {
    this.szuloElem.html(`
        <div class="szamitas">
            <input type="text" id="input-a" value="0">
            +
            <input type="text" id="input-b" value="0">
            <button>Számítás</button>
        </div>

        <textarea class="eredmeny" disabled>0</textarea>
        `);
  }

  #ertekLekerese(html_elem) {
    const stringErtek = html_elem.val();
    return parseInt(stringErtek);
  }

  getinputA() {
    return this.#ertekLekerese(this.#inputA);
  }

  getinputB() {
    return this.#ertekLekerese(this.#inputB);
  }

  setEredmeny(ertek) {
    this.#eredmeny.val(ertek);
  }

  #esemenyTrigger(esemenyNev) {
    const obj = {
      a: this.getinputA(),
      b: this.getinputB(),
    };

    const esemenyem = new CustomEvent(esemenyNev, { detail: obj });
    window.dispatchEvent(esemenyem);
  }
}

export default View;
