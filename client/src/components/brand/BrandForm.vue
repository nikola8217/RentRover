<template>
    <section aria-label="section">
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <h3>{{ brand_id ? 'Edit Brand' : 'Create Brand' }}</h3>
                    
                    
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
    name: 'BrandForm',
    mounted() {
        if (this.brand_id) this.getBrand();
    },
    data() {
        return {
            brand_id: this.$route.params.id ? this.$route.params.id : '',
            name: ''
        }
    },
    methods: {
        async createBrand() {
            try {
                await axios.post('https://rentrover.onrender.com/api/v1/brands', {
                    name: this.name
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                const confirmationResult = await Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You have successfully created brand!',
                    showConfirmButton: true,
                    confirmButtonColor: 'green'
                });

                if (confirmationResult.isConfirmed) {
                    window.location.href = '/brands';
                }
            } catch (error) {
                let message = 'Please fill in all fields!';

                if (error.response.data.msg.startsWith('Duplicate')) {
                    message = 'Brand already exists!';
                }

                Swal.fire({
                    icon: 'warning',
                    text: message,
                    confirmButtonColor: 'red'
                });
            }
        },

        async getBrand() {
            try {
                const response = await axios.get(`https://rentrover.onrender.com/api/v1/brands/${this.brand_id}`);

                this.name = response.data.brand.name;
            } catch (error) {
                console.log(error);
            }
        },

        async editBrand() {
            try {
                await axios.put(`https://rentrover.onrender.com/api/v1/brands/${this.brand_id}`, {
                    name: this.name
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                const confirmationResult = await Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You have successfully updated brand!',
                    showConfirmButton: true,
                    confirmButtonColor: 'green'
                });

                if (confirmationResult.isConfirmed) {
                    window.location.href = '/brands';
                }
            } catch (error) {
                let message = 'Please fill in all fields!';

                if (error.response.data.msg.startsWith('Duplicate')) {
                    message = 'Brand already exists!';
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

            if (this.brand_id) this.editBrand();
            else this.createBrand();
        }
    },
}
</script>