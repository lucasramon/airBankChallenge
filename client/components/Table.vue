
<template>

    <div>

        <table id="tableComponent" class="shadow-lg bg-white">
            <thead>
                <tr>
                    <!-- loop through each value of the fields to get the table header -->
                    <th v-for="field  in fields" :key='field' class="bg-blue-100 border text-left px-8 py-4"
                        @click="sortTable(field)">
                        {{ field }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <!-- Loop through the list get the each student data -->
                <tr v-for="item in sortedList" :key='item.id' class="
                hover:bg-sky-700 hover:cursor-pointer" @click="showModal = true">
                    <td v-for="field in fields" :key='field'
                        class="border px-8 py-4 hover:bg-sky-700 hover:cursor-pointer">{{
                                item[field]
                        }} </td>
                </tr>
            </tbody>
        </table>
        <pagination :options="['10','25','50']" :defaultValue="'10'"></pagination>
        <FilterBar :options="['go', 'python', 'rust', 'javascript']" :defaultValue="'go'"></FilterBar>

        <Modal v-show="showModal" @close-modal="showModal = false"></Modal>

    </div>
</template>
<script>

import Pagination from './Pagination.vue'
import Modal from './Modal.vue';
import FilterBar from './FilterBar.vue';
export default {
    name: 'TableComponent',
    components: {
        Pagination,
        Modal,
        FilterBar
    },
    props: {

        studentData: {
            type: Array,
        },
        fields: {
            type: Array,
        }
    },
    data() {
        console.log('aaaaaa')
        return {
            showModal: false,

        }
    },

    setup(props) {
        const sortedList = props.studentData;
        function sortTable(field) {
            console.log(field)
        }
        return { sortedList, sortTable }
    }




}
</script>
<style scoped>
table th:hover {
    background: #f2f2f2;
}
</style>
