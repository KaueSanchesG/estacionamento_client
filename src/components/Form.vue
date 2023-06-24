<template>
  <div class="outterContainer">
    <form class="formContainer">
      <div class="temp" v-for="(field, index) in fields" :key="index">
        <label class="label" :for="field.name">{{ field.label }}</label>
        <template v-if="field.type === 'input'">
          <input :type="field.inputType" :name="field.name" />
        </template>
        <template v-else-if="field.type === 'select'">
          <select class="label" :name="field.name">
            <option v-for="(option, optionIndex) in field.options" :key="optionIndex">{{ option }}</option>
          </select>
        </template>
        <template v-else-if="field.type === 'enumSelect'">
          <select class="label" :name="field.name">
            <option v-for="(option, optionIndex) in field.enumOptions" :key="optionIndex" :value="option.value">{{
              option.label }}</option>
          </select>
        </template>
        <template v-else-if="field.type === 'time'">
          <input class="label" type="time" :name="field.name" />
        </template>
        <template v-else-if="field.type === 'email'">
          <input class="label" type="email" :name="field.name" />
        </template>
      </div>
      <button type="submit" class="btn btn-success">Enviar</button>
    </form>
  </div>
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
.outterContainer {
  position: relative;
  margin: auto;
  max-width: fit-content;
  max-height: fit-content;
}

.formContainer {
  height: fit-content;
  max-height: 66.4vh;
  width: 70vw;
  background-color: cyan;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(0, max-content));
  // display: flex;
  justify-content: center;
  // align-items: center;
  // flex-direction: column;
  border-radius: 20px;
  padding: 1vw;
  gap: 0.5vw;
  overflow-y: scroll;
}

.temp {
  display: flex;
  flex-direction: column;
  max-width: 15vw;
}

.label {
  text-align: center;
}

button[type="submit"] {
  border: 1px gray solid;
  border-radius: 5px;
  width: fit-content;
  padding: 6px 30px;
}
</style>
