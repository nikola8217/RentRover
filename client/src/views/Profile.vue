<template>
    <section id="section-settings" class="bg-gray-100">
        <div class="container">
            <UserInformation />
            <UserRent />
            <ChangePasswordForm />
        </div>
    </section>
</template>

<script>
import UserInformation from '../components/profile/UserInformation.vue';
import ChangePasswordForm from '../components/profile/ChangePasswordForm.vue';
import UserRent from '../components/profile/UserRent.vue';

export default {
    components: {
        UserInformation,
        ChangePasswordForm,
        UserRent
    }    
}
</script>