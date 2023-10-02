<template>
    <section id="section-hero" class="jarallax text-light pt50 pb50 vertical-center" aria-label="section">
        <!-- <img src="images/background/11.jpg" class="jarallax-img" alt=""> -->
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h1 style="color: black">Something's missing.</h1>
                    <p style="color: black">Looks like this page is missing. Don't worry though, our best team is on the case.</p>
                    <a :href="$router.resolve({name: 'home'}).href" class="btn-main">Back to Home Page</a>
                    <div class="spacer-10"></div>
                </div>
                <div class="col-lg-6 text-center">
                    <h1 class="s2">
                        <span class="c1" style="color: black">404</span>
                        <span class="spacer-single"></span>
                        <span class="c3" style="color: black">Not Found</span>
                    </h1>
                </div>
            </div>
        </div>
    </section>
</template>