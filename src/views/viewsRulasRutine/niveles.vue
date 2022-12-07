<template>
  <div>
    <Header/>
    <div class="container">
      <br />
      <div class="row">
        <div class="col-12 text-center">
          <div class="card mb-3" style="max-width: 440px; padding: 0.8em">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="../../assets/rulasRutineAssets/Usuario-navbar.png"
                  class="img-fluid"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"></h5>
                  <p class="card-text">Tu experiencia: {{userLevel.user_experience}}</p>
                  <p class="card-text">Tu nivel: {{userLevel.nivel_name}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="col-md text-center">
          <button class="btn btn-info" v-on:click="changeStatus()">{{buttonText}}</button>
        </div>
      </div>
      <br />
      <div class="row" v-if="moreInfo">
        <div class="col-md text-center">
          <img
            src="../../assets/rulasRutineAssets/Nuevo.png"
            id="imgBasico"
            alt=""
          />
          <p>nivel Nuevo de 1 a 49 exp</p>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            Mostrar mas
          </button>
          <br /><br />
        </div>
        <div class="col-md text-center">
          <img
            src="../../assets/rulasRutineAssets/novato.png"
            id="imgBasico"
            alt=""
          />
          <p>nivel Novato de 50 a 99 exp</p>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            Mostrar mas
          </button>
          <br /><br />
        </div>
        <div class="col-md text-center">
          <img
            src="../../assets/rulasRutineAssets/principiante.png"
            id="imgBasico"
            alt=""
          />
          <p>nivel Nuevo de 100 a 149 exp</p>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            Mostrar mas
          </button>
          <br /><br />
        </div>
        <div class="col-md text-center">
          <img
            src="../../assets/rulasRutineAssets/Avanzado.png"
            id="imgBasico"
            alt=""
          />
          <p>nivel Nuevo de 150 a 199 exp</p>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            Mostrar mas
          </button>
          <br /><br />
        </div>
        <div class="col-md text-center">
          <img
            src="../../assets/rulasRutineAssets/Experto.png"
            id="imgBasico"
            alt=""
          />
          <p>nivel Nuevo de 200 a 249 exp</p>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            Mostrar mas
          </button>
          <br /><br />
        </div>
        <div class="col-md text-center">
          <img
            src="../../assets/rulasRutineAssets/Maximus.png"
            id="imgBasico"
            alt=""
          />
          <p>nivel Nuevo de 250 a 99999 exp</p>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            Mostrar mas
          </button>
          <br /><br />
        </div>
      </div>
    </div>
    <br />
    <div
      class="offcanvas offcanvas-start"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabindex="-1"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
          Informacion acerca del nivel
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          button
        </button>
      </div>
      <div class="offcanvas-body">
        <p></p>
      </div>
    </div>
    <Footer class="mt-4"/>
  </div>
</template>

<script>
/**
 * Importaciones
 */
import axios from "axios";
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "nivelesView",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      userLevel: {},
      pesos: "",
      error: false,
      error_msg: "",
      moreInfo: false,
      buttonText: "ver mas",
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
        //
    }
    this.getLevel();
  },
  methods: {
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
    changeStatus() {
      if (this.moreInfo) {
        this.moreInfo = false;
        this.buttonText = "ver mas";
      } else {
        this.moreInfo = true;
        this.buttonText = "ver menos";
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

.container {
  font-family: "Bebas Neue";
}
.img-fluid {
  width: 90%;
}
#imgBasico {
  width: 300px;
}

@media screen and (max-width: 768px) and (min-width: 414px) {
  .img-fluid {
    width: 100%;
  }
}

@media screen and (max-width: 414px) {
  .img-fluid {
    width: 50%;
  }
}
</style>
