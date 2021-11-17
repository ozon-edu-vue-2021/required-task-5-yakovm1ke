<template>
  <div class="cart-product">
    <img
      :src="require(`@/assets/images/${cartProduct.imageUrl}`)"
      :alt="cartProduct.dish"
    />
    <div class="cart-product-info">
      <div class="cart-product-header">
        <div class="cart-product-name">
          {{ cartProduct.dish }}
        </div>
        <div class="cart-product-description">
          {{ cartProduct.description }}
        </div>
      </div>
      <div class="purchase-container">
        <div class="cart-buttons-container">
          <button class="remove-button" @click="onRemoveClicked">Remove</button>
          <div class="counter-container">
            <span class="counter-number">
              {{ cartProduct.counter }}
            </span>
            <div class="counter-buttons">
              <button class="counter-button" @click="onCounterDecreaseClicked">
                -
              </button>
              <button class="counter-button" @click="onCounterIncreaseClicked">
                +
              </button>
            </div>
          </div>
        </div>
        <div class="cart-product-price">
          {{ cartProduct.price }} &#8381; &times; {{ cartProduct.counter }} =
          {{ sumPrice }} &#8381;
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    cartProduct: {
      id: {
        type: Number,
        required: true,
      },
      uid: {
        type: String,
        required: true,
      },
      dish: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
      imageUrl: {
        type: String,
        default: "",
      },
      price: {
        type: Number,
        default: 0,
      },
      counter: {
        type: Number,
        required: true,
      },
    },
  },
  computed: {
    sumPrice() {
      return this.cartProduct.price * this.cartProduct.counter;
    },
  },
  methods: {
    ...mapMutations("cart", [
      "deleteFromCart",
      "increaseCartProductCounter",
      "decreaseCartProductCounter",
    ]),
    onRemoveClicked() {
      this.deleteFromCart(this.cartProduct);
    },
    onCounterDecreaseClicked() {
      this.decreaseCartProductCounter(this.cartProduct);
    },
    onCounterIncreaseClicked() {
      this.increaseCartProductCounter(this.cartProduct);
    },
  },
};
</script>

<style scoped>
.cart-product {
  border-radius: 10px;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.cart-product img {
  max-width: 150px;
}

.cart-product-info {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
}

.cart-product-name {
  font-weight: bold;
  color: #f91155;
  margin-bottom: 10px;
}

.cart-product-description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}

.purchase-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-buttons-container {
  display: flex;
  gap: 30px;
}

.remove-button {
  width: 100px;
  background-color: #f91155;
  color: #fff;
  padding: 6px;
  border: none;
  border-radius: 10px;
  transition: 200ms;
}

.remove-button:hover {
  cursor: pointer;
}

.cart-product-price {
  font-weight: bold;
}

.counter-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.counter-number {
  border-radius: 10px;
  padding: 6px;
  width: 40px;
  color: #fff;
  background-color: #216bff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}

.counter-buttons {
  display: flex;
  flex-direction: row;
  gap: 4px;
}

.counter-button {
  background-color: #999;
  width: 30px;
  color: #fff;
  border: none;
}

.counter-button:hover {
  cursor: pointer;
}
</style>
