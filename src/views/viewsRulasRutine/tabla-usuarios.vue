<template>
    <div class="container">
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
                            
                            <td class="form-group">
                                <button class="btn btn-info mt-1"
                                    style="font-size: auto; width: auto; margin-right: 10px;">editar</button>
                                <button class="btn btn-danger mt-1">eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="btns text-center">
                <button class="btn btn-info" >¿Quieres agregar un entrenador?</button>
            </div>
        </div>
        <br>
    </div>
</template>

<script>
export default {
    name: "UsuariosView",
    components: {},
    data() {
        return {
            fields: ['Nombre', 'Apellidos', 'Edad', 'Email', 'Experiencia', 'Rol', 'Acciones'],
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        .container {
            font-family: 'Bebas Neue';
            width: auto;
        }
</style>