<script setup>
import axios from "axios";
import {ref, reactive, onMounted} from "vue";
onMounted(async()=>{
    try{
        const result2 = await axios.get('http://localhost:3000/brands')
        markak.value = result2.data
    }
    catch(error){
        console.log(error);
        
    }

})
const markak = ref([]);
const newwatch = reactive({
    Model: '',
    Brand_Id: 0,
    Dial_Color: '',
    Price_USD: 0,

})
const kuld = async () => {
    try {
        const respons = await axios.post('http://localhost:3000/watches', newwatch)

    }catch(err){
        console.log(err);
        
    }
}

</script>
<template>
     <h1>New Watch</h1>
    <label for="">Brand:</label>
    <select v-model="newwatch.Brand_Id">
        <option v-for="marka in markak" :value="marka._id">{{ marka.Name }}</option>
    </select>



    <div class="container">
        <form>
            <div class="mb-3">
                <label for="model" class="form-label">Watch Model</label>
                <input type="text" class="form-control" id="model" name="model" v-model="newwatch.Model">
            </div>
            <div class="mb-3">
                <label for="ar" class="form-label">Price</label>
                <input type="number" class="form-control" id="ar" v-model="newwatch.Price_USD">
            </div>
            <div class="mb-3">
                <label for="color" class="form-label">Color</label>
                <input type="color" class="form-control" id="color" v-model="newwatch.Dial_Color">
            </div>
            <button type="submit" class="btn btn-dark" @click="kuld">Submit</button>
        </form>
    </div>



</template>
<style scoped>

</style>