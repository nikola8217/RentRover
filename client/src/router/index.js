import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Cars from '../views/Cars.vue';
import CarDetails from '../views/CarDetails.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Users from '../views/admin/Users.vue';
import User from '../views/admin/forms/User.vue';
import Categories from '../views/admin/Categories.vue';
import Category from '../views/admin/forms/Category.vue';
import Brands from '../views/admin/Brands.vue';
import Brand from '../views/admin/forms/Brand.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/cars',
    name: 'cars',
    component: Cars
  },
  {
    path: '/carDetails/:id',
    name: 'carDetails',
    component: CarDetails
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/userForm/:id?',
    name: 'userForm',
    component: User
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories
  },
  {
    path: '/categoryForm/:id?',
    name: 'categoryForm',
    component: Category
  },
  {
    path: '/brands',
    name: 'brands',
    component: Brands
  },
  {
    path: '/brandForm/:id?',
    name: 'brandForm',
    component: Brand
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;