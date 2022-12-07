<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg text-center" id="nav-total">
      <div class="container-fluid">
        <li  class="navbar-brand  float-end" v-if="usuarioNav">
            <div class="sub-menu-wrap" id="subMenu">
              <div class="sub-menu">
                <div class="uer-info">
                  <img src="../assets/rulasRutineAssets/usuario.png">
                  <h3 style="font-size: 25px;">{{ user.name }}</h3>
                </div>
                <hr>
                <!-- Usuario normal -->
                <a  href="#" class="sub-menu-link" v-on:click="goToPage('/profile')">
                  <img src="../assets/rulasRutineAssets/perfil.png" alt="">
                  <p>Perfil</p>
                </a>
                <a  href="#" class="sub-menu-link" v-on:click="goToPage('/niveles')">
                  <img src="../assets/rulasRutineAssets/nivel.png" alt="" >
                  <p>Nivel: {{userLevel.nivel_name}} </p>
                </a>
                <a href="" class="sub-menu-link" v-on:click="logout()">
                  <img src="../assets/rulasRutineAssets/salir.png" alt="">
                  <p>Salir...</p>
                </a>
              </div>
            </div>
        </li>
        <!--   usuario    -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="navbar-brand">
              <a class="nav-link" href="" v-if="validado == 0">Ejercicios</a>
              <a v-if="(validado == 1)" v-on:click="changeStatus()"><img src="../assets/rulasRutineAssets/usuario.png" class="img-user clearfix" alt="..."></a>
            </li>
            <li class="navbar-brand">
              <a class="nav-link" href="" v-if="validado == 0"
                >Sobre Nosotros</a
              >
              <a class="nav-link" href="" v-if="validado == 1"  v-on:click="goToPage('/makeRoutine')">Rutinas</a>
            </li>
            <a class="navbar-brand" href=""
              ><img
                src="../assets/rulasRutineAssets/logo.png"
                width="100px"
                alt=""
            /></a>
            <li class="navbar-brand">
              <a class="nav-link" href="" v-if="validado == 0">Comentarios</a>
              <a class="nav-link" href="" v-if="validado == 1" v-on:click="goToPage('/history')">Historial</a>
            </li>
            <li class="navbar-brand">
              <a
                class="nav-link"
                v-on:click="goToPage('/login')"
                v-if="validado == 0"
                >Iniciar Sesion</a
              >
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
  name: "header",
  props: {
    msg: String,
  },
  data() {
    return {
      user:"",
      error: false,
      userLevel:"",
      carrera: "",
      error_msg: "",
      validado: 0,
      usuarioNav: false,
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
      this.validado = 1;
    } else {
      this.validado = 0;
    }
    this.getLevel();
    this.getPerfil();
  },
  methods: {
    router() {
      this.$router.push("/dashboard");
    },
    logout() {
      localStorage.token = "";
      this.$router.push("/");
    },
    perfil() {
      this.$router.push("/perfil");
    },
    veterinarios() {
      this.$router.push("/veterinarios");
    },
    admin() {
      this.$router.push("/admin");
    },
    clientes() {
      this.$router.push("/clientes");
    },
    mascotas() {
      this.$router.push("/mascotas");
    },
    servicios() {
      this.$router.push("/servicios");
    },
    goToPage(page) {
      this.$router.push(page);
    },
    changeStatus() {
      if(this.usuarioNav){
        this.usuarioNav =false;
      }else{
        this.usuarioNav = true;
      }
    },
    getLevel() {
      axios
        .get(this.URL + "levels/get_user_level", {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then((response) => {
          this.userLevel = response.data;
          console.log(this.userLevel);
        });
    },
    getPerfil() {
      axios
        .get(process.env.VUE_APP_API_HOST + "usr/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then((response) => {
          this.user = response.data.Perfil;
        })
        .catch((e) => (this.err = e));
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

.navbar1 {
  list-style-type: none;
  align-items: center;
  text-align: center;
  width: 100%;
  font-family: "Bebas Neue";
  font-size: 25px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 99%;
  font-family: "Bebas Neue";
}

a {
  text-decoration: none;
  color: #eaeaea;
}

a:hover {
  color: #23d5ab;
}

li {
  list-style-type: none;
}

.img-user {
  width: 70px;
}

.sub-menu-wrap {
  z-index: 1;
  position: absolute;
  top: 100%;
  right: 70%;
  width: 320px;
  max-height: 500px;
  overflow: hidden;
  transition: max-height 0.5s;
}

.sub-menu {
  background: #3c4048;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
}

.uer-info {
  display: flex;
  align-items: center;
}

.uer-info h3 {
  font-size: 40px;
  font-weight: 400;
}

.uer-info img {
  display: flex;
  width: 60px;
  border-radius: 50%;
  margin-right: 15px;
}

.sub-menu hr {
  border: 0;
  height: 1px;
  width: 100%;
  background: #ccc;
  margin: 15px 0 10px;
}

.sub-menu-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #eaeaea;
  margin: 12px 0;
}

.sub-menu-link p {
  font-size: 25px;
  margin-bottom: -5px;
}

.img-menu {
  width: 40px;
  background: #e5e5e5;
  border-radius: 50%;
  padding: 8px;
  margin-right: 15px;
}
.sub-menu-link img {
  width: 40px;
  background: #e5e5e5;
  border-radius: 50%;
  padding: 8px;
  margin-right: 15px;
}

@media screen and (max-width: 768px) and (min-width: 414px) {
  .sub-menu-wrap {
    right: 55%;
  }
}

@media screen and (max-width: 414px) {
  .sub-menu-wrap {
    right: 15%;
  }
}
</style>
