import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Cars from '../views/Cars.vue';
import CarDetails from '../views/CarDetails.vue';
import Blogs from '../views/Blog.vue';
import BlogDetails from '../views/BlogDetails.vue';
import Contact from '../views/Contact.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Users from '../views/admin/Users.vue';
import User from '../views/admin/forms/User.vue';
import Categories from '../views/admin/Categories.vue';
import Category from '../views/admin/forms/Category.vue';
import Brands from '../views/admin/Brands.vue';
import Brand from '../views/admin/forms/Brand.vue';
import CarsAdmin from '../views/admin/Cars.vue';
import Car from '../views/admin/forms/Car.vue';
import BlogsAdmin from '../views/admin/Blogs.vue';
import Blog from '../views/admin/forms/Blog.vue';
import Profile from '../views/Profile.vue';
import { checkIsAuth, checkIsGuest, checkIsAdmin, checkIsGuestOrUser } from './protection.js';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: checkIsGuestOrUser
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    beforeEnter: checkIsGuestOrUser
  },
  {
    path: '/cars',
    name: 'cars',
    component: Cars,
    beforeEnter: checkIsGuestOrUser
  },
  {
    path: '/carDetails/:id',
    name: 'carDetails',
    component: CarDetails,
    beforeEnter: checkIsGuestOrUser
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blogs,
    beforeEnter: checkIsGuestOrUser
  },
  {
    path: '/blogDetails/:id',
    name: 'blogDetails',
    component: BlogDetails,
    beforeEnter: checkIsGuestOrUser
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    beforeEnter: checkIsGuestOrUser
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: checkIsAuth
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: checkIsGuest
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: checkIsGuest
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
    beforeEnter: checkIsAdmin
  },
  {
    path: '/userForm/:id?',
    name: 'userForm',
    component: User,
    beforeEnter: checkIsAdmin
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories,
    beforeEnter: checkIsAdmin
  },
  {
    path: '/categoryForm/:id?',
    name: 'categoryForm',
    component: Category,
    beforeEnter: checkIsAdmin
  },
  {
    path: '/brands',
    name: 'brands',
    component: Brands,
    beforeEnter: checkIsAdmin
  },
  {
    path: '/brandForm/:id?',
    name: 'brandForm',
    component: Brand,
    beforeEnter: checkIsAdmin
  },
  {
    path: '/carsAdmin',
    name: 'carsAdmin',
    component: CarsAdmin,
    beforeEnter: checkIsAdmin
  },
  {
    path: '/carForm/:id?',
    name: 'carForm',
    component: Car,
    beforeEnter: checkIsAdmin
  },
  {
    path: '/blogsAdmin',
    name: 'blogsAdmin',
    component: BlogsAdmin,
    beforeEnter: checkIsAdmin
  },
  {
    path: '/blogForm/:id?',
    name: 'blogForm',
    component: Blog,
    beforeEnter: checkIsAdmin
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;