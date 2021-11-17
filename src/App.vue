<template>
  <div id="app">
    <Header
      @onCartClicked="onCartClicked"
      @onProductsListClicked="onProductsListClicked"
      :isCartSelected="isCartSelected"
    />
    <Products class="products-list" v-if="!isCartSelected" />
    <Cart class="products-list" v-if="isCartSelected" />
  </div>
</template>

<script>
import Products from "@/components/Products";
import Cart from "@/components/Cart";
import Header from "@/components/Header";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Products,
    Header,
    Cart,
  },
  data() {
    return {
      isCartSelected: false,
    };
  },
  created() {
    this.getProducts(
      "https://random-data-api.com/api/food/random_food?size=30"
    );
  },
  methods: {
    ...mapActions("products", ["getProducts"]),
    onCartClicked() {
      this.isCartSelected = true;
    },
    onProductsListClicked() {
      this.isCartSelected = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #216bff;
  box-sizing: border-box;
}

html,
body,
#app {
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}

.products-list {
  padding: 30px;
}
</style>
