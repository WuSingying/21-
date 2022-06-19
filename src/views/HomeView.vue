<template>
  <div class="home">
    <Head/>
    <div>
      <Carousel/>
    </div>
  </div>
</template>

<script>
import Head from "../components/Head";
import Carousel from "../components/Carousel";

export default {
  name: 'HomeView',
  components: {
    Head,
    Carousel
  }
}
</script>

<style>
  .home{

  }
</style>
