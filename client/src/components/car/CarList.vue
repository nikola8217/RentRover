<template>
    <div class="col-lg-12">
        <div class="row">

            <h3 class="mb-5" style="text-align: center">Our vehicles</h3>

            <div class="col-xl-4 col-lg-6" v-for="(car, index) in this.cars" :key="index">
                <div class="de-item mb30">
                    <div class="d-img" style="width: 100%; height: 200px; overflow: hidden ">
                        <img :src="car.image" class="img-fluid" alt="" style="width: 100%; height: 200px; object-fit: cover">
                    </div>
                    <div class="d-info">
                        <div class="d-text">
                            <h4>{{ car.brand.name }} {{ car.name }}</h4>
                            
                            <div class="d-atr-group">
                                <span class="d-atr"><img src="assets/images/icons/1.svg" alt="">{{ car.seats }}</span>
                                <span class="d-atr"><img src="assets/images/icons/3.svg" alt="">{{ car.doors }}</span>
                                <span class="d-atr"><img src="assets/images/icons/4.svg" alt="">{{ car.category.name }}</span>
                            </div>
                            <div class="d-price">
                                Daily rate from <span>{{ car.pricePerDay }}e</span>
                                <a class="btn-main" :href="$router.resolve({name: `carDetails`, params: { id: car._id } }).href">Rent Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarList',
    props: ['cars']
}
</script>