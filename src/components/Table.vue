<template>
    <div class="outer-wrapper">
        <div class="table-wrapper">
            <table>
                <thead>
                    <th class="id">ID</th>
                    <th>Condutor</th>
                    <th>Placa</th>
                    <th>Entrada</th>
                    <th>Saída</th>
                    <th class="component">
                        <Setting />
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>
                    <tr>
                        <td>Value 1</td>
                        <td>Value 2</td>
                        <td>Value 3</td>
                        <td>Value 4</td>
                        <td>Value 5</td>
                        <td>Value 6</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import Setting from "./Setting.vue";

export default defineComponent({
    name: "Table",
    components: {
        Setting,
    },
    data() {
        return {
            items: [
                { id: 1, nome: "Item 1", placa: "ABC-1234", entrada: "09:00", saida: "17:00" },
                { id: 2, nome: "Item 2", placa: "DEF-5678", entrada: "10:30", saida: "18:30" },
                { id: 3, nome: "Item 3", placa: "GHI-9012", entrada: "08:45", saida: "16:45" },
                { id: 4, nome: "Item 4", placa: "BBC-1334", entrada: "11:00", saida: "17:30" },
                { id: 5, nome: "Item 5", placa: "DDF-5978", entrada: "12:30", saida: "20:30" },
                { id: 6, nome: "Item 6", placa: "GLI-9112", entrada: "13:45", saida: "17:45" },
            ]
        };
    },
});
</script>
  
<style lang="scss">
.outer-wrapper {
    position: relative;
    margin: auto;

    border: 1px solid black;
    border-radius: 4px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.9);
    max-width: fit-content;
    max-height: fit-content;
    margin-top: 1vw;
}

.table-wrapper {

    overflow-y: scroll;
    height: fit-content;
    max-height: 66.4vh;
    color: #92A3FF;
    margin: 15px;
    width: 85vw;
}

table {
    min-width: max-content;
    border-collapse: separate;
    border-spacing: 0px;
    z-index: 2;
    width: 100%;
}

table th {
    position: sticky;
    top: 0px;
    background-color: #92A3FF;
    color: rgb(241, 245, 179);
    text-align: center;
    font-weight: normal;
    font-size: 1.2vw;
    // border-top: 1px solid rgb(177, 177, 177);
}

.id {
    border-left: 1px solid rgb(177, 177, 177);
    ;
}

table th,
table td {
    padding: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
}

table td {
    text-align: left;
    font-size: 15px;
    border: 1px solid rgb(177, 177, 177);
    padding-left: 20px;
    color: black;
    background-color: rgba(255, 255, 255, 0.818);

}

.component {
    color: black;
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
  