<template>
    <section id="section-cars">
        <div class="container mt-5">
            <div class="row">
                <div>
                    <div class="card p-4 rounded-5 mb25">
                        <div class="d-flex justify-content-between">
                            <h4>List of all brands</h4>
                            <button class="btn btn-success col-sm-2 mt-3 mb-3" @click="createBrand">New Brand</button>
                        </div>

                        <table class="table de-table">
                            <thead>
                                <tr>
                                    <th scope="col"><span class="text-uppercase fs-12">ID</span></th>
                                    <th scope="col"><span class="text-uppercase fs-12">Name</span></th>
                                    <th scope="col"><span class="text-uppercase fs-12 pull-right">Action</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(brand, index) in this.brands" :key="index">
                                    <td><div class="badge bg-gray-100 text-dark">{{ brand._id }}</div></td>
                                    <td>{{ brand.name }}</td>
                                    <td>
                                        <div class="pull-right">
                                            <button class="btn btn-primary" style="margin-right: 5px" @click="editBrand(brand._id)">Edit</button>
                                            <button class="btn btn-danger" @click="deleteBrand(brand._id)">Delete</button>
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
    name: 'BrandTable',
    mounted() {
        this.getBrands();
    },
    data() {
        return {
            brands: [],
        }
    },
    methods: {
        async getBrands() {
            try {
                const response = await axios.get('https://rentrover.onrender.com/api/v1/brands');

                this.brands = response.data.brands;
            } catch (error) {
                console.log(error);
            }
        },

        createBrand() {
            window.location.href = '/brandForm';
        },

        editBrand(id) {
            window.location.href = `/brandForm/${id}`;
        },

        async deleteBrand(id) {
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
                        axios.delete(`https://rentrover.onrender.com/api/v1/brands/${id}`, {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem('token')}`
                            }
                        });

                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Brand is successfully deleted!',
                            icon: 'success',
                            confirmButtonColor: 'green',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                this.getBrands();
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