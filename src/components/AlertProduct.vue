<template>
  <div class="alert-product">
    <img
      :src="require(`@/assets/images/${product.imageUrl}`)"
      :alt="product.dish"
    />
    <div class="alert-product-info">
      <div class="alert-product-name">{{ product.dish }}</div>
      <div class="alert-product-price">
        {{ product.price }} &#8381; &times; {{ product.counter }} =
        {{ sumPrice }} &#8381;
      </div>
    </div>
  </div>
</template>

<script>
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
      imageUrl: {
        type: String,
        default: "",
      },
      price: {
        type: Number,
        default: 0,
      },
    },
  },
  computed: {
    sumPrice() {
      return this.product.price * this.product.counter;
    },
  },
};
</script>

<style scoped>
.alert-product {
  border-radius: 10px;
  width: 100%;
  background-color: #fff;
  padding: 10px;
  display: flex;
  gap: 10px;
}

.alert-product img {
  width: 100px;
}

.alert-product-name {
  font-weight: bold;
  color: #f91155;
}

.alert-product-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
