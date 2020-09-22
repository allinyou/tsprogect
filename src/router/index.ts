import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import routes from './routes';

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router
