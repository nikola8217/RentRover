<template>
    <section>
        <div class="container mt-5">
            <div class="row">
                <div>
                    <div class="card p-4 rounded-5 mb25">
                        <div class="d-flex justify-content-between">
                            <h4>List of all blogs</h4>
                            <button class="btn btn-success col-sm-2 mt-3 mb-3" @click="createBlog">New Blog</button>
                        </div>

                        <table class="table de-table">
                            <thead>
                                <tr>
                                    <th scope="col"><span class="text-uppercase fs-12">ID</span></th>
                                    <th scope="col"><span class="text-uppercase fs-12">Title</span></th>
                                    <th scope="col"><span class="text-uppercase fs-12 pull-right">Action</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(blog, index) in this.blogs" :key="index">
                                    <td><div class="badge bg-gray-100 text-dark">{{ blog._id }}</div></td>
                                    <td>{{ blog.title }}</td>
                                    <td>
                                        <div class="pull-right">
                                            <button class="btn btn-primary" style="margin-right: 5px" @click="editBlog(blog._id)">Edit</button>
                                            <button class="btn btn-danger" @click="deleteBlog(blog._id)">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'BlogTable',
    mounted() {
        this.getBlogs();
    },
    data() {
        return {
            blogs: [],
        }
    },
    methods: {
        async getBlogs() {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/blogs');

                this.blogs = response.data.blogs;
            } catch (error) {
                console.log(error);
            }
        },

        createBlog() {
            window.location.href = '/blogForm';
        },

        editBlog(id) {
            window.location.href = `/blogForm/${id}`;
        },

        async deleteBlog(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'Cancel',
                confirmButtonColor: 'green',
                cancelButtonColor: 'red'
            }).then((result) => {
                if (result.isConfirmed) {
                    try {
                        axios.delete(`http://localhost:5000/api/v1/blogs/${id}`, {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem('token')}`
                            }
                        });

                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Blog is successfully deleted!',
                            icon: 'success',
                            confirmButtonColor: 'green',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                this.getBlogs();
                            }
                        });

                        
                    } catch (error) {
                        console.log(error);
                    }
                }
            });
        }
    },
}
</script>