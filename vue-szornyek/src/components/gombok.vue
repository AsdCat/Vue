<script setup>
const props = defineProps({
    tamadas: Function,
    tiltas: Boolean
})
</script>

<template>
  <button @click="tamadas(10, 20)">Tamadás</button>
  <button :disabled="tiltas" @click="tamadas(15, 25)">Szupertámadés</button>
</template>

<style scoped>

</style>