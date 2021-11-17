<template>
  <div class="alert" @click="onWrapperClicked">
    <div class="alert-products-wrapper">
      <div class="alert-header">
        <h2>Thank you for your purchase!</h2>
        <button class="alert-close-button" @click="onCloseAlertClicked">
          Close modal & clear cart
        </button>
      </div>
      <div class="alert-total">
        <div class="alert-total-item">
          Total price: <span>{{ totalPrice }} &#8381;</span>
        </div>
        <div class="alert-total-item">
          Total products: <span>{{ totalCounter }}</span>
        </div>
      </div>
      <div class="alert-products">
        <AlertProduct
          class="alert-product"
          v-for="cartProduct in cartProducts"
          :key="cartProduct.uid"
          :product="cartProduct"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AlertProduct from "@/components/AlertProduct.vue";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    AlertProduct,
  },
  computed: {
    ...mapState("cart", ["cartProducts"]),
    ...mapGetters("cart", ["totalPrice", "totalCounter"]),
  },
  methods: {
    onCloseAlertClicked() {
      this.$emit("onCloseAlertClicked");
    },
    onWrapperClicked() {
      this.$emit("onWrapperClicked");
    },
  },
};
</script>

<style scoped>
.alert {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.alert-products-wrapper {
  background-color: #216bff;
  border-radius: 10px;
  padding: 40px;
  width: 700px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.alert-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.alert-header h2 {
  margin: 0;
  color: #fff;
}

.alert-close-button {
  width: 200px;
  background-color: #f91155;
  border-radius: 10px;
  border: none;
  color: #fff;
  padding: 6px;
}

.alert-close-button:hover {
  cursor: pointer;
}

.alert-total {
  color: #fff;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.alert-total-item span {
  font-weight: bold;
}

.alert-products {
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 10px;
}

.alert-products::-webkit-scrollbar {
  width: 10px;
}

.alert-products::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 10px;
}
</style>
