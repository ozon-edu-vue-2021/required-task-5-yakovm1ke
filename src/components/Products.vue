<template>
  <div class="products-wrapper" v-if="products.length">
    <div class="products" v-if="!isFavoritesShown">
      <Product
        v-for="product in products"
        :key="product.uid"
        :product="product"
      />
    </div>
    <div class="favorite-products" v-else>
      <div class="products" v-if="favoriteProducts.length">
        <Product
          v-for="product in favoriteProducts"
          :key="product.uid"
          :product="product"
        />
      </div>
      <div class="products-empty" v-else>
        There are no favorite products yet
      </div>
    </div>
  </div>
  <div class="products-empty" v-else>We have nothing to offer you</div>
</template>

<script>
import Product from "@/components/Product.vue";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    Product,
  },
  computed: {
    ...mapState("products", ["products", "isFavoritesShown"]),
    ...mapGetters("products", ["favoriteProducts"]),
  },
};
</script>

<style scoped>
.products-wrapper {
  width: 100%;
}

.products {
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  width: 1200px;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  padding-right: 10px;
  max-height: calc(100vh - 70px - 60px);
  overflow-y: scroll;
}

.products::-webkit-scrollbar {
  width: 10px;
}

.products::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 6px;
}

.products-empty {
  font-weight: bold;
  font-size: 30px;
  color: #fff;
}
</style>
