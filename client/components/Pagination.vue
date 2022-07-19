<template>
    <div class="flex items-center space-x-1">
        <a href="#" class="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
        </a>

        <a href="#" class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
            1
        </a>
        <a href="#" class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
            2
        </a>
        <a href="#" class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
            3
        </a>

        <a href="#" class="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </a>

        <Dropdown :options="options" :default="defaultValue"></Dropdown>

    </div>
</template>

<script>
import Dropdown from './Dropdown.vue'

export default {
    name: 'PaginationComponent',
    components: {
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
    },
    setup() {

        return {}
    },

}
</script>
