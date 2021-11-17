<template>
  <div class="cart" v-if="cartProducts.length">
    <div class="cart-products">
      <CartProduct
        v-for="cartProduct in cartProducts"
        :key="cartProduct.uid"
        :cartProduct="cartProduct"
      />
    </div>
    <CartInfo @onOrderCreateClicked="onOrderCreated" />
    <Alert
      v-if="isOrdered"
      @onCloseAlertClicked="onCloseAlert"
      @onWrapperClicked="onHideAlert"
    />
  </div>
  <div class="cart-products-empty" v-else>The cart is empty</div>
</template>

<script>
import CartProduct from "@/components/CartProduct.vue";
import CartInfo from "@/components/CartInfo.vue";
import Alert from "@/components/Alert.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    CartProduct,
    CartInfo,
    Alert,
  },
  data() {
    return {
      isOrdered: false,
    };
  },
  computed: {
    ...mapState("cart", ["cartProducts"]),
  },
  methods: {
    ...mapMutations("cart", ["clearCart"]),
    onOrderCreated() {
      this.isOrdered = true;
    },
    onCloseAlert() {
      this.isOrdered = false;
      this.clearCart();
    },
    onHideAlert() {
      this.isOrdered = false;
    },
  },
};
</script>

<style scoped>
.cart {
  margin: 0 auto;
  width: 1200px;
  display: flex;
  gap: 10px;
}

.cart-products {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 10px;
  max-height: calc(100vh - 70px - 60px);
  overflow-y: scroll;
}

.cart-products::-webkit-scrollbar {
  width: 10px;
}

.cart-products::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 6px;
}

.cart-products-empty {
  font-weight: bold;
  font-size: 30px;
  color: #fff;
}
</style>
