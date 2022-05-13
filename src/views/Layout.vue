<template>
    <div class="layout-page ">

        <!-- header start -->
        <section class="bg-white header position-sticky top-0 start-0 w-100">
            <!-- nav bar start -->
            <nav class="max-width">
            <div class="mx-auto">
                <div class="row align-items-center justify-content-between py-3">
                <div class="col-3">
                    <div class="me-3 ms-2 ms-sm-0">
                        <router-link to="/">
                            <img class="logo ms-0 ms-sm-0 " src="../assets/images/logo.png" alt="">
                        </router-link>
                    </div>
                </div>
                <div class="col-9 ms-auto d-none d-lg-block">
                        <div class="d-flex justify-content-between align-items-center">
                            <ul class="mb-0 d-flex ms-auto pe-4 pe-xl-5 ps-3 justify-content-between">
                            <li class="">
                                <router-link to="/about-luso">
                                    <a class="anchor font-size-16 robo" href="#">About Luso</a>
                                </router-link>
                            </li>
                            <li class="mx-4 mx-xl-5">
                                <router-link to="/">
                                    <a class="anchor font-size-16 robo" href="#">Store</a>
                                </router-link>
                            </li>
                            <li class="">
                                <a class="anchor font-size-16 robo" href="#">Corporate</a>
                            </li>
                            </ul>
                            <ul class="mb-0 ps-0 d-flex align-items-center">
                            <li class="">
                                <router-link to="/create-account">
                                    <a class="nav-border font-size-16" href="#">Create Account</a>
                                </router-link>
                            </li>
                            <li class="mx-4">
                                <div v-if="currentRouteName=='profile'">
                                    <router-link to="/sign-in">
                                        <a class="nav-border font-size-16" href="#">Login</a>
                                    </router-link>
                                </div>
                                <div v-if="currentRouteName=='portfolio'">
                                    <router-link to="/sign-in">
                                        <a class="nav-border font-size-16" href="#">Login</a>
                                    </router-link>
                                </div>
                                <div v-if="currentRouteName!=='profile' && currentRouteName!=='portfolio'">
                                    <router-link to="/sign-in">
                                        <a class="nav-border font-size-16" href="#">Sign In</a>
                                    </router-link>
                                </div>
                            </li>
                            <li class="position-relative">
                                <button class="px-0" type="button" id="drop_btn">
                                    <img @click="toggleHeaderDropdown" class="nav-right-log cursor mb-md-1" src="../assets/images/nav-right-log.png" alt="">
                                </button>
                                <div v-if="isHeaderDropdownOpen" id="drop_menu" class="bg-white header-drop rounded-3 px-4 py-3 border text-start position-absolute top-100 end-0 z-50">
                                    <ul class="ps-0">
                                    <li class="pb-2">
                                        <router-link to="/about-luso">
                                            <a class="anchor" href="#">About luso</a>
                                        </router-link>
                                    </li>
                                    <li class="pb-2">
                                        <router-link to="/">
                                            <a class="anchor" href="#">Store</a>
                                        </router-link>
                                    </li>
                                    <li class="pb-2">
                                        <router-link to="#">
                                            <a class="anchor" href="#">Corporate</a>
                                        </router-link>
                                    </li>
                                    <li class="pb-2">
                                        <router-link to="/investment">
                                            <a class="anchor" href="#">Investment</a>
                                        </router-link>
                                    </li>
                                    <li class="pb-2">
                                        <router-link to="/profile">
                                            <a class="anchor" href="#">Profile</a>
                                        </router-link>
                                    </li>
                                    <li class="pb-3">
                                        <router-link to="/portfolio">
                                            <a class="anchor" href="#">Portfolio</a>
                                        </router-link>
                                    </li>
                                    <li class="pb-4">
                                        <router-link to="/create-account">
                                            <a class="nav-border font-size-16" href="#">Create Account</a>
                                        </router-link>
                                    </li>
                                    <li class="pb-2">
                                        <router-link to="/sign-in">
                                            <a class="nav-border font-size-16" href="#">Sign In</a>
                                        </router-link>
                                    </li>
                                    </ul>
                                </div>
                            </li>
                            </ul>
                        </div>
                </div>
                <div class="col-2 ms-auto d-flex justify-content-end d-lg-none">
                    <button @click="toggleMobileHeaderDropdown" class="px-0" type="button" id="main_btn">
                        <img class="nav-right-log mb-1"  src="../assets/images/nav-right-log.png" alt="">
                    </button>
                </div>
                </div>
            </div>
            <div v-if="isMobileDropdownOpen"  id="main_menu" class="align-items-center bg-white rounded px-4">
                <ul class="py-5 ps-0">
                <li class="py-2 text-center">
                    <router-link to="/about-luso">
                    <a class="anchor position-relative" href="#">About Luso</a>
                    </router-link>
                </li>
                <li class="py-2 text-center">
                    <router-link to="/">
                    <a class="anchor position-relative" href="#">Store</a>
                    </router-link>
                </li>
                <li class="py-2 text-center">
                    <router-link to="#">
                    <a class="anchor position-relative" href="#">Corporate</a>
                    </router-link>
                </li>
                <li class="py-2 text-center">
                    <router-link to="/investment">
                    <a class="anchor position-relative" href="#">Investment</a>
                    </router-link>
                </li>
                <li class="py-2 text-center">
                    <router-link to="/profile">
                    <a class="anchor position-relative" href="#">Profile</a>
                    </router-link>
                </li>
                <li class="py-2 text-center">
                    <router-link to="/portfolio">
                    <a class="anchor position-relative" href="#">Portfolio</a>
                    </router-link>
                </li>
                <li class="text-center py-3">
                    <router-link to="/create-account">
                    <a class="nav-border font-size-16" href="#">Create Account</a>
                    </router-link>
                </li>
                <li class="mx-4 text-center py-3">
                    <router-link to="/sign-in">
                    <a class="nav-border font-size-16" href="#">Sign In</a>
                    </router-link>
                </li>
                </ul>
            </div>
            </nav>
            <!-- nav bar end -->
        </section>
        <!-- header end -->

        <div>
            <router-view></router-view>
        </div>

        <!-- footer start -->
        <section class="bg-1 footer-space">
            <div class="max-width">
                <div class="row align-items-center">
                <div class="col-10 mx-auto">
                    <div class="d-flex flex-wrap justify-content-between align-items-end">
                        <div class="col-12 col-lg-3 d-flex justify-content-center justify-content-md-start">
                            <a href="store.html"><img class="footer-logo" src="../assets/images/footerLogo.png" alt=""></a>
                        </div>
                        <div class="col-lg-9 col-12  d-flex justify-content-center justify-content-md-start justify-content-lg-center mt-md-4 pt-4 py-md-0">
                        <div class="ps-lg-4 text-white font-size-16 d-flex flex-wrap">
                            <a class="robo px-3 px-md-0 pe-md-4 mx-auto ancor-hover" href="javascript:;">Privacy Policy</a>
                            <a class="robo px-3 px-md-0 pe-md-4 mx-auto ancor-hover" href="javascript:;">Terms & Conditions</a>
                            <a class="robo px-3 px-md-0 pe-md-4 mx-auto ancor-hover" href="javascript:;">Cookies Policy</a>
                        </div>
                    </div>
                    </div>
                    <p class="robo copy-right font-size-10 d-block text-white text-center text-md-start mt-4 mb-4 mb-md-0">
                    ©2020 LUSO DIGITAL ASSETS.<br>
                    ALL RIGHTS RESERVED
                    </p>
                </div>
                <div class="col-md-2 col-12">
                    <button @click="scrollToTop" class="d-flex mx-auto">
                        <img class="footer-icon" src="../assets/images/footerIcon.png" alt="">
                    </button>
                </div>
                </div>
            </div>
        </section>
        <!-- footer end -->


    </div>
</template>

<script>

export default {
  name: 'Layout',
  
  data(){
    return{
        currentYear: new Date().getFullYear(),
        activeMenu:'home',
        isHeaderDropdownOpen: false,
        isMobileDropdownOpen: false,
    }
  },

  methods:{
    activateMenu(menu){
        this.activeMenu = menu;
        if(this.activeMenu === 'home'){
            this.$router.push({ name: 'home'});
        }
        if(this.activeMenu === 'create-account'){
            this.$router.push({ name: 'create-account'});
        }
        if(this.activeMenu === 'sign-in'){
            this.$router.push({ name: 'sign-in'});
        }
        return this.activeMenu;
    },
    toggleHeaderDropdown(){
        if(this.isHeaderDropdownOpen){
            this.isHeaderDropdownOpen=false;
        } else {
            this.isHeaderDropdownOpen=true;
        }
    },
    toggleMobileHeaderDropdown(){
        if(this.isMobileDropdownOpen){
            this.isMobileDropdownOpen=false;
        } else {
            this.isMobileDropdownOpen=true;
        }
    },
    scrollToTop(){
        window.scrollTo(0, 0);
    }
  },

    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    },

    mounted(){
        
    }
}
</script>
<style>
.header{
     z-index: 999;
}
</style>

   