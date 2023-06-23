<template>
    <div class="outer-wrapper">
        <div style="display: flex; justify-content: end;">
            <button type="button" class="btn btn-success" style="display: flex; align-items: end;">Cadastrar</button>
        </div>
        <div class="table-wrapper">
            <table>
                <thead>
                    <th v-for="column in columns" :key="column.field">{{ column.label }}</th>
                    <th>Opções</th>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.id">
                        <td v-for="column in columns" :key="column.field" :class="getCellClass(column.field)">
                            {{ getFormattedValue(item, column.field) }}
                        </td>
                        <td>
                            <div style="display: flex;gap: 0.3vw;">
                                <button type="button" class="btn btn-danger">Excluir</button>
                                <button type="button" class="btn btn-warning">Editar</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Table",
    props: {
        items: {
            type: Array,
            required: true,
        },
        columns: {
            type: Array,
            required: true,
        },
    },
    methods: {
        getCellClass(field: string): string {
            if (field === "id" || field === "ativo") {
                return "centered-cell";
            } else if (field === "condutor" || field === "placa") {
                return "left-aligned-cell";
            } else {
                return "right-aligned-cell";
            }
        },
        getFormattedValue(item: any, field: string): string {
            if (field === "saida" && item.saida === null) {
                return "Em aberto";
            } else if (field === "ativo") {
                return item.ativo ? "Ativo" : "Desativo";
            } else {
                return String(item[field]);
            }
        },
    },
});
</script>
  
<style lang="scss">
.outer-wrapper {
    position: relative;
    margin: auto;
    max-width: fit-content;
    max-height: fit-content;
}

.table-wrapper {
    overflow-y: scroll;
    height: fit-content;
    max-height: 66.4vh;
    color: #92A3FF;
    margin-top: 3px;
    width: 85vw;
}

table {
    table-layout: fixed;
    min-width: max-content;
    border-collapse: separate;
    border-spacing: 0px;
    z-index: 2;
    width: 100%;
    background-color: #92a2ff;
}

table th {
    position: sticky;
    top: 0px;
    background-color: #92A3FF;
    color: rgb(241, 245, 179);
    text-align: center;
    font-weight: normal;
    font-size: 1.2vw;
}

table th,
table td {
    padding: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
}

table td {
    text-align: left;
    font-size: 1.1vw;
    border: 1px solid #92A3FF;
    color: black;
    background-color: rgba(255, 255, 255, 0.818);
}

// <------- Text-align -------> // 

.centered-cell {
    text-align: center;
}

.left-aligned-cell {
    text-align: left;
}

.right-aligned-cell {
    text-align: right;
}

::-webkit-scrollbar {
    width: 8px;
    background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb {
    height: 4px;
    background-color: #D8D8D8;
    transition: background-color 0.3s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #A9A9A9;
}
</style>
  