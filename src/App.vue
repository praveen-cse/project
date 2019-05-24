<template>
  <div id="app">
      <product-list></product-list>
  </div>
</template>

<script>
import Cart from './components/Cart.vue'
export default {
    name: 'app',
    components: {
        'product-list': Cart,
    }
}
</script>

<style>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>
