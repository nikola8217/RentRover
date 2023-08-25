<template>
    <section id="section-cars">
        <div class="container mt-5">
            <div class="row">
                <CarList :cars="cars" />
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import CarList from '../components/car/CarList.vue';

export default {
    components: {
        CarList
    },
    mounted() {
        this.getCars();
    },
    data() {
        return {
            cars: []
        }
    },
    methods: {
        async getCars() {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/cars')
                this.cars = response.data.cars.map(car => ({
                    ...car,
                    image: `assets/images/cars/${car.image}`,
                }));
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>