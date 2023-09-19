<template>
    <section aria-label="section">
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <h3>{{ car_id ? 'Edit Car' : 'Create Car' }}</h3>
                    
                    
                    <div class="spacer-10"></div>
                    
                    <form class="form-border" @submit="handleSubmit">

                        <div class="row">
                            <div class="col-md-6">
                                <div class="field-set">
                                    <label for="categorySelect">Brand:</label>
                                    <select id="categorySelect" class="form-select" v-model="brand_id">
                                        <option v-for="brand in brands" :value="brand._id" :key="brand._id" :selected="brand._id === brand_id">
                                            {{ brand.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="field-set">
                                    <label>Name:</label>
                                    <input type='text' name='name' v-model="name" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="field-set">
                                    <label for="categorySelect">Category:</label>
                                    <select id="categorySelect" class="form-select" v-model="category_id">
                                        <option v-for="category in categories" :value="category._id" :key="category._id" :selected="category._id === category_id">
                                            {{ category.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="field-set">
                                    <label for="categorySelect">Seats:</label>
                                    <select id="categorySelect" class="form-select" v-model="seats">
                                        <option value="2">2</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="field-set">
                                    <label for="categorySelect">Doors:</label>
                                    <select id="categorySelect" class="form-select" v-model="doors">
                                        <option value="3">3</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="field-set">
                                    <label>Engine:</label>
                                    <input type='text' name='engine' v-model="engine" class="form-control" v-on:input="restrictToNumbers">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="field-set">
                                    <label>Mileage:</label>
                                    <input type='text' name='mileage' v-model="mileage" class="form-control" v-on:input="restrictToNumbers">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="field-set">
                                    <label>Year:</label>
                                    <input type='text' name='year' v-model="year" class="form-control" v-on:input="restrictToNumbers">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="field-set">
                                    <label for="categorySelect">Transmission:</label>
                                    <select class="form-select" v-model="transmission">
                                        <option value="automatic">Automatic</option>
                                        <option value="manual">Manual</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="field-set">
                                    <label for="categorySelect">Fuel:</label>
                                    <select class="form-select" v-model="fuel">
                                        <option value="gasoline">Gasoline</option>
                                        <option value="diesel">Diesel</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="field-set">
                                    <label>Exterier color:</label>
                                    <input type='text' name='exterierColor' v-model="exterierColor" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="field-set">
                                    <label>Interior color:</label>
                                    <input type='text' name='interiorColor' v-model="interiorColor" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="field-set">
                                    <label>Price per day:</label>
                                    <input type='text' name='pricePerDay' v-model="pricePerDay" class="form-control" v-on:input="restrictToNumbers">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="field-set">
                                    <label>Image:</label>
                                    <input type='text' name='image' v-model="image" class="form-control">
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="field-set">
                                    <label for="description">Description:</label>
                                    <textarea v-model="desc" name="description" class="form-control" rows="5"></textarea>
                                </div>
                            </div>

                            <div class="col-md-12 mt-5">

                                <div class="pull-left">
                                    <button type='submit' class="btn-main color-2">Save</button>
                                </div>

                            </div>

                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'CarForm',
    mounted() {
        if (this.car_id) this.getCar();
        this.getBrands();
        this.getCategories();
    },
    data() {
        return {
            car_id: this.$route.params.id ? this.$route.params.id : '',
            name: '',
            desc: '',
            brand_id: '',
            category_id: '',
            seats: '',
            doors: '',
            engine: '',
            year: '',
            mileage: '',
            transmission: '',
            fuel: '',
            exterierColor: '',
            interiorColor: '',
            pricePerDay: '',
            image: '',
            brands: [],
            categories: []
        }
    },
    methods: {
        restrictToNumbers() {
            this.engine = this.engine.replace(/\D/g, '');
            this.mileage = this.mileage.replace(/\D/g, '');
            this.year = this.year.replace(/\D/g, '');
            this.pricePerDay = this.pricePerDay.replace(/\D/g, '');
        },

        async createCar() {
            try {
                await axios.post('https://rentrover.onrender.com/api/v1/cars', {
                    name: this.name,
                    desc: this.desc,
                    brand: this.brand_id,
                    category: this.category_id,
                    seats: this.seats,
                    doors: this.doors,
                    engine: this.engine,
                    year: this.year,
                    mileage: this.mileage,
                    transmission: this.transmission,
                    fuel: this.fuel,
                    exteriorColor: this.exterierColor,
                    interiorColor: this.interiorColor,
                    pricePerDay: this.pricePerDay,
                    image: this.image
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                const confirmationResult = await Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You have successfully created car!',
                    showConfirmButton: true,
                    confirmButtonColor: 'green'
                });

                if (confirmationResult.isConfirmed) {
                    window.location.href = '/carsAdmin';
                }
            } catch (error) {
                let message = 'Please fill in all fields!';

                if (error.response.data.msg.startsWith('Duplicate')) {
                    message = 'Car already exists!';
                }

                Swal.fire({
                    icon: 'warning',
                    text: message,
                    confirmButtonColor: 'red'
                });
            }
        },

        async getCar() {
            try {
                const response = await axios.get(`https://rentrover.onrender.com/api/v1/cars/${this.car_id}`);

                this.name = response.data.car.name;
                this.desc = response.data.car.desc;
                this.brand_id = response.data.car.brand._id;
                this.category_id = response.data.car.category._id;
                this.seats = response.data.car.seats;
                this.doors = response.data.car.doors;
                this.engine = response.data.car.engine;
                this.year = response.data.car.year;
                this.mileage = response.data.car.mileage;
                this.transmission = response.data.car.transmission;
                this.fuel = response.data.car.fuel;
                this.exterierColor = response.data.car.exteriorColor;
                this.interiorColor = response.data.car.interiorColor;
                this.pricePerDay = response.data.car.pricePerDay;
                this.image = response.data.car.image;
            } catch (error) {
                console.log(error);
            }
        },

        async editCar() {
            try {
                await axios.put(`https://rentrover.onrender.com/api/v1/cars/${this.car_id}`, {
                    name: this.name,
                    desc: this.desc,
                    brand: this.brand_id,
                    category: this.category_id,
                    seats: this.seats,
                    doors: this.doors,
                    engine: this.engine,
                    year: this.year,
                    mileage: this.mileage,
                    transmission: this.transmission,
                    fuel: this.fuel,
                    exteriorColor: this.exterierColor,
                    interiorColor: this.interiorColor,
                    pricePerDay: this.pricePerDay,
                    image: this.image
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                const confirmationResult = await Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You have successfully updated car!',
                    showConfirmButton: true,
                    confirmButtonColor: 'green'
                });

                if (confirmationResult.isConfirmed) {
                    window.location.href = '/carsAdmin';
                }
            } catch (error) {
                let message = 'Please fill in all fields!';

                if (error.response.data.msg.startsWith('Duplicate')) {
                    message = 'Car already exists!';
                }

                Swal.fire({
                    icon: 'warning',
                    text: message,
                    confirmButtonColor: 'red'
                });
            }
        },

        handleSubmit(e) {
            e.preventDefault();

            if (this.car_id) this.editCar();
            else this.createCar();
        },

        async getBrands() {
            try {
                const response = await axios.get('https://rentrover.onrender.com/api/v1/brands');

                this.brands = response.data.brands;
            } catch (error) {
                console.log(error);
            }
        },

        async getCategories() {
            try {
                const response = await axios.get('https://rentrover.onrender.com/api/v1/categories');

                this.categories = response.data.categories;
            } catch (error) {
                console.log(error);
            }
        },
    },
}
</script>