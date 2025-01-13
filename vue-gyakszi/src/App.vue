<script setup>
import {  ref, } from 'vue';
const stilus = ref('text-align: center')
const tippek = ref([])
const szamok = ref([])
const joszamok = ref([])
let talalatsz = 0
const lottoszamok = ref([])
const megles = ()=>{
  for (let i = 0; i  <= 90; i++) {

    szamok.value.push(i)

        
    
  }
  for (let i = 0; i  <= 1000; i++) {
    let index1;
    let index2;
    index1 = Math.floor(Math.random()*90  )+1
    index2 = Math.floor(Math.random()*90  )+1
    let seged = szamok.value[index1]
    szamok.value[index1]= szamok.value[index2]
    szamok.value[index2]= seged
    
    
  }
  for (let i = 0; i  <= 5; i++) {

    joszamok.value.push(szamok.value[i])
    lottoszamok.value+=`${joszamok.value[i]}`    

  }
  for (let i = 0; i  <= 5; i++) {
    for (let j = 0; i  <= 5; j++){
      if (tippek.value[i]=== joszamok.value[j]) {
        talalatsz++
        
      }

    }


  }

  

  
}

</script>

<template>
  <h1 :style="stilus">Lottó</h1>
  <br>
  <p>Tippen</p>
  <br>
  <input type="text" v-model="tippek[0]"><br>
  <input type="text"v-model="tippek[1]"><br>
  <input type="text"v-model="tippek[2]"><br>
  <input type="text"v-model="tippek[3]"><br>
  <input type="text"v-model="tippek[4]"><br>
  <button @click="megles">Megnéz</button><br>
  <div>Lottó Számok:{{lottoszamok}}</div><br>
  <div>Találatok: {{talalatsz}}</div>


 





</template>

<style scoped>
p{
  font-weight: bold;
}
input{
  border: 1px solid gray;
  border-radius: 7%;
}
</style>
