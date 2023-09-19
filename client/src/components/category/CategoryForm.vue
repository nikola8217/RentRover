<template>
    <section aria-label="section">
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <h3>{{ category_id ? 'Edit Category' : 'Create Category' }}</h3>
                    
                    
                    <div class="spacer-10"></div>
                    
                    <form class="form-border" @submit="handleSubmit">

                        <div class="row">

                            <div class="col-md-12">
                                <div class="field-set">
                                    <label>Name:</label>
                                    <input type='text' name='name' v-model="name" class="form-control">
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
    name: 'CategoryForm',
    mounted() {
        if (this.category_id) this.getCategory();
    },
    data() {
        return {
            category_id: this.$route.params.id ? this.$route.params.id : '',
            name: ''
        }
    },
    methods: {
        async createCategory() {
            try {
                await axios.post('https://rentrover.onrender.com/api/v1/categories', {
                    name: this.name
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                const confirmationResult = await Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You have successfully created category!',
                    showConfirmButton: true,
                    confirmButtonColor: 'green'
                });

                if (confirmationResult.isConfirmed) {
                    window.location.href = '/categories';
                }
            } catch (error) {
                let message = 'Please fill in all fields!';

                if (error.response.data.msg.startsWith('Duplicate')) {
                    message = 'Category already exists!';
                }

                Swal.fire({
                    icon: 'warning',
                    text: message,
                    confirmButtonColor: 'red'
                });
            }
        },

        async getCategory() {
            try {
                const response = await axios.get(`https://rentrover.onrender.com/api/v1/categories/${this.category_id}`);

                this.name = response.data.category.name;
            } catch (error) {
                console.log(error);
            }
        },

        async editCategory() {
            try {
                await axios.put(`https://rentrover.onrender.com/api/v1/categories/${this.category_id}`, {
                    name: this.name
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                const confirmationResult = await Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You have successfully updated category!',
                    showConfirmButton: true,
                    confirmButtonColor: 'green'
                });

                if (confirmationResult.isConfirmed) {
                    window.location.href = '/categories';
                }
            } catch (error) {
                let message = 'Please fill in all fields!';

                if (error.response.data.msg.startsWith('Duplicate')) {
                    message = 'Category already exists!';
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

            if (this.category_id) this.editCategory();
            else this.createCategory();
        }
    },
}
</script>