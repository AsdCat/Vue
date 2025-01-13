<script setup>
import { ref, onMounted } from 'vue';
import  axios from 'axios';
const orak = ref([]);
const markak = ref([]);
const kivalasztotid =ref();
const kivalora = ref([]);

const kivalaszt = ()=>{
    kivalora.value = orak.value.filter((ora)=> ora.Brand_Id === kivalasztotid.value)
    //console.log(kivalora.value);
    
    
}
onMounted(async()=>{
    try{
        const result = await axios.get('http://localhost:3000/watches')
        orak.value = result.data
        const result2 = await axios.get('http://localhost:3000/brands')
        markak.value = result2.data
    }
    catch(error){
        console.log(error);
        
    }
})


</script>
<template>
    <h1>List of Watches: </h1>
    <select v-model="kivalasztotid" @change="kivalaszt">
        <option v-for="marka in markak" :value="marka._id">{{ marka.Name }}</option>
    </select>

    <div class="table table-success table-striped">
        <table>
            <tr>
                <th>Model</th>
                <th>Szín</th>
                <th>Ár</th>
            </tr>
            <tr v-for="ora in kivalora">
                <td>{{ ora.Model }}</td>
                <td>{{ ora.Dial_Color }}</td>
                <td>{{ ora.Price_USD }}</td>
            </tr>
        </table>
    </div>


</template>
<style scoped>

</style>