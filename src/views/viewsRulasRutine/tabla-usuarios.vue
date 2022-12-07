<template>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Email</th>
                    <th scope="col">Experiencia</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tony</td>
                    <td>Stark Avenger</td>
                    <td>23</td>
                    <td>ejemplo@ejemplo.com</td>
                    <td>3</td>
                    <td>usuario</td>
                </tr>
            </tbody>
        </table>
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