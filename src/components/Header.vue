<template>
  <div class="header">
    <div class="header-logo">FOOD DELIVERY</div>
    <div class="header-buttons">
      <div class="products-buttons">
        <button :class="productsClass" @click="onProductsListClicked">
          Products List
        </button>
        <button :class="favoriteClass" @click="onFavoritesClicked">
          &#10084;
        </button>
      </div>
      <button @click="onCartClicked" :class="cartClass">Cart</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  props: {
    isCartSelected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState("cart", ["cartProducts"]),
    ...mapState("products", ["isFavoritesShown"]),
    isCartEmpty() {
      return !this.cartProducts.length;
    },
    productsClass() {
      return [
        "button",
        {
          "button-active": !this.isCartSelected,
        },
      ];
    },
    favoriteClass() {
      return [
        "button-favorite",
        {
          "button-checked": this.isFavoritesShown,
        },
        {
          "button-hide": this.isCartSelected,
        },
      ];
    },
    cartClass() {
      return [
        "button",
        {
          "button-cart-not-empty": !this.isCartEmpty && !this.isCartSelected,
        },
        {
          "button-active": this.isCartSelected,
        },
      ];
    },
  },
  methods: {
    ...mapMutations("products", [
      "toggleShowFavorites",
      "turnOffShowFavorites",
    ]),
    onProductsListClicked() {
      this.turnOffShowFavorites();
      this.$emit("onProductsListClicked");
    },
    onFavoritesClicked() {
      this.toggleShowFavorites();
    },
    onCartClicked() {
      this.turnOffShowFavorites();
      this.$emit("onCartClicked");
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 70px;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: #fff;
  border-bottom: 6px solid #f91155;
  padding: 0 40px;
}

.header-logo {
  font-weight: bold;
  width: 200px;
}

.header-buttons {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.products-buttons {
  display: flex;
  gap: 10px;
}

.button {
  background-color: #999;
  min-width: 200px;
  color: #fff;
  padding: 14px;
  border: none;
  border-radius: 10px;
  transition: 200ms;
}

.button-favorite {
  background-color: #999;
  min-width: 40px;
  color: #fff;
  padding: 14px;
  border: none;
  border-radius: 10px;
  transition: 200ms;
}

.button-favorite:hover {
  cursor: pointer;
}

.button-hide {
  display: none;
}

.button:hover {
  cursor: pointer;
}

.button-active {
  background-color: #216bff;
}

.button-cart-not-empty {
  background-color: #f91155;
}

.button-checked {
  background-color: #f91155;
}
</style>
