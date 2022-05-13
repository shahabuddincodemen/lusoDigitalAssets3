<template>
    <div>

        <!-- banner start -->
        <section class="section-space portfolio-bg">
            <div class="max-width">
                <div class="row">
                    <div class="col-12 col-md-6 text-white text-center text-md-start">
                    <h1 class="font-size-32 pb-4 "> Portfolio</h1>
                    <p class="robo font-size-18">Integer imperdiet felis posuere, malesuada purus et, gravida eros. Nunc semper risus tempor odio dapibus, non venenatis ligula euismod.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- banner end -->

        <!-- portfolio start -->
        <section class="section-space">
            <div class="max-width">
                <div class="w-100 mb-4 d-flex justify-content-between align-content-center">
                <h2 class="txt-2 font-size-32">Portfolio</h2>
                    <button class="px-0">
                    <img class="porfolio-logo cursor" src="../assets/images/porfolio-logo.png" alt="">
                    </button>
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
export default {
  name: 'Portfolio',
  components: {  },
  data(){
    return{
        sliderBtn:'btn1',
        activeTab:'12months',
        yearValue:200,
        yearMax:500,
    }
  },
  methods:{
    setSliderBtn(value){
        this.sliderBtn = value;
        if(this.sliderBtn === 'btn1'){
            this.$router.push({ name: 'welcome'});
        }
        if(this.sliderBtn === 'btn2'){
            this.$router.push({ name: 'home'});
        }
    },
    setTab(value){
        this.activeTab = value;
    },
  },
  mounted(){
    
  }
}
</script>
   