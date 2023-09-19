<template>
    <section aria-label="section">
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <h3>Don't have an account? Register now.</h3>
                    <p>Embark on your car rental journey by creating a personalized account. Simply provide your name, email address, and a secure password to get started. Your information is kept secure and private, ensuring a worry-free registration process. Start your adventure today with just a few clicks.</p>
                    
                    <div class="spacer-10"></div>
                    
                    <form name="contactForm" class="form-border" @submit="register">

                        <div class="row">

                            <div class="col-md-12">
                                <div class="field-set">
                                    <label>Name:</label>
                                    <input type='text' name='name' v-model="name" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="field-set">
                                    <label>Email Address:</label>
                                    <input type='text' name='email' v-model="email" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="field-set">
                                    <label>Password:</label>
                                    <input type='password' name='password' v-model="password" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-12 mt-5">

                                <div class="pull-left">
                                    <button type='submit' class="btn-main color-2">Register Now</button>
                                </div>

                            </div>

                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'RegisterForm',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },

    methods: {
        async register(e) {
            e.preventDefault();
            
            try {
                await axios.post('https://rentrover.onrender.com/api/v1/auth/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }, {
                    headers: { 
                        'Content-Type': 'application/json' 
                    }
                });
               
                const confirmationResult = await Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You have successfully created an account!',
                    showConfirmButton: true,
                    confirmButtonColor: 'green'
                });

                if (confirmationResult.isConfirmed) {
                    window.location.href = '/login';
                }
                
            } catch (error) {
                let message = 'Please fill in all fields!';

                if (error.response.data.msg.startsWith('Please provide valid')) {
                    message = 'Please provide valid email!';
                }

                if (error.response.data.msg.startsWith('Path')) {
                    message = 'Password must have at least 6 characters!';
                }

                if (error.response.data.msg.startsWith('Duplicate')) {
                    message = 'Email is already taken!';
                }

                Swal.fire({
                        icon: 'warning',
                        text: message,
                        confirmButtonColor: 'red'
                });
            }
        }
    },
}
</script>