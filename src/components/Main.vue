<template>
  <div class="bg-neutral-900 min-h-screen h-full">
    <Header />
    <Layer />
    <Footer />
  </div>
</template>

<script>
import Footer from "./Template/Footer.vue";
import Header from "./Template/Header.vue";
import Layer from "./Template/Layer.vue";
export default {
  components: { Header, Layer, Footer },
  name: "Main",
};
</script>

<style></style>
