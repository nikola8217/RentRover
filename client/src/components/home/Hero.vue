<template>
    <section id="section-hero" aria-label="section" class="full-height vertical-center" data-bgimage="url(assets/images/background/7.jpg) bottom">
        <div class="container">
            <div class="row align-items-center">
                <div class="spacer-double sm-hide"></div>
                <div class="col-lg-6">
                    <h4><span class="id-color">Plan your trip now</span></h4>
                    <div class="spacer-10"></div>
                    <h1>Discover the World in Comfort with Our Rental Cars</h1>
                    <p class="lead">Embark on your journey with the perfect companion – a comfortable car that takes you places with style and ease.</p>

                    <a class="btn-main" :href="$router.resolve({name: 'cars'}).href">Choose a Car</a>&nbsp;&nbsp;&nbsp;<a class="btn-main btn-black" :href="$router.resolve({name: 'register'}).href">Create Account</a>
                </div>

                <div class="col-lg-6">
                    <img src="assets/images/cars/glehome.avif" class="img-fluid" alt="">
                </div>
                
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Hero'
    }
</script>