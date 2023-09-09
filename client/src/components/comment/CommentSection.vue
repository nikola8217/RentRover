<template>
    <div id="blog-comment" class="col-md-9" >
        <div v-if="comments.length > 0"> 
            <h4>Comments ({{ comments.length }})</h4>

            <ol>
                <li v-for="(comment, index) in this.comments" :key="index">
                    <div class="comment-info">
                        <span class="c_name">{{ comment.user.name }}</span>
                        <span class="c_date ">{{ formatCreatedAt(comment.createdAt) }}</span>
                        <span class="c_reply" v-if="user_id && user_id === comment.user._id"><a @click="deleteComment(index)" style="cursor: pointer; color: blue">Delete</a></span>
                        <div class="clearfix"></div>
                    </div>

                    <div class="comment">{{ comment.text }}</div>
                </li>
            </ol>
        </div>

        <div v-else>
            <h5>No Comments for this post</h5>
        </div>
        

        <div class="spacer-single"></div>

        <CommentForm @getBlog="getBlog"/>
    </div>
    
</template>

<script>
import axios from 'axios';
import CommentForm from './CommentForm.vue';

export default {
    name: 'CommentSection',
    components: {
        CommentForm
    }, 
    props: ['comments'],
    data() {
        return {
            id: this.$route.params.id,
            user_id: localStorage.getItem('user_id') ? localStorage.getItem('user_id') : null,
        }
    },
    methods: {
        getBlog() {
            this.$emit('getBlog');
        },
        formatCreatedAt(createdAt) {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date(createdAt).toLocaleDateString('en-US', options);
        },
        async deleteComment(index) {
            await axios.put('http://localhost:5000/api/v1/comments/delete', {
                    id: this.id,
                    index
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

            this.$emit('getBlog');
        }
    }
}
</script>