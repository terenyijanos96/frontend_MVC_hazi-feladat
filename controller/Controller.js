import Model from "../model/Model.js";
import View from "../view/View.js";

class Controller {
  constructor() {
    const view = new View($(".tartalom"));
    const model = new Model();

    $(window).on("adatokFeldolgozasa", (event) => {
      const obj = event.detail;

      let eredmeny = model.osszeadas(obj.a, obj.b);
      view.setEredmeny(eredmeny);
    });
  }
}

export default Controller;
