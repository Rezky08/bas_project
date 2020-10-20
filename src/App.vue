<template>
<v-app>
    <!-- Navigation -->
    <navbar></navbar>
    <v-main fill-height class="primary">
        <!-- Banner -->
        <v-container>
            <v-row>
                <!-- Banner Content -->
                <v-col cols="12" sm="12" md="7" class="overflow-hidden">
                    <!-- Title Content -->
                    <v-row>
                        <v-col cols="12">
                            <span class="display-1 line-right text-uppercase white--text nunito font-weight-light">RUMAH POTONG UNGGAS</span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <span class="text-uppercase display-2 white--text nunito font-weight-bold">PT. BUNGSU AMANAH SEJAHTERA</span>
                        </v-col>
                    </v-row>
                    <v-row justify="center" v-if="isMobile">
                        <v-col cols="8" sm="5" md="5">
                            <v-img contain src="/img/OPTIMIZE/ayam1.svg"></v-img>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="10" sm="12">
                            <p class="white--text body-1 text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Temporibus, ab! Quas nostrum, minima similique assumenda
                                possimus fuga totam facere inventore optio suscipit hic quis
                                dignissimos, ratione, ab nihil doloremque rem?
                            </p>
                        </v-col>
                    </v-row>
                </v-col>
                <!-- Banner Image -->

                <v-col cols="12" sm="12" md="5" class="d-flex align-center" v-if="!isMobile">
                    <v-img contain src="/img/OPTIMIZE/ayam1.svg"></v-img>
                </v-col>
            </v-row>
        </v-container>
        <!-- Tag Line display in Desktop -->
        <v-row class="trans hidden-sm-and-down">
            <v-col cols="12" md="6" class="white rounded-tr-xl">
                <v-row class="ml-3">
                    <v-col>Lorem ipsum dolor</v-col>
                    <v-col>Lorem, ipsum</v-col>
                    <v-col>Lorem, ipsum dolor sit</v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="6" class="primary rounded-bl-xl">
                <slider :items='items' :active='active'></slider>
            </v-col>
        </v-row>
    </v-main>
    <!-- Tag Line display in Mobile -->
    <v-container fluid class="ma-0">
        <v-row class="hidden-sm-and-up">
            <v-col>Lorem ipsum dolor</v-col>
            <v-col>Lorem, ipsum</v-col>
            <v-col>Lorem, ipsum dolor sit</v-col>
        </v-row>
    </v-container>
    <v-container>
        <v-row>
            <v-col cols="auto">
                <span class="display-1 text-uppercase border-bottom">produk</span>
            </v-col>
        </v-row>
        <!-- Produk carousel -->
        <carousel :items="3" :nav="false" :dots="false" class="hidden-sm-and-down">
            <v-card elevation="3" class="pa-3 ma-3 overflow-hidden" max-height="400px">
                <v-card height="250px" class="d-flex align-center" elevation="0">
                    <v-img height="200px" contain src="/img/OPTIMIZE/ayam.png"></v-img>
                </v-card>
                <span class="display-1 nunito">Ayam Hidup</span>
                <p class="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque magnam earum obcaecati quia repellendus nemo! In ea doloremque, itaque repellendus velit quod consequatur ex tenetur, officia earum obcaecati doloribus!
                </p>
            </v-card>
            <v-card elevation="3" class="pa-3 ma-3 overflow-hidden" max-height="400px">
                <v-card height="250px" class="d-flex align-center" elevation="0">
                    <v-img height="200px" contain src="/img/OPTIMIZE/raw3.png"></v-img>
                </v-card>
                <span class="display-1 nunito">Ayam Karkas</span>
                <p class="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque magnam earum obcaecati quia repellendus nemo! In ea doloremque, itaque repellendus velit quod consequatur ex tenetur, officia earum obcaecati doloribus!
                </p>
            </v-card>
            <v-card elevation="3" class="pa-3 ma-3 overflow-hidden" max-height="400px">
                <v-card height="250px" class="d-flex align-center" elevation="0">
                    <v-img height="200px" contain src="/img/OPTIMIZE/part.png"></v-img>
                </v-card>
                <span class="display-1 nunito">Ayam Potong</span>
                <p class="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque magnam earum obcaecati quia repellendus nemo! In ea doloremque, itaque repellendus velit quod consequatur ex tenetur, officia earum obcaecati doloribus!
                </p>
            </v-card>
        </carousel>
        <carousel :items="1" :nav="false" :dots="false" class="hidden-md-and-up">

            <v-card elevation="3" class="pa-3 ma-3 overflow-hidden" max-height="400px">
                <v-card height="250px" class="d-flex align-center" elevation="0">
                    <v-img height="200px" contain src="/img/OPTIMIZE/ayam.png"></v-img>
                </v-card>
                <span class="display-1 nunito">Ayam Hidup</span>
                <p class="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque magnam earum obcaecati quia repellendus nemo! In ea doloremque, itaque repellendus velit quod consequatur ex tenetur, officia earum obcaecati doloribus!
                </p>
            </v-card>
            <v-card elevation="3" class="pa-3 ma-3 overflow-hidden" max-height="400px">
                <v-card height="250px" class="d-flex align-center" elevation="0">
                    <v-img height="200px" contain src="/img/OPTIMIZE/raw3.png"></v-img>
                </v-card>
                <span class="display-1 nunito">Ayam Karkas</span>
                <p class="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque magnam earum obcaecati quia repellendus nemo! In ea doloremque, itaque repellendus velit quod consequatur ex tenetur, officia earum obcaecati doloribus!
                </p>
            </v-card>
            <v-card elevation="3" class="pa-3 ma-3 overflow-hidden" max-height="400px">
                <v-card height="250px" class="d-flex align-center" elevation="0">
                    <v-img height="200px" contain src="/img/OPTIMIZE/part.png"></v-img>
                </v-card>
                <span class="display-1 nunito">Ayam Potong</span>
                <p class="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque magnam earum obcaecati quia repellendus nemo! In ea doloremque, itaque repellendus velit quod consequatur ex tenetur, officia earum obcaecati doloribus!
                </p>
            </v-card>
        </carousel>
    </v-container>
    <!-- Review Customer -->
    <v-container fluid class="primary">
        <carouselswipe :isMobile='isMobile'>
            <template slot="items">
                <v-carousel-item>
                    <v-row justify="center">
                        <v-col cols="3" md="2">
                            <v-img contain src="/img/user.webp" class="white rounded-circle"></v-img>
                        </v-col>
                        <v-col cols="12" class="text-center">
                            <v-icon color="yellow" class="display-1">mdi-star</v-icon>
                            <v-icon color="yellow" class="display-1">mdi-star</v-icon>
                            <v-icon color="yellow" class="display-1">mdi-star</v-icon>
                            <v-icon color="yellow" class="display-1">mdi-star</v-icon>
                            <v-icon color="yellow" class="display-1">mdi-star-half</v-icon>
                        </v-col>
                        <v-col cols="12" class="text-center font-italic title">
                            "<p>Lorem1, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, similique possimus eos modi vel quos error sint doloribus architecto dolorem iste enim a facilis, assumenda, unde tempore ipsum non ducimus!</p>"
                        </v-col>
                    </v-row>
                </v-carousel-item>
            </template>
        </carouselswipe>
    </v-container>

    <v-container>
        <!-- Lokasi dan Kegiatan -->
        <v-row>
            <v-col cols="auto">
                <span class="display-1 text-uppercase border-bottom">Lokasi dan Kegiatan</span>
            </v-col>
        </v-row>
        <v-row>
            <!-- Image -->
            <v-col cols="12" md="3">
                <v-row>
                    <!-- image display-->
                    <v-col cols="12">
                        <v-card>
                            <v-img src="/img/OPTIMIZE/kandang.png"></v-img>
                        </v-card>
                    </v-col>
                    <!-- image items-->
                    <v-col cols="12">
                        <carousel :items='4' :margin='10'>
                            <v-card>
                                <v-img src="/img/OPTIMIZE/kandang.png"></v-img>
                            </v-card>
                            <v-card>
                                <v-img src="/img/OPTIMIZE/kandang.png"></v-img>
                            </v-card>
                            <v-card>
                                <v-img src="/img/OPTIMIZE/kandang.png"></v-img>
                            </v-card>
                            <v-card>
                                <v-img src="/img/OPTIMIZE/kandang.png"></v-img>
                            </v-card>

                        </carousel>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="8">
                <!-- Image Desc -->
                <span class="headline nunito">Kandang Ayam</span>
                <p class="nunito">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui quod tenetur itaque possimus, suscipit soluta nisi molestiae id voluptatibus eligendi deleniti hic dolor molestias delectus adipisci blanditiis facilis asperiores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quis corporis ut dolorem facilis minima dolorum suscipit at, pariatur, molestiae doloribus, maiores delectus earum reiciendis vitae omnis sunt libero maxime?</p>
            </v-col>
        </v-row>
    </v-container>
    <v-container>
        <v-row>
            <v-col cols="auto">
                <span class="display-1 text-uppercase border-bottom">Kontak Kami</span>
            </v-col>
        </v-row>
        <v-row justify="space-between">
            <v-col cols="12" md="5">
                <v-text-field name="email" label="Email"></v-text-field>
                <v-text-field name="phone" label="Phone"></v-text-field>
                <v-textarea no-resize name="Question" label="Question"></v-textarea>
                <v-btn class="primary">Send</v-btn>
            </v-col>
            <v-col cols="12" md="6">
                <v-row>
                    <v-col cols="12">
                        <span>
                            <v-icon>mdi-phone</v-icon> <span> 0851-5545-2165 </span>
                        </span>
                    </v-col>
                    <v-col cols="12">

                        <span>
                            <v-icon>mdi-email</v-icon> <span> pt.bungsuamanahsejahtera@gmail.com </span>
                        </span>
                    </v-col>
                    <v-col cols="12">
                        <span>
                            <v-icon>mdi-map-marker</v-icon> <span> JL. AMD Cibentang Gg. Limo RT 04 / RW 01 Cibentang Parung Bogor, Kec. Ciseeng </span>
                        </span>
                    </v-col>
                    <v-col cols="12">
                        <iframe class="rounded elevation-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6377887668395!2d106.66852861413977!3d-6.440538664770219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e7093526c033%3A0x55498b798afd100f!2sJl.%20Amd%20Raya%2C%20Cibentang%2C%20Kec.%20Ciseeng%2C%20Bogor%2C%20Jawa%20Barat%2016120!5e0!3m2!1sen!2sid!4v1603154522639!5m2!1sen!2sid" width="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>

    <buttonfloat :isMobile='isMobile'></buttonfloat>
    <v-footer class="primary">
        <v-row class="white--text" justify="space-between">
            <v-col cols="12" md="6">
                <div v-if="currentYear==releaseYear" class="d-block">
                    <span>{{releaseYear}} - </span> <span class="font-weight-bold"> PT. BUNGSU AMANAH SEJAHTERA</span>
                </div>
                <div class="d-block " v-else>
                    <span>{{releaseYear}} - {{currentYear}}</span> <span class="font-weight-bold">PT. BUNGSU AMANAH SEJAHTERA</span>
                </div>

            </v-col>
            <v-col cols="12" md="6">
                <v-row justify="start">
                    <v-col>
                        <v-icon color="white">mdi-instagram</v-icon>
                    </v-col>
                    <v-col>
                        <v-icon color="white">mdi-whatsapp</v-icon>
                    </v-col>

                </v-row>
            </v-col>
        </v-row>
    </v-footer>
