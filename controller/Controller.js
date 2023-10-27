import Model from "../model/Model.js"
import View from "../view/View.js"

class Controller {

    constructor(){
        const view = new View($(".tartalom"))
        const model = new Model()

        $(window).on("adatokFeldolgozasa", ()=> {           
            let a = view.inputALekerese()
            let b = view.inputBLekerese()

            let eredmeny = model.osszeadas(a, b)
            view.setEredmeny(eredmeny)
        })

    }
}

export default Controller