<template>
    <header class="transparent header-light scroll-light has-topbar">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="de-flex sm-pt10">
                            <div class="de-flex-col">
                                <div class="de-flex-col">
                                    <!-- logo begin -->
                                    <div id="logo">
                                        <h3 class="mt-3">RentRover</h3>
                                    </div>
                                    <!-- logo close -->
                                </div>
                            </div>
                            <div class="de-flex-col header-col-mid">
                                <ul id="mainmenu">
                                    <li><a class="menu-item" :href="$router.resolve({name: 'home'}).href">Home</a></li>
                                    <li><a class="menu-item" :href="$router.resolve({name: 'about'}).href">About</a></li>
                                    <li><a class="menu-item" :href="$router.resolve({name: 'cars'}).href">Cars</a></li>
                                    <li><a class="menu-item" :href="$router.resolve({name: 'blog'}).href">Blog</a></li>
                                    <li><a class="menu-item" :href="$router.resolve({name: 'contact'}).href">Contact</a></li>
                                    <li><a class="menu-item" :href="$router.resolve({name: 'login'}).href">Login</a></li>
                                    <li><a class="menu-item" :href="$router.resolve({name: 'register'}).href">Register</a></li>
                                </ul>
                            </div>
                            <div class="de-flex-col">
                                <div class="menu_side_area">
                                    <span id="menu-btn"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>

