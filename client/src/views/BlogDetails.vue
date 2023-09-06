<template>
    <section aria-label="section">
        <div class="container">
            <div class="row">
                <div class="col-md-10">
                    <Details />
                    <div class="spacer-single"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Details from '../components/blog/Details.vue';
export default {
    components: {
        Details
    }
}
</script>