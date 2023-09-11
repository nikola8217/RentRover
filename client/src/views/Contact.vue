<template>
    <ContactForm />
    <!-- <section aria-label="section">
    <div class="container mt-5">
            <div class="row g-custom-x">
                
                <div class="col-lg-8 mb-sm-30">

                    <h3>Do you have any question?</h3>
                
                    <form name="contactForm" id="contact_form" class="form-border" method="post" action="#">
                            <div class="row">
                                <div class="col-md-6 mb10">
                                    <div class="field-set">
                                        <input type="text" name="Name" id="name" class="form-control" placeholder="Your Name" required>
                                    </div>
                                </div>
                                <div class="col-md-6 mb10">
                                    <div class="field-set">
                                        <input type="text" name="Email" id="email" class="form-control" placeholder="Your Email" required>
                                    </div>
                                </div>
                            </div>
                                
                            <div class="field-set mb20">
                                <textarea name="message" id="message" class="form-control" placeholder="Your Message" required></textarea>
                            </div>
                            <div class="g-recaptcha" data-sitekey="copy-your-site-key-here"></div>
                            <div id='submit' class="mt20">
                                <input type='submit' id='send_message' value='Send Message' class="btn-main">
                            </div>

                            <div id="success_message" class='success'>
                                Your message has been sent successfully. Refresh this page if you want to send more messages.
                            </div>
                            <div id="error_message" class='error'>
                                Sorry there was an error sending your form.
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

    </section> -->
</template>

<script>
import ContactForm from '../components/contact/ContactForm.vue';
export default {
    components: {
        ContactForm
    }
}
</script>