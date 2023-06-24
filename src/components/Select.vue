<template>
    <div class="container">
        <div class="custom-select" :class="{ active: isActive }">
            <div class="select-input" @click="toggleDropdown">
                <input v-model="selectedOptionText" readonly>
                <div class="arrow"></div>
            </div>
            <ul v-show="isActive" class="options">
                <li v-for="option in options" :key="option.value" @click="selectOption(option)">
                    {{ option.label }}
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import router from '../router';

export default defineComponent({
    name: 'Select',
    data() {
        return {
            selectedOption: null as string | null,
            selectedOptionText: '',
            options: [
                { label: 'Movimentação', value: 'option1', route: '/movimentacao/lista' },
                { label: 'Condutor', value: 'option2', route: '/condutor/lista' },
                { label: 'Veículo', value: 'option3', route: '/veiculo/lista' },
                { label: 'Modelo', value: 'option4', route: '/modelo/lista' },
                { label: 'Marca', value: 'option5', route: '/marca/lista' },
            ],
            isActive: false,
        };
    },
    methods: {
        toggleDropdown() {
            this.isActive = !this.isActive;
        },
        selectOption(option: any) {
            this.selectedOption = option.route;
            this.selectedOptionText = option.label;
            this.isActive = false;
            router.push(option.route);
        },
    },
    mounted() {
        const currentRoute = this.options.find(option => option.route === router.currentRoute.value.path);
        if (currentRoute) {
            this.selectedOption = currentRoute.route;
            this.selectedOptionText = currentRoute.label;
        }
    },
    beforeRouteUpdate(to, from, next) {
        const currentRoute = this.options.find(option => option.route === to.path);
        if (currentRoute) {
            this.selectedOption = currentRoute.route;
            this.selectedOptionText = currentRoute.label;
        }
        next();
    },
});
</script>
  
<style lang="scss">
* {
    font-size: 1.1vw;
}

.container {
    display: flex;
    margin: auto;
    justify-content: center;
    margin-top: 1vw;
}

.custom-select {
    position: relative;
    display: inline-block;
}

.select-input {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 0.2vw solid rgb(255, 255, 255);
    border-radius: 0.8vw;
    padding: 0.7vw 0.5vw;
    background-color: transparent;
}

.select-input input {
    flex: 1;
    border: none;
    background-color: transparent;
    color: white;
    outline: none;
    cursor: pointer;
    text-align: center;
    padding: 0;
}

.select-input .arrow {
    width: 0;
    height: 0;
    border-top: 0.5vw solid white;
    border-right: 0.5vw solid transparent;
    border-left: 0.5vw solid transparent;
}

.custom-select.active .select-input {
    border-color: white;
    background-color: transparent;

    .arrow {
        rotate: 180deg;
    }
}

.options {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin-top: 0.2vw;
    padding: 0;
    list-style: none;
    background-color: transparent;
    border: 0.2vw solid rgba(255, 255, 255);
    border-radius: 0.8vw;
    color: white;
    overflow: hidden;
    z-index: 4;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.options li {
    padding: 0.2vw;
    cursor: pointer;
    outline: none;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 0.5);
}

.options li:hover {
    background-color: rgba(211, 211, 211, 0.785);
    color: black;
}

.options li.active {
    background-color: transparent;
    cursor: pointer;
    outline: none;
}
</style>