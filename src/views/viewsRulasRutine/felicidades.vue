<template>
  <div>
    <div class="container">
      <img
        src="../../assets/rulasRutineAssets/FELICIADES.png"
        class="img-fluid"
        alt="Felicidades Icon"
      />
      <br /><br />
      <div class="col-sm text-center">
        <button class="btn" v-on:click="goToPage('/')">Terminar</button>
      </div>
    </div>
    <Footer class="mt-4"/>
  </div>
</template>

<script>
//import axios from "axios";
import Footer from '@/components/Footer.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "FelicitacionesView",
  components: {
    Footer
  },
  data() {
    return {
      tiempo: "",
    };
  },
  async mounted() {
    //this.sleep(10000);
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
        this.goToPage("/");
      });
    },
    goToPage(page) {
      this.$router.push(page);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

.container {
  align-items: center;
  font-family: "Bebas Neue";
}

.btn {
  font-size: 30px;
  height: 60px;
  border: solid #00abb3;
  color: #3c4048;
  width: 200px;
}
.btn:hover {
  background-color: #00abb3;
  color: #eaeaea;
}
</style>
