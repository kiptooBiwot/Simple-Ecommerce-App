<template>
  <div id="app">
    <NavBar />
    <div class="max-w-6xl mx-auto ">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar
  }
}
</script>

<style>

</style>
