<template>
    <div>
        <Header/>
        <div class="imagenes">
            <img
                loading="lazy"
                src="../../assets/rulasRutineAssets/Relleno2.jpg"
                alt=""
                width="100%"
                style="opacity: 90%"
            />
        </div>
        <br />
        <br />
        <!-- Sobre nosotros -->
        <div class="About1" id="SobreNosotros">
            <div class="row align-items-start">
                <div class="t1 col-5">
                    <p class="title1">Sobre nosotros</p>
                    <p class="texto1">
                        Somos una empresa dedicada al cuidado de la salud fisica. provomeos el
                        modelo de entrenamiento desde casa, brindandole al usuario una rutina y
                        ejercisos dedicados a mejorar su estado fisico mientras este no hace un
                        sobre esfuerzo que lo lastime.
                    </p>
                    <br />
                    <div class="d-flex redes col-12">
                        <div class="col-md-3 icon-social">
                            <img class="img-social" id="imgRedes" src="../../assets/rulasRutineAssets/facebook.png" alt="" />
                        </div>
                        <div class="col-md-3 icon-social">
                            <img class="img-social" id="imgRedes" src="../../assets/rulasRutineAssets/youtube.png" alt="" />
                        </div>
                        <div class="col-md-3 icon-social">
                            <img class="img-social" id="imgRedes" src="../../assets/rulasRutineAssets/gorjeo.png" alt="" />
                        </div>
                        <div class="col-md-3 icon-social">
                            <img class="img-social" id="imgRedes" src="../../assets/rulasRutineAssets/instagram.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="t2 col-7">
                    <p></p>
                    <img
                        loading="lazy"
                        src="../../assets/rulasRutineAssets/Ejercicios.jpg"
                        width="450px"
                        id="imageAbout"
                        alt=""
                        align="right"
                    />
                </div>
            </div>
        </div>
        <br />
        <!-- Imagenes que se pone en el foro como relleno -->
        <div class="imagenes">
            <img loading="lazy" src="../../assets/rulasRutineAssets/Estirando.jpg" alt="" width="100%" height="350px" />
        </div>
        <br />
        <br />
        <!-- Apartado de ejercicios del foro -->
        <div class="Ejercicios" id="exercises">
            <div class="row">
                <div class="t1 col-5">
                    <p class="title2">Ejercicios</p>
                    <br />
                    <!-- Tipos de ejercicios -->
                    <div class="row">
                        <div class="pt1 col-6">
                            <p class="textnormal">Resistencia</p>
                            <img
                                class="imgEjercicios"
                                loading="lazy"
                                src="../../assets/rulasRutineAssets/Resistencia.png"
                                alt=""
                                width="120px"
                                height="80px"
                            />
                            <br />
                            <br />
                            <p class="textnormal">Equilibrio</p>
                            <img
                                class="imgEjercicios"
                                loading="lazy"
                                src="../../assets/rulasRutineAssets/Equilibrio.png"
                                alt=""
                                width="120px"
                                height="80px"
                            />
                        </div>
                        <div class="pt2 col-6">
                            <p class="textnormal">Fortalecimiento</p>
                            <img
                                class="imgEjercicios"
                                loading="lazy"
                                src="../../assets/rulasRutineAssets/Fortalecimiento.png"
                                alt=""
                                width="120px"
                                height="80px"
                                align="center"
                            />
                            <br /><br />
                            <p class="textnormal">Flexbilidad</p>
                            <img
                                class="imgEjercicios"
                                loading="lazy"
                                src="../../assets/rulasRutineAssets/Flexibilidad.png"
                                alt=""
                                width="120px"
                                height="80px"
                            />
                        </div>
                    </div>
                </div>
                <!-- Descripcion de ejercicios -->
                <div class="t3 col-7">
                    <br />
                    <br />
                    <br />
                    <br />
                    <div class="row">
                        <div class="col-12">
                            <p class="textnormal">
                                Los ejercicos que nosotros ofrecemos son ejercicios dedicados a tu
                                persona, en poder cuidar tu salud adaptando los ejercicios
                                dependiendo de tus necesidades y tu estado actual de peso.
                            </p>
                        </div>
                        <div class="col-12">
                            <img
                                loading="lazy"
                                class="imgEjercicioD"
                                src="../../assets/rulasRutineAssets/DescripEjercicio.png"
                                alt=""
                                width="200px"
                                height="200px"
                                align="right"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br /><br />
        <!-- Imagenes que se pone en el foro como relleno -->
        <div class="imagenes">
        <img
            loading="lazy"
            src="../../assets/rulasRutineAssets/Relleno1.jpg"
            alt=""
            width="100%"
            height="500px"
            style="opacity: 90%; border-radius: 10px"
        />
        </div>
        <br /><br /><br />
        <!-- Apartado de Comentarios -->
        <div class="Comentarios" id="comments">
            <div class="row">
                <div class="col-12">
                <br />
                <p class="title1">Comentarios</p>
            </div>
            <div class="container">
                <div class="col-3" id="cardsUsers">
                    <div class="card">
                        <img loading="lazy" class="imgComentarios" src="../../assets/rulasRutineAssets/Usuario1.jpg" alt="" />
                        <br />
                        <h2>Mario Alfonso</h2>
                        <p class="textoComentarios">
                            Excelentes ejercicios adaptados a mi fisico
                        </p>
                    </div>
                </div>
                <br />
                <div class="col-3" id="cardsUsers">
                    <div class="card">
                        <img loading="lazy" class="imgComentarios" src="../../assets/rulasRutineAssets/Usuario2.jpg" alt="" />
                        <br />
                        <h2>Sara Contreras</h2>
                        <p class="textoComentarios">
                            Excelentes rutinas e indicaciones para cada ejercicio
                        </p>
                    </div>
                </div>
                <br />
                <div class="col-3" id="cardsUsers">
                    <div class="card">
                        <img loading="lazy" class="imgComentarios" src="../../assets/rulasRutineAssets/Usuario3.jpg" alt="" />
                        <br />
                        <h2>Oscar Martines</h2>
                        <p class="textoComentarios">
                            Excelente servicio, con buenas rutinas y facil de hacer
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <br /><br /><br />
        <Footer/>
    </div>
