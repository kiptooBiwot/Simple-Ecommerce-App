<template>
  <div>
    <div class="max-w-2xl mx-auto py-5">
      <h1 class="text-3xl font-bold">Shopping Cart</h1>
      <hr class="border border-black mt-4">
      <div v-if="cartItems.length > 0">
        <Cart v-for="item in cartItems" :key="item.id" :item="item" />
        <h3 class="flex py-5 text-lg font-bold justify-end">Total: ${{ totalPrice }}</h3>
        <button class="bg-black w-full rounded-md py-3 px-10 text-white font-medium shadow-sm hover:bg-gray-900">Proceed
          to
          Checkout</button>
      </div>
      <div v-else>
        <p class="text-2xl">You haven't added anything to your cart yet.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { cartItems } from "../fake-data";
import Cart from "../components/CartItem.vue";

export default {
  name: 'CartPage',
  components: {
    Cart
  },
  data: () => ({
    cartItems
  }),
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (sum, item) => sum + Number(item.price),
        0,
      )
    }
  }
}
</script>

<style>

</style>