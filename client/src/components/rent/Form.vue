<template>
    <div class="de-box mb25">
        <form @submit="rentCar">
            <h4>Booking this car</h4>

            <div class="spacer-20"></div>

            <div class="row">
                <div class="col-lg-12 mb20">
                    <h5>Name</h5>
                    <input type="text"  placeholder="Enter your name" class="form-control" v-model="name"> 

                    <div class="jls-address-preview jls-address-preview--hidden">
                        <div class="jls-address-preview__header">
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 mb20">
                    <h5>Pick Up Location</h5>
                    <input type="text"  placeholder="Enter your pickup location"  class="form-control" v-model="pick_up_location">

                    <div class="jls-address-preview jls-address-preview--hidden">
                        <div class="jls-address-preview__header">
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 mb20">
                    <h5>Drop Off Location</h5>
                    <input type="text" placeholder="Enter your dropoff location" class="form-control" v-model="drop_off_location">

                    <div class="jls-address-preview jls-address-preview--hidden">
                        <div class="jls-address-preview__header">
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 mb20">
                    <h5>Pick Up Date & Time</h5>
                    <div class="date-time-field">
                        <input type="text" id="date-picker"  ref="startDatePicker" >
                        <select id="pickup-time" v-model="pick_up_time">
                            <!-- <option selected disabled >Time</option> -->
                            <option value="00:00">00:00</option>
                            <option value="00:30">00:30</option>
                            <option value="01:00">01:00</option>
                            <option value="01:30">01:30</option>
                            <option value="02:00">02:00</option>
                            <option value="02:30">02:30</option>
                            <option value="03:00">03:00</option>
                            <option value="03:30">03:30</option>
                            <option value="04:00">04:00</option>
                            <option value="04:30">04:30</option>
                            <option value="05:00">05:00</option>
                            <option value="05:30">05:30</option>
                            <option value="06:00">06:00</option>
                            <option value="06:30">06:30</option>
                            <option value="07:00">07:00</option>
                            <option value="07:30">07:30</option>
                            <option value="08:00">08:00</option>
                            <option value="08:30">08:30</option>
                            <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21:00">21:00</option>
                            <option value="21:30">21:30</option>
                            <option value="22:00">22:00</option>
                            <option value="22:30">22:30</option>
                            <option value="23:00">23:00</option>
                            <option value="23:30">23:30</option>
                        </select>
                    </div>
                </div>

                <div class="col-lg-12 mb20">
                    <h5>Return Date & Time</h5>
                    <div class="date-time-field">
                        <input type="text" id="date-picker-2" ref="endDatePicker">
                        <select id="collection-time" v-model="drop_of_time">
                            <!-- <option selected disabled value="Select time">Time</option> -->
                            <option value="00:00">00:00</option>
                            <option value="00:30">00:30</option>
                            <option value="01:00">01:00</option>
                            <option value="01:30">01:30</option>
                            <option value="02:00">02:00</option>
                            <option value="02:30">02:30</option>
                            <option value="03:00">03:00</option>
                            <option value="03:30">03:30</option>
                            <option value="04:00">04:00</option>
                            <option value="04:30">04:30</option>
                            <option value="05:00">05:00</option>
                            <option value="05:30">05:30</option>
                            <option value="06:00">06:00</option>
                            <option value="06:30">06:30</option>
                            <option value="07:00">07:00</option>
                            <option value="07:30">07:30</option>
                            <option value="08:00">08:00</option>
                            <option value="08:30">08:30</option>
                            <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21:00">21:00</option>
                            <option value="21:30">21:30</option>
                            <option value="22:00">22:00</option>
                            <option value="22:30">22:30</option>
                            <option value="23:00">23:00</option>
                            <option value="23:30">23:30</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- <input type='submit' id='send_message' value='Book Now' class="btn-main btn-fullwidth"> -->
            <button type="submit" class="btn-main btn-fullwidth">Book now</button>

            <div class="clearfix"></div>
            
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'Form',
    data() {
        return {
            user_id: localStorage.getItem('user_id') ? localStorage.getItem('user_id') : null,
            name: localStorage.getItem('name') ? localStorage.getItem('name') : null,
            pick_up_location: '',
            drop_off_location: '',
            start_date: '',
            end_date: '',
            pick_up_time: '00:00',
            drop_of_time: '00:00',
            car: this.$route.params.id
        }
    },

    methods: {
        async rentCar(e) {
            e.preventDefault();

            const startDatePicker = this.$refs.startDatePicker;
            const endDatePicker = this.$refs.endDatePicker;

            const startDateValue = startDatePicker.value;
            const endDateValue = endDatePicker.value;

            this.start_date = startDateValue;
            this.end_date = endDateValue;
            
            try {
                await axios.post('http://localhost:5000/api/v1/rent', {
                    user: this.user_id,
                    name: this.name,
                    pickUpLocation: this.pick_up_location,
                    dropOffLocation: this.drop_off_location,
                    startDate: this.start_date,
                    endDate: this.end_date,
                    pickUpTime: this.pick_up_time,
                    dropOffTime: this.drop_of_time,
                    car: this.car
                });

                const confirmationResult = await Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You have successfully rented car!',
                    showConfirmButton: true,
                    confirmButtonColor: 'green'
                });

                if (confirmationResult.isConfirmed) {
                    window.location.href = '/cars';
                }
            } catch (error) {
                let message = 'Please fill in all fields!';

                if (error.response.data.msg.startsWith('Start date must be today')) {
                    message = 'Start date must be today or a future date!';
                }

                if (error.response.data.msg.startsWith('End date must be today')) {
                    message = 'End date must be today or a future date!';
                }

                if (error.response.data.msg.startsWith('Start date must be before')) {
                    message = 'Start date must be before end date!';
                }

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