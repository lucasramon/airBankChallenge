<!-- Please remove this file from your project -->
<template>
  <Table :fields='fields' :studentData="studentData"></Table>

</template>

<script>
import Table from './Table.vue'

export default {
  name: 'NuxtTutorial',
  components: {
    Table,
  },
  setup() {
    const studentData = [
      { id: "01", Name: "Abiola Esther", Course: "Computer Science", Gender: "Female", Age: "17" },
      { id: "02", Name: "Robert V. Kratz", Course: "Philosophy", Gender: "Male", Age: '19' },
      { id: "03", Name: "Kristen Anderson", Course: "Economics", Gender: "Female", Age: '20' },
      { id: "04", Name: "Adam Simon", Course: "Food science", Gender: "Male", Age: '21' },
      { id: "05", Name: "Daisy Katherine", Course: "Business studies", Gender: "Female", Age: '22' },
    ]
    const fields = [
      'id', 'Name', 'Course', 'Gender', 'Age'
    ]


    return { studentData, fields }
  },

}
</script>
