<template>
    <div class="container flex justify-center mx-auto">
        <div class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div class="max-w-sm p-6 bg-white divide-y divide-gray-500">
                <div class="flex items-center justify-between">
                    <h3 class="text-2xl">Model Title</h3>
                    <svg @click="$emit('close-modal')" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 hover:cursor-pointer" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </div>
                <div class="mt-4">
                    <p class="mb-4 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
                        qui
                        nihil laborum
                        quaerat blanditiis nemo explicabo voluptatum ea architecto corporis quo vitae, velit
                        temporibus eaque quisquam in quis provident necessitatibus.</p>
                    <button @click="$emit('close-modal')"
                        class="px-4 py-2 text-white bg-red-600 rounded">Cancel</button>
                    <button @click="$emit('close-modal')"
                        class="px-4 py-2 text-white bg-green-600 rounded">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ModalComponent',
    components: {

    },
    setup() {

        return {}
    },

}
</script>
