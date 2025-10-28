import { reactive, toRefs } from "vue";


class UseLang {
    public store;

    constructor() {
        this.store = reactive({
            lang: "pt",
        });
      }
 

  };

  export default new UseLang();