</template>


<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "BlogView",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      email: "",
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
      //this.$router.push("dashboard");
    }
  },
  methods: {goToPage(page) {
      this.$router.push(page);
    }
  },
};
</script>

<style scoped>
    
/*Apartado de scrollbar*/
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #23d5ab;
  border-radius: 50px;
}

::-webkit-scrollbar-thumb {
  background: #eaeaea;
  border-radius: 50px;
}

/* Navbar */
.navbar1 {
  list-style-type: none;
  align-items: center;
  text-align: center;
  width: 100%;
  font-family: 'Bebas Neue';
  font-size: 25px;
}

#nav-total{
  margin: 0 auto;
}

/* Cambios en el navbar */
/* .drawer{
  float: left;
  cursor: pointer;
  display: none;
  margin-left: 1em;
  padding: .2rem;
}

#check{
  display: none;
} */


/* @media (max-width:1039px) {
  nav{
    justify-content: flex-start;
  }
  .drawer{
    display: block;
  }
  .menu-box{
    position: fixed;
    width: 50%;
    height: 100vh;
    top: 10vh;
    left: -100%;
    text-align: left;
    transition: all .5s;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    background-color: #3C4048;
  }
  #item{
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    border-bottom: solid .1rem #23d5ab;
  }

  #check:checked ~ .menu-box{
    left: 0;
  }
} */
/* Aqui terminan los cambios al navbar */

.p-2 {
  display: flex;
  align-items: center;
  justify-content: space-between;

}

a{
  text-decoration: none;
  color: #eaeaea;
}

a:hover {
  color: #23d5ab;
}

/*Apartado de scrollbar*/
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #23d5ab;
  border-radius: 50px;
}

::-webkit-scrollbar-thumb {
  background: #eaeaea;
  border-radius: 50px;
}