</v-app>
</template>

<style scoped>
.widget {
    position: fixed;
    left: 80%;
    top: 90%;
}

.border-bottom:after {
    content: "";
    float: left;
    background: #1D9969;
    width: 90%;
    height: 3px;
    border-radius: 10px;
    margin-top: 5px;
    margin-left: 5%;
}

.nunito {
    font-family: "Nunito" !important;
}
</style>
<style scoped>
.line-right {
    position: relative;
}

.line-right:after {
    content: "";
    position: absolute;
    background: white;
    width: 100px;
    height: 1px;
    border-radius: 3px;
    margin-top: 20px;
    margin-left: 30px;
}

.bg-image-h:before {
    content: "";
    position: absolute;
    background-color: white;
    border-radius: 100%;
    width: 20em;
    height: 20em;
    box-shadow: 0px 6px 40px 10px rgba(0, 0, 0, 0.1);
}

@media only screen and (min-width: 960px) {
    .trans {
        transform: translateY(50%);
    }
}
</style>

<script>
// import HelloWorld from "./components/HelloWorld";
import navbar from "@/components/NavigationBar";
import carousel from 'vue-owl-carousel'
import slider from '@/components/Slider';
import buttonfloat from '@/components/ButtonFloat'
import carouselswipe from '@/components/CarouselSwipe';

export default {
    name: "App",

    data: () => ({
        active: 4,
        items: 10,
        isMobile: false,
        releaseYear: 2020,
        currentYear: new Date().getFullYear()
    }),
    components: {
        navbar,
        slider,
        carousel,
        buttonfloat,
        carouselswipe
    },
    beforeDestroy() {
        if (typeof window === 'undefined') return

        window.removeEventListener('resize', this.onResize, {
            passive: true
        })
    },

    mounted() {
        this.onResize()

        window.addEventListener('resize', this.onResize, {
            passive: true
        })
    },

    methods: {
        onResize() {
            this.isMobile = window.innerWidth < 960
        },
    },
};
</script>
