<template>
    <section id="section-hero" aria-label="section" class="jarallax">
        <img src="assets/images/cars/loginback.avif" class="jarallax-img" alt="">
        <div class="v-center">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 offset-lg-4">
                        <div class="padding40 rounded-3 shadow-soft" data-bgcolor="#ffffff">
                            <h4 class="mb-3">Login</h4>
                            <form id="form_register" class="form-border" @submit="login">
                                <div class="field-set mb-3">
                                    <input type="text" name="name" id="name" v-model="email" class="form-control" placeholder="Your Name" />
                                </div>
                                <div class="field-set">
                                    <input type="password" name="password" v-model="password" class="form-control" placeholder="Your Password" />
                                </div>
                                <div class="mt-3 mb-3 text-center" >Don't have acount? Create one <a :href="$router.resolve({name: 'register'}).href">here</a>!</div>
                                <div id="submit">
                                    <button type="submit" class="btn-main btn-fullwidth rounded-3">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'LoginForm',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login(e) {
            e.preventDefault();
            
            try {
                const response = await axios.post('http://localhost:5000/api/v1/auth/login', {
                    email: this.email,
                    password: this.password
                });

                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user_id', response.data.user._id);
                localStorage.setItem('role', response.data.user.role);
                localStorage.setItem('name', response.data.user.name);
                localStorage.setItem('email', response.data.user.email);

                if (localStorage.getItem('role') === 'admin') window.location.href = '/users';
                else window.location.href = '/';
               
            } catch (error) {
                console.log(error);
                let message = 'Please fill in all fields!';

                 if (error.response.data.msg.startsWith('Invalid')) {
                    message = 'Invalid credentials!';
                }

                Swal.fire({
                        icon: 'error',
                        text: message,
                        confirmButtonColor: 'red'
                });
            }
        }
    },
}
</script>