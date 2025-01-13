<template>
    <div>
      <h1>Autók gyártók szerint</h1>
      <select @change="fetchCars">
        <option value="" disabled selected>Válassz egy gyártót</option>
        <option v-for="manufacturer in manufacturers" :key="manufacturer.id" :value="manufacturer.id">
          {{ manufacturer.name }}
        </option>
      </select>
      <ul>
        <li v-for="car in cars" :key="car.id">
          {{ car.name }}
          <button @click="navigateToVoting(car.name)">Vote</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useRouter } from "vue-router";
  
  export default {
    name: "HomePage",
    data() {
      return {
        manufacturers: [],
        cars: [],
        selectedManufacturer: null,
      };
    },
    mounted() {
      this.fetchManufacturers();
    },
    methods: {
      async fetchManufacturers() {
        try {
          const response = await fetch("/api/manufacturers");
          this.manufacturers = await response.json();
        } catch (error) {
          console.error("Hiba a gyártók lekérésekor:", error);
        }
      },
      async fetchCars(event) {
        this.selectedManufacturer = event.target.value;
        try {
          const response = await fetch(`/api/cars/${this.selectedManufacturer}`);
          this.cars = await response.json();
        } catch (error) {
          console.error("Hiba az autók lekérésekor:", error);
        }
      },
      navigateToVoting(carName) {
        this.$router.push({ path: "/voting", query: { car: carName } });
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  