<template>
    <div class="gear-container" @click="toggleSettings">
        <img class="gear-icon" :class="{ active: showSettings }" src="../assets/Configuracao.png" alt="Engrenagem">
        <ul v-if="showSettings" class="settings-list">
            <li class="cad">Cadastrar</li>
            <li class="edit">Editar</li>
            <li class="excl">Excluir</li>
        </ul>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'GearComponent',
    data() {
        return {
            showSettings: false
        };
    },
    methods: {
        toggleSettings() {
            this.showSettings = !this.showSettings;
        }
    }
});
</script>
  
<style lang="scss">
.gear-container {
    position: absolute;
    top: 0.5vw;
    right: 0.5vw;
    z-index: 999;
}

.gear-icon {
    width: 30px;
    height: 30px;
    transition: transform 0.6s;
}

.gear-icon.active {
    transform: rotate(90deg);
}

.settings-list {
    list-style: none;
    padding: 0.3vw;
    width: 12vw;
    margin: 0;
    background-color: #92A3FF;
    border: 1px solid #323232;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    position: absolute;
    top: 110%;
    right: 0;
    transform-origin: top;
}

.settings-list li {
    padding: 5px 10px;
    cursor: pointer;
    border-bottom: 1px black solid;
    font-size: 1.2vw;
    height: 6vh;
    text-transform: lowercase;
    // font-family: Alvenir;
}

.settings-list li:hover {
    opacity: 0.8;
}

.cad {
    background-color: lightgreen;
}

.edit {
    background-color: rgb(255, 255, 108);
}

.excl {
    background-color: rgba(255, 0, 0, 0.5);
}
</style>
  