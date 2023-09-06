<template>
    <div class="col-lg-4">
        <div class="widget widget-post">
            <h4>Recent Posts</h4>
            <div class="small-border"></div>
            <ul class="de-bloglist-type-1">
                <li v-for="(blog, index) in this.blogs" :key="index">
                    <div class="d-image">
                        <img :src="blog.image" alt="">
                    </div>
                    <div class="d-content">
                        <a :href="$router.resolve({name: `blogDetails`, params: { id: blog._id } }).href"><h4>{{ blog.title }}</h4></a>
                        <div class="d-date">{{ blog.createdAt }}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "RecentPosts",
    props: ["blogs"],
}
</script>