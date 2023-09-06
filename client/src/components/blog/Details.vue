<template>
   
    <div class="blog-read">

        <div class="post-title mt-5 mb-5">
            <h4><b>{{ blog.title }}</b></h4>
        </div>

        <img :src="blog.image" class="img-fullwidth mb-5">

        <!-- <div class="post-text">
            {{ blog.content }}
        </div> -->
        <div class="post-text" v-html="blog.content" style="white-space: pre-line;"></div>

    </div>
               
</template>

<script>
import axios from 'axios';

export default {
    name: 'Details',
    mounted() {
        this.getBlog();
    },
    data() {
        return {
            blog: {},
            id: this.$route.params.id
        }
    },
    methods: {
        async getBlog() {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/blogs/${this.id}`)
                this.blog = response.data.blog;
                this.blog.image = `/assets/images/blog/${this.blog.image}`;
            } catch (error) {
                console.log(error);
            }
        }
    },    
}
</script>