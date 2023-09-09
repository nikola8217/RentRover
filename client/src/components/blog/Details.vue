<template>
   
    <div class="blog-read">

        <div class="post-title mt-5 mb-5">
            <h4><b>{{ blog.title }}</b></h4>
        </div>

        <img :src="blog.image" class="img-fullwidth mb-5">

        <div class="post-text" v-html="blog.content" style="white-space: pre-line;"></div>

    </div>
               
</template>

<script>
export default {
    name: 'Details', 
    props: ['blog'],   
    
}
</script>