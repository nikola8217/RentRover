<template>
    <div class="row mb-3">
        <div class="col-lg-12">

            <div class="card p-4 rounded-5 mb25">
                <h4>Booked</h4>

                <div v-if="rents.length > 0">
                    <table class="table de-table" >
                        <thead>
                            <tr>
                                <th scope="col"><span class="text-uppercase fs-12">ID</span></th>
                                <th scope="col"><span class="text-uppercase fs-12">Car</span></th>
                                <th scope="col"><span class="text-uppercase fs-12">Pick up location</span></th>
                                <th scope="col"><span class="text-uppercase fs-12">Drop of location</span></th>
                                <th scope="col"><span class="text-uppercase fs-12">Start date</span></th>
                                <th scope="col"><span class="text-uppercase fs-12">End date</span></th>
                                <th scope="col"><span class="text-uppercase fs-12">Total price</span></th>
                                <th scope="col"><span class="text-uppercase fs-12 pull-right">Action</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(rent, index) in this.rents" :key="index">
                                <td><div class="badge bg-gray-100 text-dark">{{ rent._id }}</div></td>
                                <td>{{ rent.car.brand.name }} {{ rent.car.name }}</td>
                                <td>{{ rent.pickUpLocation }}</td>
                                <td>{{ rent.dropOffLocation }}</td>
                                <td>{{ formatDates(rent.startDate) }}</td>
                                <td>{{ formatDates(rent.endDate) }}</td>
                                <td>{{ rent.totalPrice }}e</td>
                                <td>
                                    <div class="pull-right">
                                        <button class="btn btn-danger" @click="deleteRent(rent._id)">Cancel</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-else>
                    <p>You haven't booked any car!</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'UserRent',
    mounted() {
        this.getRents();
        console.log(this.rents);
    },
    data() {
        return {
            rents: [],
            user: localStorage.getItem('user_id')
        }
    },
    methods: {
        async getRents() {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/rent/${this.user}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                this.rents = response.data.rents;
                console.log(this.rents);
            } catch (error) {
                console.log(error);
            }
        },

        formatDates(value) {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date(value).toLocaleDateString('en-US', options);
        },

        async deleteRent(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, cancel it!',
                cancelButtonText: 'No',
                confirmButtonColor: 'green',
                cancelButtonColor: 'red'
            }).then((result) => {
                if (result.isConfirmed) {
                    try {
                        axios.delete(`http://localhost:5000/api/v1/rent/${id}`, {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem('token')}`
                            }
                        });

                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Canceled!',
                            icon: 'success',
                            confirmButtonColor: 'green',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                this.getRents();
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