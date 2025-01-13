<template>
    <h2>Add users</h2>
    <div>
        <div class="form-group mb-3">
            <label>Name</label>
            <input class="form-control" type="text" v-model="user.name">
        </div>

        <div class="form-group mb-3">
            <label>Lastname</label>
            <input class="form-control" type="text" v-model="user.lastname">
        </div>

        <button 
            class="btn btn-primary" 
            @click.prevent="submitForm"
        >Submit</button>
    </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';

    const user = reactive({
        name:'',
        lastname:''
    });

    const submitForm = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:3000/users',
            data: user
        })
        .then(()=>{
            console.log('sikeres ');
            
        })
        .catch(()=>{
            console.log('HIbaaaaaaaaaa!!!!!!!!!');
            
        })
    }



</script>