<template>
    <section id="section-cars" >
        <div class="container mt-5">
            <div class="row">
                <div>
                    <div class="card p-4 rounded-5 mb25">
                        <h4>List of all users</h4>

                        <table class="table de-table">
                            <thead>
                                <tr>
                                    <th scope="col"><span class="text-uppercase fs-12">ID</span></th>
                                    <th scope="col"><span class="text-uppercase fs-12">Name</span></th>
                                    <th scope="col"><span class="text-uppercase fs-12">Email</span></th>
                                    <th scope="col"><span class="text-uppercase fs-12">Role</span></th>
                                    <th scope="col"><span class="text-uppercase fs-12 pull-right">Action</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in this.users" :key="index">
                                    <td><div class="badge bg-gray-100 text-dark">{{ user._id }}</div></td>
                                    <td>{{ user.name }}</td>
                                    <td>{{ user.email }}</td>
                                    <td>{{ user.role }}</td>
                                    <td>
                                        <div class="pull-right">
                                            <button class="btn btn-primary" style="margin-right: 5px" @click="editUser(user._id)">Edit</button>
                                            <button class="btn btn-danger" @click="deleteUser(user._id)">Delete</button>
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
    name: 'UsersTable',
    mounted() {
        this.getUsers();
    },
    data() {
        return {
            users: []
        }
    },
    methods: {
        async getUsers() {
            try {
                const response = await axios.get('https://rentrover.onrender.com/api/v1/users', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                this.users = response.data.users;
            } catch (error) {
                console.log(error);
            }
        },

        editUser(id) {
            window.location.href = `/userForm/${id}`;
        },

        async deleteUser(id) {
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
                        axios.delete(`https://rentrover.onrender.com/api/v1/users/${id}`, {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem('token')}`
                            }
                        });

                        Swal.fire({
                            title: 'Deleted!',
                            text: 'User is successfully deleted!',
                            icon: 'success',
                            confirmButtonColor: 'green',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                this.getUsers();
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