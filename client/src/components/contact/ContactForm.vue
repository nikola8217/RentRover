<template>
    <section aria-label="section">
        <div class="container mt-5">
            <div class="row g-custom-x">
                
                <div class="col-lg-8 mb-sm-30">

                    <h3>Contact us</h3>
                
                    <form @submit="sendEmail" class="form-border">
                        <div class="row">
                            <div class="col-md-6 mb10">
                                <div class="field-set">
                                    <input type="text" v-model="email"  class="form-control" placeholder="Your Email" required>
                                </div>
                            </div>
                            <div class="col-md-6 mb10">
                                <div class="field-set">
                                    <input type="text" v-model="subject"  class="form-control" placeholder="Subject" required>
                                </div>
                            </div>
                        </div>
                            
                        <div class="field-set mb20">
                            <textarea  class="form-control" v-model="content" placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <div class="g-recaptcha" data-sitekey="copy-your-site-key-here"></div>
                        <div id='submit' class="mt20">
                            <button type='submit' class="btn-main">Send Message</button>
                        </div>

                    </form>
                </div>
            
                <div class="col-lg-4 mt-5">

                    <div class="de-box mb30">
                        <h4>Our Office</h4>
                        <address class="s1">
                            <span><i class="id-color fa fa-map-marker fa-lg"></i>Novaka Djokovica 5, Belgrade</span>
                            <span><i class="id-color fa fa-phone fa-lg"></i>+381 62 8 254 103</span>
                            <span><i class="id-color fa fa-envelope-o fa-lg"></i>gileer404@gmail.com</span>
                        </address>
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
    name: 'ContactForm',
    data() {
        return {
            email: localStorage.getItem('email') ? localStorage.getItem('email') : null,
            subject: '',
            content: ''
        }
    },
    methods: {
        async sendEmail(e) {
            e.preventDefault();
            
            try {
                await axios.post('https://rentrover.onrender.com/api/v1/email', {
                    email: this.email,
                    subject: this.subject,
                    content: this.content
                });

                const confirmationResult = await Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Email is sent!',
                    showConfirmButton: true,
                    confirmButtonColor: 'green'
                });

                if (confirmationResult.isConfirmed) {
                    this.email = localStorage.getItem('email') ? localStorage.getItem('email') : null;
                    this.subject = '';
                    this.content = '';
                }
            } catch (error) {
                let message = 'Please fill in all fields!';

                if (error.response.data.msg.startsWith('Invalid')) {
                    message = 'Invalid email address!';
                }

                Swal.fire({
                    icon: 'warning',
                    text: message,
                    confirmButtonColor: 'red'
                });
            }
        },
    },
}
</script>