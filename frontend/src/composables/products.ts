import { reactive, toRefs } from "vue";


class UseProducts {
    public store;

    constructor() {
        this.store = reactive({
            showProdutos: false,
        });
      }
       changeProdutos(value:boolean) {
        console.log("Clicando")
        this.store.showProdutos = value;
      }

  };

  export default new UseProducts();