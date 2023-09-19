<template>
    <div class="row mb-5">
            <div class="col-md-3">
                <div class="field-set">
                    <select class="form-select" v-model="brand_id" @change="applyFilters">
                        <option value="">Select Brand</option>
                        <option v-for="brand in brands" :value="brand._id" :key="brand._id" :selected="brand._id === brand_id">
                            {{ brand.name }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="col-md-3">
                <div class="field-set">
                    <select class="form-select" v-model="category_id" @change="applyFilters">
                        <option value="">Select Category</option>
                        <option v-for="category in categories" :value="category._id" :key="category._id" :selected="category._id === category_id">
                            {{ category.name }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="col-md-3">
                <div class="field-set">
                    <select class="form-select" v-model="transmission" @change="applyFilters">
                        <option value="" selected>Select Transmission</option>
                        <option value="automatic">Automatic</option>
                        <option value="manual">Manual</option>
                    </select>
                </div>
            </div>

            <div class="col-md-3">
                <div class="field-set">
                    <select class="form-select" v-model="fuel" @change="applyFilters">
                        <option value="" selected>Select Fuel</option>
                        <option value="gasoline">Gasoline</option>
                        <option value="diesel">Diesel</option>
                    </select>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'CarFilters',
    mounted() {
        this.getCategories();
        this.getBrands();
    },
    data() {
        return {
            brand_id: '',
            category_id: '',
            transmission: '',
            fuel: '',
            brands: [],
            categories: []
        }
    },  
    methods: {
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

        applyFilters() {
            // alert(this.brand_id)
            this.$emit('filters-updated', {
                category: this.category_id,
                brand: this.brand_id,
                transmission: this.transmission,
                fuel: this.fuel,
            });
        }
    },  

}
</script>