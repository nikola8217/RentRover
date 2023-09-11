<template>
    <div class="row mb-5">
        <div class="col-lg-12">
            <div class="card p-4  rounded-5">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="de_tab tab_simple">
                            <h4>User informations</h4>
                            <p><b>Name:</b> {{ name }}</p>
                            <p><b>Email:</b> {{ email }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserInformation',
    data() {
        return {
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email')
        }
    }
}
</script>