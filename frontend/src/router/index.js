import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductView from '../views/ProductView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CartView from '../views/CartView.vue'
import NotFoundView from '../views/NotFoundView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'ProductsPage',
    component: ProductView
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetailView
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartView
  },
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '*',
    name: 'NotFoundView',
    component: NotFoundView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
