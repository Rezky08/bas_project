<template>
<div id="carousel" v-touch="{
    left: () => model--,
    right: () => model++,
}">
    <v-carousel v-model="model" next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left" delimiter-icon="mdi-dot" hide-delimiter-background :show-arrows='!isMobile' :cycle='true' interval="4000">
        <slot name="items">
        </slot>

    </v-carousel>
</div>
</template>

<script>
export default {
    name: 'carouselswipe',
    data() {
        return {
            model: 0
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
