<template>
    <div>
        <div class="container">
            <Header></Header>
            <div class="mt-4">
                <h3 class="text-light">
                    usuarios
                </h3>
                <div class="table-responsive text-center">
                    <table class="table text-light">
                        <thead class="text-center">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Edad</th>
                                <th scope="col">Email</th>
                                <th scope="col">Experiencia</th>
                                <th scope="col">Rol</th>
                                <th scope="col">Acción</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td class="form-group">
                                    <button class="btn btn-info mt-1"
                                        style="font-size: auto; width: auto; margin-right: 10px;"
                                        v-on:click="goToPage('/editarUsuario')">editar</button>
                                    <button class="btn btn-danger mt-1">eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- <pagination-controls (pageChange)="page = $event" previousLabel="Anterior"
                            nextLabel="Siguente"></pagination-controls> -->
                </div>
                <div class="btns text-center">
                    <button class="btn btn-info">¿Quieres agregar un entrenador?</button>
                </div>
            </div>
        </div>
        <br><br><br>
        <Footer />
    </div>
</template>

<script>
// import axios from "axios";
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: "UsuariosView",
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
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        .container {
            font-family: 'Bebas Neue';
            width: auto;
        }
</style>