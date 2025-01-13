<template>
    <div>
        <h1>Szavazás</h1>
        <p>Kiválasztott autó: {{ selectedCar }}</p>
        <form @submit.prevent="submitVote">
            <select v-model="selectedCar">
                <option value="" disabled selected>Válassz egy autót</option>
                <option v-for="car in cars" :key="car.id" :value="car.name">
                    {{ car.name }}
                </option>
            </select>
            <button type="submit">Vote</button>
        </form>
        <p v-if="message">{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: "VotingPage",
    data() {
        return {
            cars: [],
            selectedCar: this.$route.query.car || "",
            message: "",
        };
    },
    mounted() {
        this.fetchCars();
    },
    methods: {
        async fetchCars() {
            try {
                const response = await fetch("/api/cars");
                this.cars = await response.json();
            } catch (error) {
                console.error("Hiba az autók lekérésekor:", error);
            }
        },
        async submitVote() {
            try {
                const response = await fetch("/api/vote", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ car: this.selectedCar }),
                });
                if (response.ok) {
                    this.message = "Sikeres szavazás!";
                } else {
                    const error = await response.json();
                    this.message = `Hiba: ${error.message}`;
                }
            } catch (error) {
                console.error("Hiba a szavazás elküldésekor:", error);
            }
        },
    },
};
</script>

<style scoped></style>