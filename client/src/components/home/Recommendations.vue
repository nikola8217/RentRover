<template>
    <section id="section-cars" >
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 offset-lg-3 text-center">
                    <h2>Our Vehicle Fleet</h2>
                    <p>Driving your dreams to reality with an exquisite fleet of versatile vehicles for unforgettable journeys.</p>
                    <div class="spacer-20"></div>
                </div>

                <div class="row">

                    <div class="col-xl-3 col-lg-6" v-for="(car, index) in this.cars" :key="index">
                        <div class="de-item mb30">
                            <div class="d-img" style="width: 100%; height: 200px; overflow: hidden ">
                                <img :src="car.image" class="img-fluid" alt="" style="width: 100%; height: 200px; object-fit: cover">
                            </div>
                            <div class="d-info">
                                <div class="d-text">
                                    <h4>{{ car.brand }} {{  car.name }}</h4>
                                    <div class="d-atr-group">
                                        <span class="d-atr"><img src="assets/images/icons/1.svg" alt="">{{ car.seats }}</span>
                                        <span class="d-atr"><img src="assets/images/icons/3.svg" alt="">{{ car.doors }}</span>
                                        <span class="d-atr"><img src="assets/images/icons/4.svg" alt="">{{ car.category }}</span>
                                    </div>
                                    <div class="d-price">
                                        Daily rate from <span>{{ car.pricePerDay }} eur</span>
                                        <a class="btn-main" :href="$router.resolve({name: `carDetails`, params: { id: car._id } }).href">Rent Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    

                </div>

            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Recommendations',
    mounted() {
        this.getRandomCars();
    },
    data() {
        return {
            cars: []
        }
    },
    methods: {
        async getRandomCars() {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/cars/random');
                
                this.cars = response.data.map(car => ({
                    ...car,
                    image: `assets/images/cars/${car.image}`,
                }));
            } catch (error) {
                console.error('Error:', error);
            }
        }
    },
}
</script>