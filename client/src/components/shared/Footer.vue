<template>
    <footer class="text-light" v-if="!role || (role && role !== 'admin')">
        <div class="container">
            <div class="row g-custom-x">
                <div class="col-lg-4">
                    <div class="widget">
                        <h5>About RentRover</h5>
                        <p>
                            At RentRover, we believe that every journey should be exceptional. Our fleet of meticulously maintained luxury vehicles is handpicked to offer you the finest selection. Whether you're embarking on a business trip or a leisurely escape, our diverse range of vehicles ensures you'll find the perfect match for your preferences and needs.
                        </p>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="widget">
                        <h5>Contact Info</h5>
                        <address class="s1">
                            <span><i class="id-color fa fa-map-marker fa-lg"></i>Novaka Djokovica 5, Belgrade</span>
                            <span><i class="id-color fa fa-phone fa-lg"></i>+381 62 8 254 103</span>
                            <span><i class="id-color fa fa-envelope-o fa-lg"></i>gileer404@gmail.com</span>
                        </address>
                    </div>
                </div>

                <div class="col-lg-3">
                    <h5>Quick Links</h5>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="widget">
                                <ul>
                                    <li><a :href="$router.resolve({name: 'home'}).href">Home</a></li>
                                    <li><a :href="$router.resolve({name: 'about'}).href">About</a></li>
                                    <li><a :href="$router.resolve({name: 'cars'}).href">Cars</a></li>
                                    <li><a :href="$router.resolve({name: 'blog'}).href">Blog</a></li>
                                    <li><a :href="$router.resolve({name: 'contact'}).href">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="subfooter">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="de-flex">
                            <div class="de-flex-col">
                                    Copyright 2023 - Nikola Živković
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
     data() {
        return {
            role: localStorage.getItem('role') ? localStorage.getItem('role') : null
        }
    },
}
</script>