<script setup>
import { ref } from 'vue';
import Naplo from './components/naplo.vue';
import gombok from './components/gombok.vue';
import HP from './components/HP.vue';


const szornyeletero = ref(100)
const eletero = ref(100)
const nyertes = ref('')
const korok = ref(0)
const tiltas = ref(false)
const naplo = ref([])


const tamadas=(min, max)=>{
  let szam = Math.floor(Math.random()*(max-min))+min;
  let szam2 = Math.floor(Math.random()*(max-min))+min;

  korok.value++
  if(korok.value%3 !==0 ){
    tiltas.value =true
  }
  else{
    tiltas.value = false
  }
  
  if(szornyeletero.value-szam> 0){
    szornyeletero.value -= szam

  }
  else{
    szornyeletero.value=0
  }

  if(eletero.value-szam2> 0){
    eletero.value -= szam2

  }
  else{
    eletero.value=0
  }
  let naploelem = ''
  if(min === 10){
    naploelem = `Sima támadás - Szörny:${szornyeletero.value}- Te:${eletero.value}`
  }
  else{
    naploelem = `Speciális támadás - Szörny:${szornyeletero.value}- Te:${eletero.value}`
  }
  naplo.value.push(naploelem)

  
  if(szornyeletero === 0 && eletero === 0){
    nyertes.value = 'Döntetlen lett!'
  }
  else if(szornyeletero === 0 ){
    nyertes.value = 'A szörny a nyertes!'
  }
  else if(eletero === 0){
    nyertes.value = 'Te nyertél!'

  }

  //console.log(eletero.value);
  //console.log(szam);
  //console.log(eletero.value);
  
}

</script>

<template>
    <p>A szörny élete:</p>
  <div id="kulso">
    <div id="belso" :style="`width:${szornyeletero}%; `">

    </div>
  </div>

  <p>Az életed:</p>
  <div id="kulso">
    <div id="belso" :style="`width:${eletero}%; `">

    </div>
  </div>


  <gombok :tamadas="tamadas" :tiltas="tiltas"/>

  <Naplo :naplo="naplo"/>
  <HP :eletero="eletero" :szornyeletero="szornyeletero" :style="style"/>




  <div v-if="szornyeletero === 0 || eletero === 0">
    {{ nyertes }}
  </div>
</template>

<style scoped>
#kulso{
  width: 50%;
  height: 50px;
  background-color: bisque;
}
#belso{
  width: 100%;
  height: 50px;
  background-color: green;
}
</style>
