<template>
    <section aria-label="section">
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <h3>Edit User</h3>
                    
                    
                    <div class="spacer-10"></div>
                    
                    <form class="form-border" @submit="editUser">

                        <div class="row">

                            <div class="col-md-12">
                                <div class="field-set">
                                    <label>Name:</label>
                                    <input type='text' name='name' v-model="name" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="field-set">
                                    <label>Email:</label>
                                    <input type='text' name='email' v-model="email" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="field-set">
                                    <label for="categorySelect">Role:</label>
                                    <select id="categorySelect" class="form-select" v-model="role">
                                        <option value="user">user</option>
                                        <option value="admin">admin</option>
                                    </select>
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
    name: 'UserForm',
    mounted() {
        if (this.user_id) this.getUser();
    },
    data() {
        return {
            user_id: this.$route.params.id ? this.$route.params.id : '',
            name: '',
            email: '',
            role: ''
        }
    },
    methods: {

        async getUser() {
            try {
                const response = await axios.get(`https://rentrover.onrender.com/api/v1/users/${this.user_id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                this.name = response.data.user.name;
                this.email = response.data.user.email;
                this.role = response.data.user.role;
            } catch (error) {
                console.log(error);
            }
        },

        async editUser(e) {
            e.preventDefault();
            
            try {
                await axios.put(`https://rentrover.onrender.com/api/v1/users/${this.user_id}`, {
                    name: this.name,
                    email: this.email,
                    role: this.role
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                const confirmationResult = await Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You have successfully updated user!',
                    showConfirmButton: true,
                    confirmButtonColor: 'green'
                });

                if (confirmationResult.isConfirmed) {
                    window.location.href = '/users';
                }
            } catch (error) {
                let message = 'Please fill in all fields!';

                if (error.response.data.msg.startsWith('Please provide valid')) {
                    message = 'Please provide valid email!';
                }

                if (error.response.data.msg.startsWith('Duplicate')) {
                    message = 'Email is already!';
                }

                Swal.fire({
                    icon: 'warning',
                    text: message,
                    confirmButtonColor: 'red'
                });
            }
        },
    },
}
</script>