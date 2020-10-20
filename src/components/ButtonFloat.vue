<template>
<div id="buttonFloat">
    <v-speed-dial transition="slide-y-reverse-transition" v-model="fab" :bottom='true' :right='true' class="hidden-md-and-up" style="position: fixed;" :class="fab?'mr-5':''">
        <template v-slot:activator>
            <v-btn v-model="fab" fab class="primary">
                <v-icon v-if="fab">mdi-close</v-icon>
                <v-img v-else contain src="@/assets/logo-bas-white.svg" :aspect-ratio="isMobile?1.3:3"></v-img>
            </v-btn>
        </template>
        <v-btn fab>
            <v-icon>mdi-whatsapp</v-icon>
        </v-btn>
        <v-btn>
            Produk
        </v-btn>
        <v-btn>
            Kegiatan
        </v-btn>
        <v-btn>
            Kontak
        </v-btn>
    </v-speed-dial>
</div>
</template>

<script>
export default {
    name: "buttonfloat",
    data: () => {
        return {
            fab: false
        }
    },
    props: {
        isMobile: {
            type: Boolean,
            default: false
        }
    }
}
</script>
