<template>
    <div>

        <!-- banner start -->
        <section class="banner section-space">
            <div class="max-width">
            <div class="text-center">
                <div class="person">
                <img class="img-fluid" src="../assets/images/banner-img.png" alt="">
                </div>
                <p class="text-white font-size-32 pt-5">John Doe</p>
                <p class="font-size-22 text-white pt-3">email@email.com</p>
            </div>
            </div>
        </section>
        <!-- banner end -->

        <!-- my profile start -->
        <section class="section-space">
            <div class="max-width">
                <div class="w-100 d-flex align-items-center mb-2 justify-content-between">
                <h2 class="txt-2 font-size-32">My Profile</h2>
                    <button class="txt-2 font-size-18 profile-btn" href="">Edit Profile</button>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="input-div txt-3">
                            <span>Name</span>
                            <span class="ms-sm-5 ms-4">John Doe</span>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                    <div class="input-div txt-3">
                        <span>UserName</span>
                        <span class="ms-sm-5 ms-4">JohnDoe</span>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="input-div txt-3">
                    <span>Email</span>
                    <span class="ms-sm-5 ms-4">email@email.com</span>
                </div>
                </div>
                    <div class="col-12 col-md-6 position-relative">
                    <div class="input-div txt-3">
                        <span>Password</span>
                        <span class="ms-sm-5 ms-4">*********</span>
                    </div>
                        <img class="btn-icon cursor" src="../assets/images/btn-icon.png" alt="">
                    </div>
                    <div class="col-12 col-md-6">
                    <div class="input-div txt-3">
                        <span>Pais</span>
                        <span class="ms-sm-5 ms-4">Portugal</span>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <!-- my profile end -->

        <!-- portfolio start -->
        <section class="section-space-b">
            <div class="max-width">
                <div class="w-100 mb-4">
                <h2 class="txt-2 font-size-32 text-center text-md-start">My Portfolio</h2>
                </div>
                <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="bg-white porfolio-card text-center mt-4">
                    <div class="d-flex justify-content-center ">
                        <img class="bitcoin" src="../assets/images/bitcoin-1.png" alt="">
                    </div>
                    <p class="font-size-25 txt-2 mt-4 mb-4 text-uppercase">Bitcoin</p>
                    <p class="font-size-28 txt-2 fw-bold">00000.00 BTC </p>
                    <p class="font-size-22 txt-4">00000.00 € </p>
                    <p class="font-size-22 txt-4 mt-3">+ 0,14%</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="bg-white porfolio-card text-center mt-4">
                    <div class="d-flex justify-content-center ">
                        <img class="bitcoin" src="../assets/images/bitcoin-2.png" alt="">
                    </div>
                    <p class="font-size-25 txt-2 mt-4 mb-4 text-uppercase">litecoin</p>
                    <p class="font-size-28 txt-2 fw-bold">00000.00 LTC </p>
                    <p class="font-size-22 txt-4">00000.00 € </p>
                    <p class="font-size-22 txt-4 mt-3">+ 0,31%</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="bg-white porfolio-card text-center mt-4">
                    <div class="d-flex justify-content-center ">
                        <img class="bitcoin" src="../assets/images/bitcoin-3.png" alt="">
                    </div>
                    <p class="font-size-25 txt-2 mt-4 mb-4 text-uppercase">ethereum</p>
                    <p class="font-size-28 txt-2 fw-bold">00000.00 ETH</p>
                    <p class="font-size-22 txt-4">00000.00 € </p>
                    <p class="font-size-22 txt-4 mt-3">+ 0,27%</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="bg-white porfolio-card text-center mt-4">
                    <div class="d-flex justify-content-center ">
                        <img class="bitcoin" src="../assets/images/bitcoin-4.png" alt="">
                    </div>
                    <p class="font-size-25 txt-2 mt-4 mb-4 text-uppercase">Bitcoin</p>
                    <p class="font-size-28 txt-2 fw-bold">00000.00 BTC </p>
                    <p class="font-size-22 txt-4">00000.00 € </p>
                    <p class="font-size-22 txt-4 mt-3">+ 0,14%</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <!-- portfolio end -->
    </div>
</template>

<script>
import form from 'vuejs-form';

let update_account = {
    email:'',
    userName:'',
    country:'',
    password:'',
};
export default {
    name: 'Profile',
    components: {  },
    data(){
        return{
            visiblePassword: false,
            isModalOpen: false,
            form: form.default(update_account).rules({
                    email: 'required',
                    userName:'required',
                    country:'required',
                    password:'required',
                }).messages({
                    'email.required': 'This field is required.',
                    'userName.required': 'This field is required.',
                    'country.required': 'Product data is required.',
                    'password.required': 'This field is required.',
                }),
        }
    },
    methods:{
        toggleVisiblePassword(){
            if(this.visiblePassword){
                this.visiblePassword = false;
            } else {
                this.visiblePassword = true;
            }
        },
        openModal(){
            this.isModalOpen = true;
        },
        closeModal(){
            this.isModalOpen = false;
        },
        updateProfile(){
            console.log(this.form.all());
        }
    },
    mounted(){
        this.form.email='abcd@gmail.com';
        this.form.userName='abcd';
        this.form.country='1';
        this.form.password='12345678';
    }
}
</script>
<style scoped>
.modal {
  background: #DDDBDB30;
}
.modal-dialog {
  max-width: 600px;
}
.update-btn {
  background-color: #293386;
  border: none;
  border-radius: 5px;
  padding: 7px 30px;
  color: white;
}
</style>