<template>
    <section aria-label="section">
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <h3>{{ blog_id ? 'Edit Blog' : 'Create Blog' }}</h3>
                    
                    
                    <div class="spacer-10"></div>
                    
                    <form class="form-border" @submit="handleSubmit">

                        <div class="row">

                            <div class="col-md-12">
                                <div class="field-set">
                                    <label>Title:</label>
                                    <input type='text' name='name' v-model="title" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="field-set">
                                    <label>Image:</label>
                                    <input type='text' name='image' v-model="image" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="field-set">
                                    <label for="description">Content:</label>
                                    <textarea v-model="content" name="description" class="form-control" rows="5"></textarea>
                                </div>
                            </div>

                            <div class="col-md-12 mt-5">

                                <div class="pull-left">
                                    <button type='submit' class="btn-main color-2">Save</button>
                                </div>

                            </div>

                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'BlogForm',
    mounted() {
        if (this.blog_id) this.getBlog();
    },
    data() {
        return {
            blog_id: this.$route.params.id ? this.$route.params.id : '',
            title: '',
            image: '',
            content: '',
        }
    },
    methods: {
        async createBlog() {
            try {
                await axios.post('https://rentrover.onrender.com/api/v1/blogs', {
                    title: this.title,
                    content: this.content,
                    image: this.image
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                const confirmationResult = await Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You have successfully created blog!',
                    showConfirmButton: true,
                    confirmButtonColor: 'green'
                });

                if (confirmationResult.isConfirmed) {
                    window.location.href = '/blogsAdmin';
                }
            } catch (error) {
                let message = 'Please fill in all fields!';

                if (error.response.data.msg.startsWith('Duplicate')) {
                    message = 'Blog already exists!';
                }

                Swal.fire({
                    icon: 'warning',
                    text: message,
                    confirmButtonColor: 'red'
                });
            }
        },

        async getBlog() {
            try {
                const response = await axios.get(`https://rentrover.onrender.com/api/v1/blogs/${this.blog_id}`);

                this.title = response.data.blog.title;
                this.content = response.data.blog.image;
                this.image = response.data.blog.image;
            } catch (error) {
                console.log(error);
            }
        },

        async editBlog() {
            try {
                await axios.put(`https://rentrover.onrender.com/api/v1/blogs/${this.blog_id}`, {
                    title: this.title,
                    content: this.content,
                    image: this.image
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                const confirmationResult = await Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You have successfully updated blog!',
                    showConfirmButton: true,
                    confirmButtonColor: 'green'
                });

                if (confirmationResult.isConfirmed) {
                    window.location.href = '/blogsAdmin';
                }
            } catch (error) {
                let message = 'Please fill in all fields!';

                if (error.response.data.msg.startsWith('Duplicate')) {
                    message = 'Blog already exists!';
                }

                Swal.fire({
                    icon: 'warning',
                    text: message,
                    confirmButtonColor: 'red'
                });
            }
        },

        handleSubmit(e) {
            e.preventDefault();

            if (this.blog_id) this.editBlog();
            else this.createBlog();
        },
    },
}
</script>