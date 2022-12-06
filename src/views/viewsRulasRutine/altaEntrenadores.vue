<template>
    <div class="container">
  <div class="title bg-white text-end mb-5">
    <h5 id="titulo">Entrenadores</h5>
  </div>
  <div class="row mt-4 mb-5 justify-content-center">
    <div class="col-lg-6 col-12">
      <div class="card">
        <div class="card-body">
          <div class="text-center" style="margin-top: -25px">
            <img width="120" alt="" />
          </div>
          <form action="" >
            <div class="row align-items-*">
              <div class="col-sm">
                <span>Nombre</span>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                />
              </div>
              <div class="col-sm">
                <span>Apellidos</span>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                />
              </div>
            </div>
            <div class="row align-items-*">
              <div class="col-sm">
                <span>Edad</span>
                <input
                  type="number"
                  name=""
                  id=""
                  class="form-control"
                  value=""
                />
              </div>
              <div class="col-sm">
                <span>Rol</span>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  value="Entrenador"
                  disabled
                />
              </div>
            </div>
            <div class="row align-items-*">
              <div class="col-sm-12">
                <span>Correo</span>
                <input
                  type="email"
                  name=""
                  id=""
                  class="form-control"
                />
              </div>
            </div>
            <div class="row text-center mt-3">
              <div class="col-sm">
                <button class="btn">Registrar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
}
<script></script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.container {
  font-family: 'Bebas Neue';
}

label,
input {
  font-size: 17px;
}

input {
  height: 35px;
}

span {
  font-size: 20px;
}

a {
  font-size: 18px;
}

.card {
  margin: auto;
}

.card-body {
  background-color: #EAEAEA;
  border-radius: 5px;
}

.btn {
  font-size: 15px;
  height: 40px;
  background-color: #00ABB3;
  color: #EAEAEA;
  width: 200px;
}

@media (max-width: 500px) {
  #titulo {
    margin-left: 45px;
    padding: 5px;
    font-size: 20px;
  }
}

.title {
  border-radius: 0px 10px 10px 0px;
  width: 50%;
}

#titulo {
  margin-right: 50px;
  padding: 5px;
}

</style>