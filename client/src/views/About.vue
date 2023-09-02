<template>
    <div>
        <div id="top"></div>
        <Features />
        <AboutUs />    
    </div>
</template>

<script>
import Features from '../components/about/Features.vue';
import AboutUs from '../components/about/AboutUs.vue';

export default {
    components: {
        Features,
        AboutUs
    }
}
</script>