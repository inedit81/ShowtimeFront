import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Shop from "../components/Shop.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }, {
    path: "/login",
    name: "Login",
    component: Login
  }, {
    path: "/shop",
    name: "Shop",
    component: Shop
  }

];

const router = new VueRouter({routes});

export default router;
