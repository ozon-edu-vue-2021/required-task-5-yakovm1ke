import Vue from "vue";

const CartModule = {
  namespaced: true,
  state: () => ({
    cartProducts: [],
  }),
  mutations: {
    addToCart(state, [cartProduct, counter]) {
      if (state.cartProducts.indexOf(cartProduct) < 0) {
        Vue.set(cartProduct, "counter", counter);
        state.cartProducts.push(cartProduct);
      } else {
        state.cartProducts[state.cartProducts.indexOf(cartProduct)].counter +=
          counter;
      }
    },
    deleteFromCart(state, cartProduct) {
      state.cartProducts.splice(state.cartProducts.indexOf(cartProduct), 1);
    },
    increaseCartProductCounter(state, cartProduct) {
      state.cartProducts[state.cartProducts.indexOf(cartProduct)].counter++;
    },
    decreaseCartProductCounter(state, cartProduct) {
      if (
        state.cartProducts[state.cartProducts.indexOf(cartProduct)].counter > 1
      ) {
        state.cartProducts[state.cartProducts.indexOf(cartProduct)].counter--;
      } else if (
        state.cartProducts[state.cartProducts.indexOf(cartProduct)].counter ===
        1
      ) {
        state.cartProducts.splice(state.cartProducts.indexOf(cartProduct), 1);
      }
    },
    clearCart(state) {
      state.cartProducts = [];
    },
  },
  getters: {
    totalPrice(state) {
      return state.cartProducts.reduce((prev, curr) => {
        return prev + curr.price * curr.counter;
      }, 0);
    },
    totalCounter(state) {
      return state.cartProducts.reduce((prev, curr) => {
        return prev + curr.counter;
      }, 0);
    },
  },
};

export default CartModule;
