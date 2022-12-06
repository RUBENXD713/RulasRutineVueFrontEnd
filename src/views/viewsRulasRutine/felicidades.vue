<template>
  <div>
  <div class="container">
    <img src="../../assets/rulasRutineAssets/FELICIADES.png" class="img-fluid" alt="...">
    <br><br>
    <div class="col-sm text-center">
        <button class="btn">Terminar</button>
    </div>
</div>
<br>
</div>
</template>

<script>
//import axios from "axios";
export default {
  name: "LoginView",
  components: {},
  data() {
    return {
      error: false,
      error_msg: "",
      URL: process.env.VUE_APP_API_HOST,
    };
  },
  async mounted() {
  },
  methods: {

  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.container {
  align-items: center;
  font-family: 'Bebas Neue';
}

.btn{
    font-size: 30px;
    height: 60px;
    border: solid #00ABB3;
    color: #3C4048;
    width: 200px;
}
.btn:hover{
    background-color: #00ABB3;
    color: #eaeaea;
}
</style>
