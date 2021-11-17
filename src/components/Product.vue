<template>
  <div class="product">
    <img
      :src="require(`@/assets/images/${product.imageUrl}`)"
      :alt="product.dish"
    />
    <div class="product-name">
      {{ product.dish }}
      <button :class="favoriteClass" @click="onFavoriteClicked">
        &#10084;
      </button>
    </div>
    <div class="product-info">
      <div class="product-description">{{ product.description }}</div>
      <div class="purchase-container">
        <button class="add-to-cart-button" @click="onAddToCartClicked">
          Add to cart
        </button>
        <div class="counter-container">
          <span class="counter-number">{{ counter }}</span>
          <div class="counter-buttons">
            <button class="counter-button" @click="onCounterDecreaseClicked">
              -
            </button>
            <button class="counter-button" @click="onCounterIncreaseClicked">
              +
            </button>
          </div>
        </div>
        <div class="product-price">{{ product.price }} &#8381;</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    product: {
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
      favorite: {
        type: Boolean,
        default: false,
      },
    },
  },
  data() {
    return {
      counter: 1,
    };
  },
  computed: {
    favoriteClass() {
      return [
        "product-favorite",
        {
          "product-favorite-selected": this.product.favorite,
        },
      ];
    },
  },
  methods: {
    ...mapMutations("cart", ["addToCart"]),
    ...mapMutations("products", ["toggleFavorite"]),
    onAddToCartClicked() {
      this.addToCart([this.product, this.counter]);
      this.counter = 1;
    },
    onCounterIncreaseClicked() {
      this.counter++;
    },
    onCounterDecreaseClicked() {
      if (this.counter > 1) {
        this.counter--;
      }
    },
    onFavoriteClicked() {
      this.toggleFavorite(this.product);
    },
  },
};
</script>

<style scoped>
.product {
  border-radius: 10px;
  width: 100%;
  background-color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.product img {
  width: 100%;
}

.product-name {
  font-weight: bold;
  color: #f91155;
  margin: 10px 0;
}

.product-favorite {
  background-color: #fff;
  color: #999;
  border: none;
}

.product-favorite:hover {
  cursor: pointer;
}

.product-favorite-selected {
  color: #f91155;
}

.product-info {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  gap: 10px;
}

.product-description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}

.purchase-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add-to-cart-button {
  background-color: #f91155;
  color: #fff;
  padding: 6px;
  border: none;
  border-radius: 10px;
  transition: 200ms;
}

.add-to-cart-button:hover {
  cursor: pointer;
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

.product-price {
  font-weight: bold;
}
</style>
