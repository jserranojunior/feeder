import { reactive, toRefs } from "vue";


class UseFabrica {
    public store;

    constructor() {
        this.store = reactive({
            showFabrica: false,
        });
      }
       changeFabrica(value:boolean) {
        console.log("Clicando")
        this.store.showFabrica = value;
      }

  };

  export default new UseFabrica();