<template>
  <form>
    <div v-for="(field, index) in fields" :key="index">
      <label :for="field.name">{{ field.label }}</label>
      <template v-if="field.type === 'input'">
        <input :type="field.inputType" :name="field.name" />
      </template>
      <template v-else-if="field.type === 'select'">
        <select :name="field.name">
          <option v-for="(option, optionIndex) in field.options" :key="optionIndex">{{ option }}</option>
        </select>
      </template>
      <template v-else-if="field.type === 'enumSelect'">
        <select :name="field.name">
          <option v-for="(option, optionIndex) in field.enumOptions" :key="optionIndex" :value="option.value">{{
            option.label }}</option>
        </select>
      </template>
      <template v-else-if="field.type === 'time'">
        <input type="time" :name="field.name" />
      </template>
      <template v-else-if="field.type === 'email'">
        <input type="email" :name="field.name" />
      </template>
    </div>
    <button type="submit">Enviar</button>
  </form>
</template>

<script lang="ts">
export default {
  props: {
    fields: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
/* Estilos do seu formulário aqui */
</style>
