<template>
    <div class="row mb-5">
        <div class="col-lg-12">
            <div class="card p-4  rounded-5">
                <div class="row">
                    <div class="col-lg-12">
                        <form id="form-create-item" class="form-border" @submit="changePassword">
                            <div class="de_tab tab_simple">
                            
                                <h4>Change password</h4>
                                
                                <div class="de_tab_content">                            
                                    <div class="tab-1">
                                        <div class="row">
                                            <div class="col-lg-4 mb20">
                                                <h5>Old Password</h5>
                                                <input type="Password" class="form-control" v-model="old_password" />
                                            </div>
                                            <div class="col-lg-4 mb20">
                                                <h5>New Password</h5>
                                                <input type="Password" class="form-control" v-model="new_password" />
                                            </div>
                                            <div class="col-lg-4 mb20">
                                                <h5>Re-enter Password</h5>
                                                <input type="Password" class="form-control" v-model="pass_confirmation" />
                                            </div>                               
                                        </div>
                                    </div>

                                    

                                </div>
                            </div>

                            <button type="submit" id="submit" class="btn-main">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'ChangePasswordForm',
    data() {
        return {
            old_password: '',
            new_password: '',
            pass_confirmation: '',
        }
    },
    methods: {
        async changePassword(e) {
            e.preventDefault();
            
            try {
                await axios.put('http://localhost:5000/api/v1/auth/changePassword', {
                    oldPassword: this.old_password,
                    newPassword: this.new_password,
                    passConfirmation: this.pass_confirmation,
                    userID: localStorage.getItem('user_id'),
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                const confirmationResult = await Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You have successfully changed password!',
                    showConfirmButton: true,
                    confirmButtonColor: 'green'
                });

                if (confirmationResult.isConfirmed) {
                    this.old_password = '';
                    this.new_password = '';
                    this.pass_confirmation = '';
                }
            } catch (error) {
                let message = 'Please fill in all fields!';

                if (error.response.data.msg.startsWith('Old password')) {
                    message = 'Old password is not correct!';
                }

                if (error.response.data.msg.startsWith('New password and')) {
                    message = 'New password and confirmation do not match!';
                }

                if (error.response.data.msg.startsWith('New password must')) {
                    message = 'New password must be at least 6 characters long!';
                }

                Swal.fire({
                    icon: 'warning',
                    text: message,
                    confirmButtonColor: 'red'
                });
            }
        }   
    }
}
</script>