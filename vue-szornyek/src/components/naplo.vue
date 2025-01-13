<script setup>
const props = defineProps(['naplo'])
</script>

<template>
    <h3>Harci Napló</h3>

    <ul>

        <li v-for="elem in props.naplo">{{ elem }}</li>   
    </ul>

</template>

<style scoped>

</style>