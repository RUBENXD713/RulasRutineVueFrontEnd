//RulasRutine
import Login from '../views/viewsRulasRutine/login.vue';
import Registro from '../views/viewsRulasRutine/register.vue';
import tablaUsuariosVue from '../views/viewsRulasRutine/tabla-usuarios.vue';

//other
import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Nuevo from '../views/NuevaCita.vue'
import clientes from '../views/Clientes.vue'
import mascotas from '../views/Mascotas.vue'
import perfil from '../views/perfil.vue'
import admin from '../views/Administrador.vue'
import consulta from '../views/ConsultaMascota.vue'
import ejemplo from '../views/Ejemplo.vue'
import servicios from '../views/Servicios.vue'
import notfount from '../views/error404.vue'
import alerta from '../views/testAlertas.vue'
//import Consultar from '../views/ConsultaMascota.vue' 



Vue.use(VueRouter)

const routes = [
  {
    path: '/usuarios',
    name: 'usuarios',
    component: tablaUsuariosVue
  },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Registro
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component:Dashboard
  },{
    path: '/clientes',
    name: 'clienteBash',
    component: clientes
  },{
    path: '/mascotas',
    name: 'mascotasBash',
    component: mascotas
  },{
    path: '/consulta/:id',
    name: 'consultaMascota',
    component: consulta
  },
  {
    path: '/servicios',
    name: 'ServicioBash',
    component: servicios
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: perfil
  },
  {
    path: '/admin',
    name: 'AdminBash',
    component: admin
  },
  {
    path: '/alerta',
    name: 'controlAlerta',
    component: alerta
  },
  {
    path: '/formTest',
    name: 'formExample',
    component: ejemplo
  },
  {
    path: '/nuevo',
    name: 'Nuevo',
    component: Nuevo
  },
  {
    path: '*',
    name: 'error',
    component: notfount
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router