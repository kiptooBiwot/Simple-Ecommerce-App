<template>
  <div>
    <div class="flex items-center justify-between py-2 border-b-2 border-gray-100">
      <div class="flex items-center gap-3">
        <img :src="item.imageUrl" alt="" class="w-20 h-20">
        <div class="">
          <h2 class="text-lg font-bold">{{ item.name }}</h2>
          <p class="font-semibold">${{ item.price }}</p>
        </div>
      </div>
      <button class="bg-black rounded-md py-2 px-6 text-sm text-white font-normal shadow-sm hover:bg-gray-900">Remove
        from Cart</button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>