<template>
  <div class="w-full py-5 shadow-sm">
    <nav class="flex justify-between max-w-4xl mx-auto">
      <router-link to="/">
        <h1 class="text-2xl font-bold">The Source Footware</h1>
      </router-link>
      <div>
        <!-- <router-link to="/products">Products</router-link> | -->
        <router-link to="/cart">
          <button class="bg-black py-2 px-4 text-white text-sm font-semibold rounded-md">Shopping Cart</button>

        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>

</style>