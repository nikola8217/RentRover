<template>
    <section id="section-cars">
        <div class="container mt-5">
            <div class="row">
                <div>
                    <div class="card p-4 rounded-5 mb25">
                        <div class="d-flex justify-content-between">
                            <h4>List of all cars</h4>
                            <button class="btn btn-success col-sm-2 mt-3 mb-3" @click="createCar">New Car</button>
                        </div>

                        <table class="table de-table">
                            <thead>
                                <tr>
                                    <th scope="col"><span class="text-uppercase fs-12">ID</span></th>
                                    <th scope="col"><span class="text-uppercase fs-12">Car</span></th>
                                    <th scope="col"><span class="text-uppercase fs-12">Category</span></th>
                                    <th scope="col"><span class="text-uppercase fs-12">Fuel</span></th>
                                    <th scope="col"><span class="text-uppercase fs-12">Transmission</span></th>
                                    <th scope="col"><span class="text-uppercase fs-12">Year</span></th>
                                    <th scope="col"><span class="text-uppercase fs-12">Mileage</span></th>
                                    <th scope="col"><span class="text-uppercase fs-12 pull-right">Action</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(car, index) in this.cars" :key="index">
                                    <td><div class="badge bg-gray-100 text-dark">{{ car._id }}</div></td>
                                    <td>{{ car.brand.name }} {{ car.name }}</td>
                                    <td>{{ car.category.name }}</td>
                                    <td>{{ car.fuel }}</td>
                                    <td>{{ car.transmission }}</td>
                                    <td>{{ car.year }}</td>
                                    <td>{{ car.mileage }} km</td>
                                    <td>
                                        <div class="pull-right">
                                            <button class="btn btn-primary" style="margin-right: 5px" @click="editCar(car._id)">Edit</button>
                                            <button class="btn btn-danger" @click="deleteCar(car._id)">Delete</button>
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
    name: 'CarTable',
    mounted() {
        this.getCars();
    },
    data() {
        return {
            cars: [],
        }
    },
    methods: {
        async getCars() {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/cars');

                this.cars = response.data.cars;
            } catch (error) {
                console.log(error);
            }
        },

        createCar() {
            window.location.href = '/carForm';
        },

        editCar(id) {
            window.location.href = `/carForm/${id}`;
        },

        async deleteCar(id) {
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
                        axios.delete(`http://localhost:5000/api/v1/cars/${id}`, {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem('token')}`
                            }
                        });

                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Car is successfully deleted!',
                            icon: 'success',
                            confirmButtonColor: 'green',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                this.getCars();
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