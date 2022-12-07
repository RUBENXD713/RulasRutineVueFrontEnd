<template>
    <div>
        <div class="container">
            <Header></Header>
            <div class="mt-4">
                <h3 class="text-light">
                    Ejercicios
                </h3>
                <div class="table-responsive text-center">
                    <table class="table text-light">
                        <thead class="text-center">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td class="form-group">
                                    <button class="btn btn-info mt-1"
                                        style="font-size: auto; width: auto; margin-right: 10px;"
                                        v-on:click="goToPage('/editarEjercicio')">editar</button>
                                    <button class="btn btn-danger mt-1">eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- <pagination-controls (pageChange)="page = $event" previousLabel="Anterior"
                            nextLabel="Siguente"></pagination-controls> -->
                </div>
                <div class="btns text-center">
                    <button class="btn btn-info">Agregar ejercicio</button>
                </div>
                <br>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            
        }
    },
    methods: {
        goToPage(page) { this.$router.push(page); },
    },
}
</script>

<style>

</style>