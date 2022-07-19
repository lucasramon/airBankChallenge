<template>
    <div class="container  text-center mt-5 mb-5">
        <h1 class="mt-5">Vue 3 V-Model Binding with Input Date Working Example</h1>
        <input class="border mt-2"  type="date" v-model="mytime">
        <h2 class="mt-2">{{ mytime }}</h2>
    </div>
</template>

<script>

export default {
    name: 'DatePickerComponent',
    components: {

    },
    setup() {

        return {}
    },
    data() {
        return {
            mytime: '',
        }
    },

}
</script>
