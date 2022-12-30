<template>
  <div v-if="product" class="max-w-xl mx-auto my-5 py-5 px-7 shadow-md rounded-md">
    <div class="">
      <img :src="product.imageUrl" alt="" class="mx-auto">
    </div>
    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold">{{ product.name }}</h1>
        <h3 class="text-lg font-semibold">${{ product.price }}</h3>
      </div>
      <p>Average Rating: {{ product.averageRating }}</p>
      <button class="bg-black w-full rounded-md py-3 px-10 text-white font-medium shadow-sm hover:bg-gray-900">Add to
        Cart</button>
      <h4 class="text-lg font-bold">Description</h4>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <NotFoundView v-else />
</template>

<script>
import { products } from "../fake-data";
import NotFoundView from "./NotFoundView.vue";

export default {
  name: 'ProductDetail',
  components: {
    NotFoundView
  },
  data() {
    return {
      product: products.find(p => p.id === this.$route.params.id)
    }
  }
}
</script>

<style>

</style>