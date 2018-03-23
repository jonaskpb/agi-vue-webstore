import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Categories from '@/components/Categories'
import Cart from '@/components/Cart'
import Category from '@/components/Category'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/cart',
      name: 'Shopping Cart',
      component: Cart
    },
    {
      path: '/categories/:name',
      name: 'Category',
      component: Category
    }
  ]
})