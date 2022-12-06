<template>
    <div>
        <div class="container">
    <br>
    <div class="row">
        <div class="col-12 text-center">
            <div class="card mb-3" style="max-width: 440px; padding:0.8em">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="../../assets/rulasRutineAssets/Usuario-navbar.png" class="img-fluid" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title"></h5>
                      <p class="card-text">Tu experiencia:  exp</p>
                      <p class="card-text">Tu nivel: Nuevo</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <br>
        <div class="col-md text-center">
            <button class="btn btn-info" >switch</button>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-md text-center">
            <img src="../../assets/rulasRutineAssets/Nuevo.png" id="imgBasico" alt="">
            <p>nivel Nuevo de 1 a 49 exp</p>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" >Mostrar mas</button>
            <br><br>
        </div>
        <div class="col-md text-center">
            <img src="../../assets/rulasRutineAssets/novato.png" id="imgBasico" alt="">
            <p>nivel Novato de 50 a 99 exp</p>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" >Mostrar mas</button>
            <br><br>
        </div>
        <div class="col-md text-center">
            <img src="../../assets/rulasRutineAssets/principiante.png" id="imgBasico" alt="">
            <p>nivel Nuevo de 100 a 149 exp</p>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" >Mostrar mas</button>
            <br><br>
        </div>
        <div class="col-md text-center">
            <img src="../../assets/rulasRutineAssets/Avanzado.png" id="imgBasico" alt="">
            <p>nivel Nuevo de 150 a 199 exp</p>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" >Mostrar mas</button>
            <br><br>
        </div>
        <div class="col-md text-center">
            <img src="../../assets/rulasRutineAssets/Experto.png" id="imgBasico" alt="">
            <p>nivel Nuevo de 200 a 249 exp</p>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" >Mostrar mas</button>
            <br><br>
        </div>
        <div class="col-md text-center">
            <img src="../../assets/rulasRutineAssets/Maximus.png" id="imgBasico" alt="">
            <p>nivel Nuevo de 250 a 99999 exp</p>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" >Mostrar mas</button>
            <br><br>
        </div>
    </div>
</div>
<br>
<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Informacion acerca del nivel</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">button</button>
  </div>
  <div class="offcanvas-body">
    <p></p>
  </div>
</div>
<br>
</div> 
</template>

<script>
export default{
    name: "nivelesView",
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.container{
    font-family: 'Bebas Neue';
}
.img-fluid{
    width: 90%;
}
#imgBasico{
    width: 300px; 
}

@media screen and (max-width: 768px) and (min-width: 414px){
    .img-fluid{
        width: 100%;
    }
}

@media screen and (max-width: 414px){
    .img-fluid{
        width: 50%;
    }
}


</style>