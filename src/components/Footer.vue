<template>
    <div class="footer">
        <h3>Feito por estudante de engenharia de software uniamerica</h3>
    </div>
</template>

<script lang="ts">
export default {
    name: 'footer'
}
</script>

<style lang="scss">
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 2vw;
    background-color: rgba(255, 255, 255, 0.15);
    ;

    h3 {
        color: #D9D9D9;
        font-size: 0.8vw;
        text-align: center;
        margin: auto;
    }
}
</style>