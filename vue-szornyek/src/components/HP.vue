<script setup>
const props = defineProps({
    szornyeletero: Number,
    eletero:Number,
    style:Object

})
</script>

<template>
  <p>A szörny élete:</p>
  <div  id="kulso">
    <div id="belso" :style="`width:${szornyeletero}%; `">

    </div>
  </div>

  <p>Az életed:</p>
  <div id="kulso">
    <div id="belso" :style="`width:${eletero}%; `">

    </div>
  </div>

</template>

<style scoped>

</style>