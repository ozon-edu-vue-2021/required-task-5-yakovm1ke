<template>
  <div class="cart-info-wrapper">
    <div class="cart-info">
      <h1 class="cart-header">Order Details</h1>
      <div class="order-create">
        <button class="order-create-button" @click="onOrderCreateClicked">
          Create an order
        </button>
      </div>
      <div class="total-price">
        Total price: <span>{{ totalPrice }} &#8381;</span>
      </div>
      <div class="cart-counter">
        Total products: <span>{{ totalCounter }}</span>
      </div>
      <div class="clear-cart">
        <button class="clear-cart-button" @click="clearCart">Clear cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters("cart", ["totalPrice", "totalCounter"]),
  },
  methods: {
    ...mapMutations("cart", ["clearCart"]),
    onOrderCreateClicked() {
      this.$emit("onOrderCreateClicked");
    },
  },
};
</script>

<style scoped>
.cart-info {
  width: 500px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.cart-header {
  margin: 0 auto;
}

.order-create {
  width: 100%;
}

.order-create-button {
  width: 100%;
  height: 50px;
  border: none;
  padding: 6px;
  font-size: 20px;
  border-radius: 10px;
  font-weight: bold;
  background-color: #33cc66;
  color: #2c3e50;
  transition: 200ms;
  text-transform: uppercase;
}

.order-create-button:hover {
  cursor: pointer;
}
.total-price,
.cart-counter {
  display: flex;
  justify-content: space-between;
}

.total-price span,
.cart-counter span {
  font-weight: bold;
}

.clear-cart {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.clear-cart-button {
  width: 100px;
  background-color: #f91155;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 6px;
}
.clear-cart-button:hover {
  cursor: pointer;
}
</style>
