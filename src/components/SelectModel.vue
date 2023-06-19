<template>
    <div class="container">
        <div class="custom-select" :class="{ active: isActive }">
            <div class="select-input" @click="toggleDropdown">
                <input v-model="selectedOption" readonly>
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

export default defineComponent({
    data() {
        return {
            selectedOption: null as string | null,
            options: [
                { label: 'Movimentação', value: 'option1' },
                { label: 'Condutor', value: 'option2' },
                { label: 'Veículo', value: 'option3' },
                { label: 'Modelo', value: 'option4' },
                { label: 'Marca', value: 'option5' },
            ],
            isActive: false,
        };
    },
    methods: {
        toggleDropdown() {
            this.isActive = !this.isActive;
        },
        selectOption(option: any) {
            this.selectedOption = option.label;
            this.isActive = false;
        },
    },
    mounted() {
        this.selectedOption = this.options[0].label;
    }
});
</script>
  
<style lang="scss">
.container {
    display: flex;
    margin: auto;
    justify-content: center;
    margin-top: 2.8vw;
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
    border: 0.2vw solid white;
    border-radius: 0.8vw;
    padding: 0.7vw;
    background-color: transparent;
}

.select-input input {
    flex: 1;
    border: none;
    background-color: transparent;
    color: white;
    outline: none;
    cursor: pointer;
}

.select-input .arrow {
    width: 0;
    height: 0;
    margin-left: 0.5vw;
    border-top: 0.5vw solid white;
    border-right: 0.5vw solid transparent;
    border-left: 0.5vw solid transparent;
}

.custom-select.active .select-input {
    border-color: white;
    background-color: transparent;
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
    border: 0.2vw solid white;
    border-radius: 0.8vw;
    color: white;
    overflow: hidden;
}

.options li {
    padding: 0.5vw;
    cursor: pointer;
    outline: none;
}

.options li:hover {
    background-color: gray;
}

.options li.active {
    background-color: transparent;
    cursor: pointer;
    outline: none;
}
</style>