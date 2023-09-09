<template>
    <div id="comment-form-wrapper" v-if="user_id">
        <h4>Leave a Comment</h4>
        <div class="comment_form_holder">
            <form id="contact_form" name="form1" class="form-border" @submit="createComment">

                <label>Name</label>
                <input type="text" name="name" id="name" class="form-control" v-model="name" readonly />

                <label>Comment <span class="req">*</span></label>
                <textarea cols="10" rows="10" name="message" id="message" class="form-control" v-model="text"></textarea>

                <p id="btnsubmit">
                    <input type="submit" id="send" value="Send" class="btn-main" />
                </p>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'CommentForm',
    data() {
        return {
            user_id: localStorage.getItem('user_id') ? localStorage.getItem('user_id') : null,
            name: localStorage.getItem('name') ? localStorage.getItem('name') : null,
            text: '',
            id: this.$route.params.id
        }
    },
    methods: {
        async createComment(e) {
            e.preventDefault();
            
            try {
                await axios.put('http://localhost:5000/api/v1/comments', {
                    id: this.id,
                    user: this.user_id,
                    text: this.text
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                this.$emit('getBlog');
                this.text = '';
            } catch (error) {
                let message = 'Please fill in all fields!';

                Swal.fire({
                    icon: 'warning',
                    text: message,
                    confirmButtonColor: 'red'
                });
            }
        }
    },
}
</script>