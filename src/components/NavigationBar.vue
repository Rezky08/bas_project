<template>
<v-app-bar app color="elevation-0 primary" hide-on-scroll>
    <v-app-bar-nav-icon>
        <v-img src="@/assets/logo-bas-white.svg" alt="logo PT. BUNGSU AMANAH SEJAHTERA" srcset="" aspect-ratio="1" contain />
    </v-app-bar-nav-icon>
    <v-toolbar-title>
        <span class="white--text nunito font-weight-bold">PT. BUNGSU AMANAH SEJAHTERA</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn class="no-hover" depressed color="primary" dark><span class="border-bottom nunito">Produk</span></v-btn>
        <v-btn class="no-hover" depressed color="primary" dark><span class="border-bottom nunito">Kegiatan</span></v-btn>
        <v-btn class="no-hover" depressed color="primary" dark><span class="border-bottom nunito">Kontak</span>
        </v-btn>
    </v-toolbar-items>
</v-app-bar>
</template>

<style scoped>
.border-bottom:after {
    content: "";
    float: left;
    background: white;
    width: 70%;
    height: 3px;
    border-radius: 3px;
    margin-top: 5px;
    margin-left: 15%;
    transition: width 0.2s, margin-left 0.2s;
}

.border-bottom:hover:after {
    width: 100%;
    margin-left: 0%;
}

.no-hover:hover:before,
.no-hover:focus:before,
.no-hover:before {
    background-color: transparent !important;
}
</style>

<script>
export default {
    name: "navbar",
};
</script>
