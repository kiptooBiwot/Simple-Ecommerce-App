<template>
  <div class="max-w-3xl mx-auto py-5">
    <div v-if="products.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
    <div v-else>
      <p class="py-5 text-center text-4xl">There are no products yet. You may want to add a new product!</p>
    </div>
  </div>
</template>

<script>
import { products } from "../fake-data";
import ProductCard from "../components/ProductCard.vue";

export default {
  name: 'ProductsPage',
  components: {
    ProductCard
  },
  data: () => ({
    products
  })
}
</script>

<style>

</style>