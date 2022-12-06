<template>
    <div>
  <app-navbar></app-navbar>
  <div class="container bg-white text-center pt-1">
    <h3>
      ¿QUE DESEAS ENTRENAR?
    </h3>
  </div>
  <div class="container">
    <div class="row justify-content-around mt-3">
      <div class="offset-2 col-sm-4">
        <div class="card mb-5">
          <img src="../../assets/rulasRutineAssets/cuerpo.png">
            <select  class="select">
              <option value="" selected>Cuerpo</option>
              <option value="">Pierna</option>
              <option value="">Brazo</option>
              <option value="">Espalda</option>
            </select>
        </div>
      </div>
      <div class="offset-2 col-sm-4">
        <div class="card">
          <img src="../../assets/rulasRutineAssets/Tipo.png">
          <select class="select">
            <option value="" selected>tipo</option>
            <option value="">Volumen</option>
            <option value="">Definicion</option>
            <option value="">Cardio</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row mt-4 text-center">
      <div>
        <button class="btn">Empezar</button>
      </div>
    </div>
  </div>
</div>
</template>

<script></script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.container-fluid{
  align-items: center;
  font-family: 'Bebas Neue';
  width: auto;
}

.container {
  font-family: 'Bebas Neue';
  width: auto;
}

@media (max-width:500px) {
  .card{
    margin-left: 95px;
  }
}

.card{
  width: 200px;
  height: 200px;
}

img{
  width: 200px;
}

.select, option {
  font-size: 15px;
  height: 40px;
  background-color: #3C4048;
  color: #EAEAEA;
  width: 200px;
  margin-top: 5px;
  border-radius: 5px;

}
.btn {
  font-size: 15px;
  height: 40px;
  background-color: #00ABB3;
  color: #EAEAEA;
  width: 200px;
}

</style>