<template>
    <Person/>
</template>

<script lang="ts">
    import Person from './components/Person.vue'
    export default {
        name:'App',
        components: {
            Person
        },
    }

</script>

<style>
    .app{
        background-color: aquamarine;
        box-sizing: 10px;
        border-radius: 10px;
        padding: 20px;
    }

</style>