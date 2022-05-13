<template>
    <div>

        <!-- banner start -->
        <section class="section-space investment-bg">
            <div class="max-width">
                <div class="row">
                    <div class="col-12 col-md-6 text-white text-center text-md-start">
                    <h1 class="font-size-32 pb-4 ">Invest with Luso .</h1>
                    <p class="robo font-size-18">Full transparency.Beign the core of our business philosophy,We believe
                        that the only way to safeguard the interests of our clients is to employ
                        full transparency, mutual trust, and the highest level of commitment.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- banner end -->

        <!-- chart start -->
        <section class="inv-section2 section-space">
            <div class="max-width">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                    <div class="pe-md-5 me-lg-4 text-center text-md-start">
                        <p class="font-size-32">LUSO Digital Assets Investment Fund </p>
                        <p class="pt-4 robo">Integer imperdiet felis posuere, malesuada purus et, gravida eros. Nunc semper risus tempor odio dapi-bus, non venenatis ligula euismod.</p>
                    </div>
                    <div class="padding-top-55 padding-bottom-55">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators inv-s2-slider m-0">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active inv-s2-slider-btn" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="inv-s2-slider-btn" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="inv-s2-slider-btn" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner text-center text-md-start">
                                <div class="carousel-item active">
                                    <div class="row mx-0 justify-content-md-start justify-content-center">
                                        <div class="col-6 p-0">
                                            <p class=" txt-4 font-size-25">Fund</p>
                                            <p class=" font-size-32 txt-2 py-2 py-sm-3">35k</p>
                                            <p class=" txt-4 font-size-25">Net Profit</p>
                                        </div>
                                        <div class="col-6 p-0">
                                            <p class=" txt-4 font-size-25">Average</p>
                                            <p class=" font-size-32 txt-2 py-2 py-sm-3">20.5%</p>
                                            <p class=" txt-4 font-size-25">Net returns</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="row mx-0 justify-content-md-start justify-content-center">
                                        <div class="col-6 p-0">
                                            <p class=" txt-4 font-size-25">Fund2</p>
                                            <p class=" font-size-32 txt-2 py-2 py-sm-3">35k</p>
                                            <p class=" txt-4 font-size-25">Net Profit</p>
                                        </div>
                                        <div class="col-6 p-0 ">
                                            <p class=" txt-4 font-size-25">Average2</p>
                                            <p class=" font-size-32 txt-2 py-2 py-sm-3">20.5%</p>
                                            <p class=" txt-4 font-size-25">Net returns</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="row mx-0 justify-content-md-start justify-content-center">
                                        <div class="col-6 p-0">
                                            <p class=" txt-4 font-size-25">Fund3</p>
                                            <p class=" font-size-32 txt-2 py-2 py-sm-3">35k</p>
                                            <p class=" txt-4 font-size-25">Net Profit</p>
                                        </div>
                                        <div class="col-6 p-0 ">
                                            <p class=" txt-4 font-size-25">Average3</p>
                                            <p class=" font-size-32 txt-2 py-2 py-sm-3">20.5%</p>
                                            <p class=" txt-4 font-size-25">Net returns</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 text-center text-md-start">
                        <button class="w-keep-uptodate-btn mt-4 robo">Keep Up-to-date</button>
                    </div>
                    </div>
                    <div class="col-sm-12 col-md-6 simulation-section">
                    <div class="d-flex flex-wrap justify-content-between align-items-center mb-4">
                        <p class="txt-2 font-size-22 robo pe-2 py-4">SIMULATION</p>
                        <div class="">
                        <select class="form-select inv-s2-select cursor robo" aria-label="Default select example">
                            <option selected>View in &nbsp; USD</option>
                            <option value="1">View in &nbsp; BTC</option>
                            <option value="2">View in &nbsp; NACRE</option>
                            <option value="3">View in &nbsp; GOLD</option>
                        </select>
                        </div>
                    </div>
                    <div class="row robo font-size-sa">
                        <div class="col-3">
                        <p class="txt-2 cursor">12 &nbsp; MONTHS</p>
                        </div>
                        <div class="col-3">
                        <p class="txt-2 cursor">1.5 &nbsp; YEARS</p>
                        </div>
                        <div class="col-3">
                        <p class="txt-2 cursor">2 &nbsp; YEARS</p>
                        </div>
                        <div class="col-3">
                        <p class="txt-2 cursor">5 &nbsp; YEARS</p>
                        </div>
                    </div>
                    <div class="robo">

                        <div class="my-4 py-4">
                            <range-slider-one :trackHeight="0.5"/>
                        </div>

                        <!-- <div class="slidecontainer my-4">
                        <input v-model="value"  type="range" :min="1" :max="100" class="slider rounded-3" id="myRange1">
                        <div class="progressBar1 position-absolute"></div>
                        </div> -->
                        <div class="font-size-sa d-flex  flex-wrap justify-content-between">
                            <p class="txt-2">5.00 USD</p>
                            <p class="txt-2">500.00 USD</p>
                        </div>
                        <!-- <div class="slidecontainer2 my-4 position-relative">
                        <input type="range" min="1" max="100" value="50" class="slider rounded-3" id="myRange2">
                        <div class="progressBar2 position-absolute"></div>
                        </div> -->
                        <div class="my-4 py-4">
                            <range-slider-two :trackHeight="0.5"/>
                        </div>

                        <div class="row mb-5 font-size-sa">
                        <div class="txt-2 col-4">
                            <p>Your <br> Investment </p>
                            <span>15,0.00 USD</span>
                        </div>
                        <div class="txt-2 col-4">
                            <p> Investment <br> Period </p>
                            <span>1.5 YEARS</span>
                        </div>
                        <div class="txt-2 col-4">
                            <p>Estimated <br> Returns </p>
                            <span>40,500 USD</span>
                        </div>
                        </div>
                        <div class="text-center">
                        <button class="w-100 m-0 w-s7-bottom d-flex justify-content-between align-items-center">
                            <div class="w-s7-bottom-text">
                            <span class="w-s7-mbway fs-5">Schedule a Meeting</span>
                            </div>
                            <div>
                            <img class="inv-s2-img" src="../assets/images/img11.png" alt="img">
                            </div>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- chart end -->

        <!-- right-slide start -->
        <section class="section-space mb-4 mb-md-0 bg-white">
            <div class="max-width pb-3">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start">
                        <div class="pe-lg-5 me-lg-4">
                            <h2 class="font-size-32 fw-bold text-dark letter-space">Transaction History </h2>
                        <p class="py-4 font-size-16 robo">Integer imperdict felis posuere malesueda purus et, gravida eros. Nunc
                            semper risus temper odio dapi-bus , non venenatis ligula euismod.</p>
                        <button class="slide-right-btn-2 mt-3 word-space robo">Get Full Report</button>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-4 mt-5 mt-md-0">
                        <div class="">
                            <div id="carouselExampleIndicators2" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators w-s4-slider m-0">
                                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0"
                                    class="active w-s4-slider-btn" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1"
                                    class="w-s4-slider-btn" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2"
                                    class="w-s4-slider-btn" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="row text-center text-md-start">
                                            <div class="col-sm-4 col-6 mx-auto py-3 py-md-0">
                                            <p class=" txt-4 font-size-25">Unique</p>
                                            <p class=" font-size-32 txt-2">+10k</p>
                                            <p class=" txt-4 font-size-25">Trades</p>
                                            </div>
                                            <div class="col-sm-4 col-6 mx-auto py-3 py-md-0 ">
                                            <p class=" txt-4 font-size-25">Overall</p>
                                            <p class=" font-size-32 txt-2">+10k</p>
                                            <p class=" txt-4 font-size-25">Clients</p>
                                            </div>
                                            <div class="col-sm-4 col-6 mx-auto py-3 py-md-0 ">
                                            <p class=" txt-4 font-size-25">Active</p>
                                            <p class=" font-size-32 txt-2">+7.5k</p>
                                            <p class=" txt-4 font-size-25">Users</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row text-center text-md-start">
                                            <div class=" col-sm-4 col-6 mx-auto py-3 py-md-0">
                                            <p class=" txt-4 font-size-25">Unique</p>
                                            <p class=" font-size-32 txt-2">+10k</p>
                                            <p class=" txt-4 font-size-25">Trades</p>
                                            </div>
                                            <div class=" col-sm-4 col-6 mx-auto py-3 py-md-0 ">
                                            <p class=" txt-4 font-size-25">overall</p>
                                            <p class=" font-size-32 txt-2">+10k</p>
                                            <p class=" txt-4 font-size-25">Clients</p>
                                            </div>
                                            <div class=" col-sm-4 col-6 mx-auto py-3 py-md-0 ">
                                            <p class=" txt-4 font-size-25">Active</p>
                                            <p class=" font-size-32 txt-2">+7.5k</p>
                                            <p class=" txt-4 font-size-25">Users</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row text-center text-md-start">
                                            <div class=" col-sm-4 col-6 mx-auto py-3 py-md-0">
                                            <p class=" txt-4 font-size-25">Unique</p>
                                            <p class=" font-size-32 txt-2">+10k</p>
                                            <p class=" txt-4 font-size-25">Trades</p>
                                            </div>
                                            <div class=" col-sm-4 col-6 mx-auto py-3 py-md-0 ">
                                            <p class=" txt-4 font-size-25">Overall</p>
                                            <p class=" font-size-32 txt-2">+10k</p>
                                            <p class=" txt-4 font-size-25">Clients</p>
                                            </div>
                                            <div class=" col-sm-4 col-6 mx-auto py-3 py-md-0 ">
                                            <p class=" txt-4 font-size-25">Active</p>
                                            <p class=" font-size-32 txt-2">+7.5k</p>
                                            <p class=" txt-4 font-size-25">Users</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- right-slide end -->
    </div>
</template>

<script>
import RangeSliderOne from '../components/RangeSliderOne.vue'
import RangeSliderTwo from '../components/RangeSliderTwo.vue'
export default {
  name: 'Investment',
  components: { RangeSliderOne, RangeSliderTwo },
  data(){
    return{
        sliderBtn:'btn1',
        activeTab:'12months',
        yearValue:200,
        yearMax:500,
        sliderValue: 50,
        value: 50,
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