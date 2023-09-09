<template>
    <section id="section-cars">
        <div class="container mt-5">

            <h3 class="mb-3" style="text-align: center">Our vehicles</h3>
            <CarFilters @filters-updated="getCars" />


            <div class="row">
                <CarList :cars="cars" />
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import CarFilters from '../components/car/CarFilters.vue';
import CarList from '../components/car/CarList.vue';

export default {
    components: {
        CarList,
        CarFilters
    },
    mounted() {
        this.getCars();
    },
    data() {
        return {
            cars: [],
        }
    },
    methods: {
        async getCars(filterParams) {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/cars', { params: filterParams })
                this.cars = response.data.cars.map(car => ({
                    ...car,
                    image: `assets/images/cars/${car.image}`,
                }));
            } catch (error) {
                console.log(error);
            }
        },
    },
}
</script>