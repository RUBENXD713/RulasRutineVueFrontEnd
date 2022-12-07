<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg text-center" id="nav-total">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="navbar-brand">
              <a class="nav-link" href="#">Ejercicios</a>
            </li>
            <li class="navbar-brand">
              <a class="nav-link" href="#">Sobre Nosotros</a>
            </li>
            <a class="navbar-brand" href="#"><img src="../assets/rulasRutineAssets/logo.png" width="100px" alt=""></a>
            <li class="navbar-brand">
              <a class="nav-link" href="#">Comentarios</a>
            </li>
            <li class="navbar-brand">
              <a class="nav-link" href="/login">Iniciar Sesion</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>





<script>
import axios from "axios";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'header',
  props: {
    msg: String
  },
  data() {
    return{
      user:null,
      error:false,
      carrera:"",
      error_msg:"",
      URL:process.env.VUE_APP_API_HOST,
    }
  }, 
  mounted(){
    this.getUser();
  },
  methods:{
    router(){
      this.$router.push('/dashboard')
    },
    logout(){
      localStorage.token = ''
      this.$router.push('/');
    },
    perfil(){
      this.$router.push('/perfil');
    },
    veterinarios(){
      this.$router.push('/veterinarios');
    },
    admin(){
      this.$router.push('/admin');
    },
    clientes(){
        this.$router.push('/clientes');
    },
    mascotas(){
        this.$router.push('/mascotas');
    },servicios(){
        this.$router.push('/servicios');
    },
    getUser(){
      
      //this.user={name:"Ruben",email:"hernandez@gmail.com",password:"123",direccion:"calle geranios 731",telefono:"8713452055",tipo:"0"}
      axios
        .get(this.URL+ 'usr/perfil' ,{
        headers: {
              'Authorization': `Bearer ${localStorage.token}`
                }
        })
          .then(response => {
            this.user = response.data.Perfil
          })
          .catch( e=> console.log(e))
    }
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.navbar1 {
  list-style-type: none;
  align-items: center;
  text-align: center;
  width: 100%;
  font-family: 'Bebas Neue';
  font-size: 25px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 99%;
  font-family: 'Bebas Neue';
}

a {
  text-decoration: none;
  color: #eaeaea;
}

a:hover {
  color: #23d5ab;
}

li{
  list-style-type: none;
}

.img-user{
  width: 70px;
}

.sub-menu-wrap{
  z-index: 1;
  position: absolute;
  top: 100%;
  right: 70%;
  width: 320px;
  max-height: 500px;
  overflow: hidden;
  transition: max-height 0.5s;
}

.sub-menu{
  background: #3C4048;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
}

.uer-info{
  display: flex;
  align-items: center;
}

.uer-info h3{
  font-size: 40px;
  font-weight: 400;
}

.uer-info img{
  display: flex;
  width: 60px;
  border-radius: 50%;
  margin-right: 15px;
}

.sub-menu hr{
  border: 0;
  height: 1px;
  width: 100%;
  background: #ccc;
  margin: 15px 0 10px;
}

.sub-menu-link{
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #eaeaea;
  margin: 12px 0;
}

.sub-menu-link p{
  font-size: 25px;
  margin-bottom: -5px;
}

.img-menu{
  width: 40px;
  background: #e5e5e5;
  border-radius: 50%;
  padding: 8px;
  margin-right: 15px; 
}
.sub-menu-link img{
  width: 40px;
  background: #e5e5e5;
  border-radius: 50%;
  padding: 8px;
  margin-right: 15px;
}

@media screen and (max-width: 768px) and (min-width: 414px){
  .sub-menu-wrap{
    right: 55%;
  }
}

@media screen and (max-width: 414px){
  .sub-menu-wrap{
    right: 15%;
  }
}
</style>
