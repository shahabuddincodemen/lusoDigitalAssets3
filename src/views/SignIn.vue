<template>
    <div>
        <!-- my profile start -->
        <section class="section-space">
            <div class="max-width">
                <div class="row">
                    <div class="col-12 col-md-6 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
                        <img class="sing-banner-img" src="../assets/images/img3.png" alt="" srcset="">
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="w-100 text-center text-md-start mb-4 ">
                            <h2 class="txt-2 font-size-32">Sign In</h2>
                        </div>
                        <div>
                            <div class="row">
                            <div class="col-12 col-md-6">
                                <input class="input-div txt-3 d-block w-100 robo" type="text" placeholder="UserName/Email" value="">
                            </div>
                            <div class="col-12 col-md-6">
                                <input class="input-div txt-3 d-block w-100 robo" type="text" placeholder="Email" value="">
                            </div>

                                <div class="col-12 ">
                                    <div class="d-flex justify-content-center  p-21 text-center robo">
                                        <p class="txt-3">New to Luso Digital Assets? <br><a href="javascript:;" class="txt-3 text-decoration-underline">Create account</a> Instead.</p>
                                    </div>
                                </div>

                                <div class="col-12">
                                    
                                        <button class="w-100  input-div txt-3 robo">Sign In</button>
                                </div>
                                <div class="col-12">
                                    <div class="d-flex px-3 p-21 justify-content-between text-decoration-underline">
                                        <a class="txt-3 robo" href="javascript:;">Forgot Password?</a>
                                        <a class="txt-3 robo" href="javascript:;">Forgot Username?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- my profile end -->

        <!-- mission start -->
        <section class="mission-section-space mission-space-t bg-white">
            <div class="max-width">
                <h2 class="text-center font-size-28 txt-2 mb-5 letter-space-3">OUR MISSION</h2>
                <div class="row">
                <div class="col-12 col-md-6">
                    <div class="txt-gray robo text-center text-md-end pe-md-2">
                    <p class="txt-gray pb-4 ">
                        A<span class="fw-bold"> Luso Digital Assets</span> negoceia activos digigtais (criptomoeda) ao publico  pela internet
                    </p>
                    <p>
                        Fazemos com que a experiencia do utilizador seja o mais simples e rapida possivel, para que novos investidores, curiousos, sem grande conhecimento tecnico possam entrar neste mercado
                    </p>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="txt-gray text-center robo text-md-start ps-md-2 mt-4 mt-md-5 pt-4">
                    <p class="pb-4">
                        Temos tambem como objectivo a ajuda e educacao aos clientes desta area, de forma a que se sintam seguros a trabalhar connosco, e que tomem responsibilidade pelos seus fundos.
                    </p>
                    <p>
                        Queremos ser a ponte dos activos mobiliarios para os activos digitais.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <!-- mission end -->

        <!-- bellow mission start -->
        <section class="feature-section-space bg-1">
            <div class="max-width">
                <div class="row">
                    <div class="col-12 col-md-6">
                    <div class="pe-md-2">
                        <img class="w-100 minus-margin" src="../assets/images/mission-img.png" alt="">
                    </div>
                    </div>
                    <div class="col-12 col-md-6">
                    <div class="txt-4 text-center robo text-md-start ps-md-2 pt-5 pt-md-0">
                        <p class="font-size-18">What we know is a drop. What we don't know is an ocean, and while criptocurrency may look like the sea of opportunities you'll need a great navigator like luso Digital Assets alongside with you</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- bellow mission end -->
        
        <!-- feature start -->
        <section class="mission-section-space mission-space-b  bg-white">
            <div class="max-width">
                <div class="row flex-column-reverse flex-md-row">
                    <div class="col-12 col-md-6">
                    <div class="txt-gray text-start pe-md-2">
                        <p class="text-uppercase font-size-28 txt-2 mt-5 mt-md-0 letter-space-2">
                        do you want<br class="d-none d-md-block"> to know to more<br class="d-none d-md-block"> about investing in<br class="d-none d-md-block"> criptocurrency with <br class="d-none d-md-block">luso digital assets 
                        </p>
                        <ul class="mb-0 ps-0 pt-4 font-size-18 d-flex flex-wrap align-items-center">
                            <li class="pe-3"><a class="underline txt-2 letter-space-2" href="javascript:;">Features</a></li>
                            <li class="pe-3"><a class="underline txt-2 letter-space-2" href="javascript:;">Support</a></li>
                            <li class="pe-3"><a class="underline txt-2 letter-space-2" href="javascript:;">Criptoguides</a></li>
                        </ul>
                    </div>
                    </div>
                    <div class="col-12 col-md-6">
                    <div class="ps-md-2">
                        <img class="w-100 minus-margin2" src="../assets/images/img2.png" alt="">
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- feature end -->
    </div>
</template>

<script>
import form from 'vuejs-form';

let signin_data = {
    userOremail:'',
    password:'',
};
export default {
  name: 'SignIn',
  
  data(){
    return{
        form: form.default(signin_data).rules({
            userOremail: 'required',
            password:'required',
        }).messages({
            'userOremail.required': 'This field is required.',
            'password.required': 'This field is required.',
        }),
    }
  },
  methods:{
        signin(){
            console.log(this.form.all());
        }
  },
  mounted(){
    
  }
}
</script>
   