<template>
<div id="slider">
    <ul class="slider d-flex justify-space-between">
        <li v-for="index in items" :key="index" class="slider-item" :class="index==active?'active':''" @click="active=index">
        </li>
    </ul>
</div>
</template>

<style scoped>
ul.slider li.slider-item {
    display: inline;
}

.slider-item:after {
    content: "";
    background-color: white;
    position: absolute;
    border-radius: 100%;
    height: 2em;
    width: 2em;
}

.slider-item:hover {
    cursor: pointer;
}

.slider-item.active:after {
    content: "";
    background-color: #1D9969;
    position: absolute;
    border-radius: 100%;
    height: 2em;
    width: 2em;
}
</style>

<script>
export default {
    methods: {
        changeItem(index) {
            this.active = index
        }
    },
    props: {
        active: {
            type: Number,
            default: 0
        },
        items: {
            type: Number,
            default: 0
        }
    }
}
</script>
