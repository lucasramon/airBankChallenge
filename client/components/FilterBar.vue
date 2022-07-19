
<template>
    <div>
        <Dropdown :options="options" :default="defaultValue"></Dropdown>
        <DatePicker> </DatePicker>
        <DatePicker> </DatePicker>
    </div>
</template>
<script>


import Dropdown from './Dropdown.vue'
import DatePicker from './DatePicker.vue';
export default {
    name: 'FilterBarComponent',
    components: {
        DatePicker,
        Dropdown
    },
    props: {
        options: {
            type: Array,
            required: true,
        },
        defaultValue: {
            type: String,
            required: false,
            default: null,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
    },

}
</script>
<style >
</style>
