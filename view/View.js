class View {
    #inputA
    #inputB
    #gomb
    #eredmeny
    constructor(szuloElem, inputA, inputB){
        this.szuloElem = szuloElem
        this.#inputA = inputA || 0
        this.#inputB = inputB || 0

        this.#eredmeny = 0

        this.#htmlOsszeallitas()

        this.#gomb = this.szuloElem.children("div").children("button")
        
        this.#gomb.on("click", ()=>{
            this.#esemenyTrigger("adatokFeldolgozasa")
        })

        
    }

    #htmlOsszeallitas(){
        this.szuloElem.html(`
        <div class="szamitas">
            <input type="text" id="input-a" value="${this.#inputA}">
            +
            <input type="text" id="input-b" value="${this.#inputB}">
            <button>Számítás</button>
        </div>

        <div class="eredmeny">
            ${this.#eredmeny}
        </div>
        `)
    }

    inputALekerese(){
        const stringErtek = $("#input-a").val()
        this.#inputA = parseInt(stringErtek)
        return this.#inputA
    }

    inputBLekerese(){
        const stringErtek = $("#input-b").val()
        this.#inputB = parseInt(stringErtek)
        return this.#inputB
    }

    setEredmeny(eredmeny){
        this.#eredmeny = eredmeny
        $(".eredmeny").html(eredmeny)
    }

    #esemenyTrigger(esemenyNev){
        const esemenyem = new CustomEvent(esemenyNev, {detail: this})
        window.dispatchEvent(esemenyem)
    }
}

export default View