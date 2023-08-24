<template>
    <div class="no-bottom no-top" id="content">
        <Hero />
        <Explore />
        <Facts />
        <Recommendations />
    </div>
</template>

<script>
import Hero from '../components/home/Hero.vue';
import Facts from '../components/home/Facts.vue';
import Explore from '../components/home/Explore.vue';
import Recommendations from '../components/home/Recommendations.vue';

export default {
    components: {
        Hero,
        Facts,
        Explore,
        Recommendations
    }
}
</script>