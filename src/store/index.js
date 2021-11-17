import Vue from "vue";
import Vuex from "vuex";
import ProductsModule from "@/store/modules/products.js";
import CartModule from "@/store/modules/cart.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products: ProductsModule,
    cart: CartModule,
  },
});
