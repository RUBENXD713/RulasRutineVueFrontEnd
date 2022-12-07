<template>
    <div>
        <Header/>
        <div class="card text-center m-3">
            <h3 class="card-header">vue.js Pagination</h3>
        </div>
        <div class="card-body">
            <div v-for="item in pageOfitems" :key="item.id">{{item.name}}</div>
        </div>
        <div class="card-footer pb-0 pt-3">
            <jw-pagination :items="exampleitems" @changePage="onChangePage"></jw-pagination>
        </div>
        <Footer/>
    </div>
</template>

<script>
import axios from "axios";
import JwPagination from "jw-vue-pagination";
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

export default {
  name: "RutinaEjercicioView",
  components: {
    JwPagination,
    Header,
    Footer
  },
  data() {
    return {
      email: "",
      exampleItems,
      pageOfitems: [],
      password: "",
      error: false,
      error_msg: "",
      URL: process.env.VUE_APP_API_HOST,
    };
  },
  async mounted() {
    if (localStorage.token) {
      console.log("existe");
    } else {
      localStorage.token = "";
    }

    if (localStorage.token != "") {
      this.$router.push("dashboard");
    }
  },
  methods: {
    onChangePage(pageOfitems){
        this.pageOfitems = pageOfitems
    },
    login() {
      let json = {
        email: this.email,
        password: this.password,
      };
      axios.post(this.URL + "usr/log_in", json).then((data) => {
        console.log(data);
        console.log(data);
        localStorage.token = data.data.token;
        this.error = false;
        this.$router.push("/dashboard");
      });
    },
  },
};
</script>

<style scoped>

</style>