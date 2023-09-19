<template>
    <section id="section-car-details">
        <div class="container mt-5">
            <div class="row g-5">
                <div class="col-lg-6">
                    <div class="item mb-5">
                        <img :src="car.image" alt="" style="width: 100%" height="300">
                    </div>
                    <h3> {{ car.brand }} {{ car.name }}</h3>
                    <p>{{ car.desc }}</p>
                </div>

                <div class="col-lg-3">
                    

                    <div class="spacer-10"></div>

                    <h4>Specifications</h4>
                    <div class="de-spec">
                        <div class="d-row">
                            <span class="d-title">Category</span>
                            <spam class="d-value">{{ car.category }}</spam>
                        </div>
                        <div class="d-row">
                            <span class="d-title">Seat</span>
                            <spam class="d-value">{{ car.seats }} seats</spam>
                        </div>
                        <div class="d-row">
                            <span class="d-title">Door</span>
                            <spam class="d-value">{{ car.doors }} doors</spam>
                        </div>
                        <div class="d-row">
                            <span class="d-title">Luggage</span>
                            <spam class="d-value">150</spam>
                        </div>
                        <div class="d-row">
                            <span class="d-title">Fuel Type</span>
                            <spam class="d-value">{{ car.fuel }}</spam>
                        </div>
                        <div class="d-row">
                            <span class="d-title">Engine</span>
                            <spam class="d-value">{{ car.engine }}</spam>
                        </div>
                        <div class="d-row">
                            <span class="d-title">Year</span>
                            <spam class="d-value">{{ car.year }}</spam>
                        </div>
                        <div class="d-row">
                            <span class="d-title">Mileage</span>
                            <spam class="d-value">{{ car.mileage }}</spam>
                        </div>
                        <div class="d-row">
                            <span class="d-title">Transmission</span>
                            <spam class="d-value">{{ car.transmission }}</spam>
                        </div>
                        <div class="d-row">
                            <span class="d-title">Exterior Color</span>
                            <spam class="d-value">{{ car.exteriorColor }}</spam>
                        </div>
                        <div class="d-row">
                            <span class="d-title">Interior Color</span>
                            <spam class="d-value">{{ car.interiorColor }}</spam>
                        </div>
                    </div>

                    <div class="spacer-single"></div>

                    <h4>Features</h4>
                    <ul class="ul-style-2">
                        <li>Bluetooth</li>
                        <li>Multimedia Player</li>
                        <li>Central Lock</li>
                        <li>Sunroof</li>
                    </ul>
                </div>

                <div class="col-lg-3">
                    <div class="de-price text-center">
                        Daily rate
                        <h3>{{ car.pricePerDay }}e</h3>
                    </div>
                    <div class="spacer-30"></div>

                    <Form />

                    <div class="de-box">
                        <h4>Share</h4>
                        <div class="de-color-icons">
                            <span><i class="fa fa-twitter fa-lg"></i></span>
                            <span><i class="fa fa-facebook fa-lg"></i></span>
                            <span><i class="fa fa-reddit fa-lg"></i></span>
                            <span><i class="fa fa-linkedin fa-lg"></i></span>
                            <span><i class="fa fa-pinterest fa-lg"></i></span>
                            <span><i class="fa fa-stumbleupon fa-lg"></i></span>
                            <span><i class="fa fa-delicious fa-lg"></i></span>
                            <span><i class="fa fa-envelope fa-lg"></i></span>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Form from '../components/rent/Form.vue';

export default {
    components: {
        Form
    },
    mounted() {
        this.getCar();
    },
    data() {
        return {
            car: {},
            id: this.$route.params.id
        }
    },
    methods: {
        async getCar() {
            try {
                const response = await axios.get(`https://rentrover.onrender.com/api/v1/cars/${this.id}`)
                this.car = response.data.car;
                this.car.image = `/assets/images/cars/${this.car.image}`;
                this.car.brand = this.car.brand.name;
                this.car.category = this.car.category.name;
            } catch (error) {
                console.log(error);
            }
        }
    },    
}
</script>