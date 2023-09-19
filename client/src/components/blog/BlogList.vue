<template>
    <section id="section-content" aria-label="section">
        <div class="container mt-5">
            <h3 class="mb-5">Follow our blog</h3>
            <div class="row gx-5">
                <div class="col-lg-8" v-for="(blog, index) in this.blogs" :key="index">
                    <div class="de-post-type-1">
                        <div class="d-image">
                            <img alt="" :src="blog.image" class="lazy">
                        </div>
                        <div class="d-content">
                            <div class="d-meta">
                                <span class="d-date">{{ blog.createdAt }}</span>
                            </div>
                            <h4 class="mb-3"><a :href="$router.resolve({name: `blogDetails`, params: { id: blog._id } }).href">{{ blog.title }}<span></span></a></h4>
                            <p>{{ blog.content }}</p>
                            <a :href="$router.resolve({name: `blogDetails`, params: { id: blog._id } }).href" class="btn-main">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: "BlogList",
    mounted() {
        this.getBlogs();
    },
    data() {
        return {
            blogs: []
        }
    },
    methods: {
        async getBlogs() {
            try {
                const response = await axios.get('https://rentrover.onrender.com/api/v1/blogs');
                
                this.blogs = response.data.formattedBlogs.map(blog => ({
                    ...blog,
                    image: `assets/images/blog/${blog.image}`,
                }));
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>