/* Sobre nosotros */
.About1 {
  background: #3C4048;
  width: 100%;
  height: 400px;
  font-family: 'Bebas Neue';
  border-radius: 10px;
}

.t1 {
  padding-left: 15px;
  padding-top: 10px;
  width: 40%;
}

.title1 {
  font-size: 30px;
  color: #eaeaea;
  padding-left: 15px;

}

.texto1 {
  color: #eaeaea;
  font-size: 20px;
  padding-left: 15px;
}

#imgRedes{
  width: 50px;
  height: 50px;
}


/* Imagen de ejercicio en sobre nosotros */
#imageAbout{
  width: 100%;
  height: 350px;
  border-radius: 10px;
}

/* Para los row en bostrap */
.row {
  width: 100%;
}

/* Apartado de redes en sobre nostros */
.redes {
  padding-left: 15px;
}



/* Apartado de ejercicios */
.Ejercicios {
  background: #EAEAEA;
  width: 100%;
  height: 500px;
  font-family: 'Bebas Neue';
  border-radius: 10px;
}

.title2 {
  font-size: 30px;
  color: #3C4048;
  padding-left: 15px;
}

.imgEjercicioD{
  width: 260px;
  height: 260px;
}

.imgEjercicios{
  width: 120px;
  height: 80px;
}

.textnormal {
  padding-left: 25px;
  font-size: 25px;
  color: #3C4048;
}

.imgEjercicios {
  padding-left: 25px;
  font-size: 25px;
}

.t3 {
  font-size: 20px;
}

/* Apartado de Comentarios */
.Comentarios {
  width: 100%;
  background: #3C4048;
  height: 550px;
  font-family: 'Bebas Neue';
  border-radius: 10px;
}

.personas {
  align-items: center;
  margin: 0;
  justify-content: center;
  border: solid red;
}

.com {
  background: #EAEAEA;
  border-radius: 8px;
  padding-left: 15px;
}
.icon-social{
  cursor: pointer;
  transition: 300ms;
}
.icon-social:hover{
  transform: scale(1.1);
}



/* #slider {
  margin: 0 auto;
  width: 800px;
  max-width: 100%;
  text-align: center;
}
#slider input[type=radio] {
  display: none;
}
#slider label {
  cursor:pointer;
  text-decoration: none;
}
#slides {
  padding: 10px;
  border: 3px solid #ccc;
  background: #fff;
  position: relative;
  z-index: 1;
}
#overflow {
  width: 100%;
  overflow: hidden;
}
#slide1:checked ~ #slides .inner {
  margin-left: 0;
}
#slide2:checked ~ #slides .inner {
  margin-left: -100%;
}
#slide3:checked ~ #slides .inner {
  margin-left: -200%;
}
#slide4:checked ~ #slides .inner {
  margin-left: -300%;
}
#slides .inner {
  transition: margin-left 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  width: 400%;
  line-height: 0;
  height: 300px;
}
#slides .slide {
  width: 25%;
  float:left;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
}
#slides .slide_1 {
  background: #00171F;
}
#slides .slide_2 {
  background: #003459;
}
#slides .slide_3 {
  background: #007EA7;
}
#controls {
  margin: -180px 0 0 0;
  width: 100%;
  height: 50px;
  z-index: 3;
  position: relative;
}
#controls label {
  transition: opacity 0.2s ease-out;
  display: none;
  width: 50px;
  height: 50px;
  opacity: .4;
}
#controls label:hover {
  opacity: 1;
}
#slide1:checked ~ #controls label:nth-child(2),
#slide2:checked ~ #controls label:nth-child(3),
#slide3:checked ~ #controls label:nth-child(4),
#slide4:checked ~ #controls label:nth-child(1) {
  background: url(https://image.flaticon.com/icons/svg/130/130884.svg) no-repeat;
  float:right;
  margin: 0 -50px 0 0;
  display: block;
}
#slide1:checked ~ #controls label:nth-last-child(2),
#slide2:checked ~ #controls label:nth-last-child(3),
#slide3:checked ~ #controls label:nth-last-child(4),
#slide4:checked ~ #controls label:nth-last-child(1) {
  background: url(https://image.flaticon.com/icons/svg/130/130882.svg) no-repeat;
  float:left;
  margin: 0 0 0 -50px;
  display: block;
}
#bullets {
  margin: 150px 0 0;
  text-align: center;
}
#bullets label {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius:100%;
  background: #ccc;
  margin: 0 10px;
}
#slide1:checked ~ #bullets label:nth-child(1),
#slide2:checked ~ #bullets label:nth-child(2),
#slide3:checked ~ #bullets label:nth-child(3),
#slide4:checked ~ #bullets label:nth-child(4) {
  background: #444;
}
@media screen and (max-width: 900px) {
  #slide1:checked ~ #controls label:nth-child(2),
  #slide2:checked ~ #controls label:nth-child(3),
  #slide3:checked ~ #controls label:nth-child(4),
  #slide4:checked ~ #controls label:nth-child(1),
  #slide1:checked ~ #controls label:nth-last-child(2),
  #slide2:checked ~ #controls label:nth-last-child(3),
  #slide3:checked ~ #controls label:nth-last-child(4),
  #slide4:checked ~ #controls label:nth-last-child(1) {
     margin: 0;
  }
  #slides {
     max-width: calc(100% - 140px);
     margin: 0 auto;
  }
} */


