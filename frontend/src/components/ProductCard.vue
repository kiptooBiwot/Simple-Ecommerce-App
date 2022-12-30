<template>
  <div>
    <div class="rounded-md shadow-md px-5 pb-7 w-fit text-center mb-4">
      <img :src="product.imageUrl" alt="" srcset="">
      <h3 class="font-bold text-lg">{{ product.name }}</h3>
      <p class="">${{ product.price }}</p>
      <router-link :to="`/products/${product.id}`">
        <button class="bg-black rounded-md py-2 px-8 my-2 text-white font-medium shadow-sm hover:bg-gray-900">View
          Details</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProdcutCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>