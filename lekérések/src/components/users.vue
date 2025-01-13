<template>
    <div v-if="loading">
        <app-loader></app-loader>
    </div>
    <div v-else class="row">
        <div class="col-auto mb-4" v-for="user in data.users">
            <div class="card" style="width: 14rem;">
                <img 
                    class="card-img-top" 
                    :src="`https://placebeard.it/300/300?${ user.id }`"
                    alt="Card image cap"
                >
                <div class="card-body">
                    <div class="card-text">
                        <strong>Name:</strong> {{ user.name }}
                    </div>
                    <div class="card-text">
                        <strong>Lastname:</strong>  {{user.lastname}}
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script setup>
import getUser from '@/composables/getusers';


const {data, loadUsers} =  getUser()
loadUsers()






</script>