import imageRoutes from "@/assets/data/imageRoutes.json";
import Vue from "vue";

const ProductsModule = {
  namespaced: true,
  state: () => ({
    products: [],
    isFavoritesShown: false,
  }),
  getters: {
    favoriteProducts(state) {
      return state.products.filter((product) => product.favorite);
    },
  },
  mutations: {
    addProducts(state, products) {
      state.products = products;
      for (let product of state.products) {
        Vue.set(product, "favorite", false);
        product.price = Math.floor(Math.random() * 250 + 150);
        product.imageUrl =
          imageRoutes[Math.floor(Math.random() * imageRoutes.length)];
      }
    },
    toggleFavorite(state, product) {
      state.products[state.products.indexOf(product)].favorite =
        !state.products[state.products.indexOf(product)].favorite;
    },
    toggleShowFavorites(state) {
      state.isFavoritesShown = !state.isFavoritesShown;
    },
    turnOffShowFavorites(state) {
      state.isFavoritesShown = false;
    },
  },
  actions: {
    getProducts: (context, url) => {
      return fetch(url)
        .then((value) => {
          if (!value.ok) {
            throw Error;
          } else {
            return value.json();
          }
        })
        .then((products) => context.commit("addProducts", products))
        .catch((err) => {
          console.error(err);
        });
    },
  },
};

export default ProductsModule;
