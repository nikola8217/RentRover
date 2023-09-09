<template>
    <section aria-label="section">
        <div class="container">
            <div class="row">
                <div class="col-md-10">
                    <Details :blog="blog" />
                    <div class="spacer-single"></div>
                    <CommentSection :comments="comments" @getBlog="getBlog" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Details from '../components/blog/Details.vue';
import CommentSection from '../components/comment/CommentSection.vue';
import axios from 'axios';

export default {
    components: {
        Details,
        CommentSection
    },
    mounted() {
        this.getBlog();
    },
    data() {
        return {
            blog: {},
            id: this.$route.params.id,
            comments: []
        }
    },
     methods: {
        async getBlog() {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/blogs/${this.id}`)
                this.blog = response.data.blog;
                this.blog.image = `/assets/images/blog/${this.blog.image}`;
                this.comments = response.data.blog.comments;
            } catch (error) {
                console.log(error);
            }
        }
    },    
}
</script>