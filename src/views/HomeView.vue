<template>
  <div class="home">
    <Head/>
    <div>
      <Carousel/>
    </div>
    <card/>
    <Footer/>
  </div>
</template>

<script>
import Head from "../components/Head";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import card from "../components/card";

export default {
  name: 'HomeView',
  components: {
    Head,
    Carousel,
    Footer,
    card
  }
}
</script>

<style scoped>
  .home{
	margin-left: 32px;
	margin-right: 32px;
	background-color: #144A74;
          height: 100%;
  }

</style>
