<template>
<v-app>
    <navbar></navbar>
    <v-main fill-height class="primary">
        <v-container>
            <v-row>
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
                <v-col cols="12" sm="12" md="5">
                    <div class="align-content-center">
                        <v-img contain src="/img/OPTIMIZE/ayam1.svg"></v-img>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-row class="trans">
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
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="6" md="3">
                    <span class="display-3 text-uppercase border-bottom">produk</span>
                </v-col>
            </v-row>
            <carousel :items='3' :nav='false' :dots="false">
                <v-card elevation="3" class="pa-3 ma-3">
                    <v-card height="250px" class="d-flex align-center" elevation="0">
                        <v-img height="200px" contain src="/img/OPTIMIZE/ayam.png"></v-img>
                    </v-card>
                    <span class="display-1 nunito">Ayam Hidup</span>
                    <p class="text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque magnam earum obcaecati quia repellendus nemo! In ea doloremque, itaque repellendus velit quod consequatur ex tenetur, officia earum obcaecati doloribus!
                    </p>
                </v-card>
                <v-card elevation="3" class="pa-3 ma-3">
                    <v-card height="250px" class="d-flex align-center" elevation="0">
                        <v-img height="200px" contain src="/img/OPTIMIZE/raw3.png"></v-img>
                    </v-card>
                    <span class="display-1 nunito">Ayam Karkas</span>
                    <p class="text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque magnam earum obcaecati quia repellendus nemo! In ea doloremque, itaque repellendus velit quod consequatur ex tenetur, officia earum obcaecati doloribus!
                    </p>
                </v-card>
                <v-card elevation="3" class="pa-3 ma-3">
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
    </v-main>
</v-app>
</template>

<style scoped>
.border-bottom:after {
    content: "";
    float: left;
    background: #1D9969;
    width: 70%;
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
export default {
    name: "App",
    components: {
        navbar,
        slider,
        carousel
    },

    data: () => ({
        active: 4,
        items: 10
    }),
};
</script>
