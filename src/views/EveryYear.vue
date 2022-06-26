<template>
  <div class="year">
    <Head/>
  <div>
    <Aside/>
  </div>
  <Footer/>
  </div>
</template>

<script>
    import Head from "../components/Head";
    import Aside from "../components/Aside";
    import Footer from "../components/Footer";

    export default {
        name: "EveryYear",
        components:{
            Head,
            Aside,
            Footer,
        }
    }
</script>

<style >
  .year{
	margin-left: 32px;
	margin-right: 32px;
  }
</style>