/*Card usuarios*/

.container{
  justify-content: center;
  display: flex;
}
.card {
  width: 290px;
  height: 354px;
  background: #07182E;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
}

.card h2 {
  z-index: 1;
  color: white;
  font-size: 1em;
}

.card::before {
  content: '';
  position: absolute;
  width: 100px;
  background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
  height: 130%;
  animation: rotBGimg 3s linear infinite;
  transition: all 0.2s linear;
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.card::after {
  content: '';
  position: absolute;
  background: #07182E;
  ;
  inset: 5px;
  border-radius: 15px;
}  

.textoComentarios {
  font-size: 15px;
  color: #EAEAEA;
  z-index: 1
}

.imgComentarios{
  z-index: 1;
  width: 250px;
  height: 180px;
  border-radius: 10px;
}

/* .logoFootter {
    padding-top: 25px;
    padding-bottom: 25px;
    width: 350px;
    height: 300px;
} */


/* Dise??o Responsivo*/
@media screen and (max-width: 768px) and (min-width: 414px){

  /* Sobre nosotros */
  .texto1{
    font-size: 15px;
    width: 100%;
  }
  #imageAbout{
    height: 250px;
  }
  #imgRedes{
    width: 50px;
    height: 50px;
  }

  /* Ejercicios */
  .imgEjercicios{
    width: 120px;
    height: 80px;
  }

  .imgEjercicioD{
    width: 160px;
    height: 170px;
  }

  /* Comentarios */
  #textoComentarios{
    font-size: 15px;
  }
  #titleComentarios{
    font-size: 25px;
  }

  .container{
    display: grid;
    grid-template-columns: auto;
  }

  .Comentarios{
    height: 1400px;
  }

}

@media screen and (max-width: 500px){
  .texto1{
    font-size: 10px;
    width: 100%;
  }
  #imageAbout{
    height: 250px;
  }

  #imgRedes{
    width: 25px;
    margin-bottom: 15px;
    height: 25px;
  }
  /* Ejercicios */
  .textnormal{
    font-size: 15px;
    width: 100%;
  }
  .pt1{
    align-items: center;
    justify-content: center;
  }
  .imgEjercicios{
    width: 85px;
    height: 60px;
    text-align: center;
  }
  .imgEjercicioD{
    width: 100px;
    height: 100px;
  }
  /* Comentarios */
  #textoComentarios{
    font-size: 15px;
  }
  #titleComentarios{
    font-size: 25px;
  }

  .container{
    justify-content: center;
    display: grid;
  }
  .card{
    width: 190px;
    height: 254px;
  }

  .imgComentarios{
    width: 150px;
    height: 90px;
  }
  .Comentarios{
    height: 1000px;
  }

}


/* Termina el Dise??o Responsivo */
</style>