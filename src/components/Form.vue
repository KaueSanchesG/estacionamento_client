<template>
  <div class="outterContainer">
    <div class="nomeRota" style="">
      {{ nomeRota }}
    </div>
    <form class="formContainer" @submit.prevent="submitForm">
      <div class="temp" v-for="(field, index) in fields" :key="index"
        :class="{ lastElement: index === fields.length - 1 }">
        <label class="label" :for="field.name">{{ field.label }}</label>

        <template v-if="field.type === 'input'">
          <input class="estilo" :type="field.inputType" :name="field.name" v-model="field.value" />
        </template>

        <template v-else-if="field.type === 'select' || field.type === 'enumSelect'">
          <select class="label estilo" :name="field.name" v-model="field.value">
            <option v-for="(option, optionIndex) in getFieldOptions(field)" :key="optionIndex">
              {{ option.label }}
            </option>
          </select>
        </template>

        <template v-else-if="field.type === 'time' || field.type === 'email'">
          <input class="label estilo" :type="field.type" :name="field.name" v-model="field.value" />
        </template>
      </div>
    </form>
    <div class="botoes">
      <button type="button" class="btn btn-danger slc" @click="voltar">Voltar</button>
      <button type="button" class="btn btn-success slc" @click="submitForm">Enviar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  props: {
    fields: {
      type: Array as () => { label: string; name: string; type: string; value: any; inputType?: string; options?: string[]; enumOptions?: { value: string; label: string }[] }[],
      required: true
    },
  },
  computed: {
    nomeRota(): string {
      const rotaAtual = useRouter().currentRoute.value.fullPath;
      const partesRota = rotaAtual.split('/');
      const nomeRota = partesRota[1];
      if (nomeRota) {
        return nomeRota + ' Cadastra';
      }
      return '';
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit');
    },
    voltar() {
      this.$router.go(-1);
    },
    getFieldOptions(field: { options?: string[]; enumOptions?: { value: string; label: string }[] }): { value: string; label: string }[] {
      if (field.options) {
        return field.options.map((option) => ({ value: option, label: option }));
      } else if (field.enumOptions) {
        return field.enumOptions;
      }
      return [];
    },
  }
});
</script>

<style lang="scss">
.outterContainer {
  position: relative;
  margin: auto;
  margin-top: 1vw;
  max-width: fit-content;
  max-height: fit-content;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 0.5vw 0.7vw;
}

.formContainer {
  height: fit-content;
  max-height: 66.4vh;
  width: 70vw;
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border-radius: 20px;
  padding: 1vw;
  gap: 0.5vw;
  overflow-y: scroll;
}

.temp {
  display: flex;
  flex-direction: column;
  max-width: 15vw;
  width: calc(50% - 0.5vw);
  margin-bottom: 1vw;
}

.label {
  text-align: center;
}

.estilo {
  padding: 0.5vw;
  border-radius: 10px;
  border: 2px lightgray solid;
}

.botoes {
  padding: 0.6vw 1vw;
  display: flex;
  justify-content: space-between;
}

.lastElement {
  width: 100%;
  align-self: center;
}

.slc {
  border: 1px gray solid;
  border-radius: 5px;
  width: fit-content;
  padding: 6px 30px;
}
</style>
