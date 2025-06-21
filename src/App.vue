<template>
    <div class="about">
        <Count />
        <hr>
        <LovePrattle />
    </div>
</template>

<script setup lang="ts" name="App">
import Count from '@/components/count.vue';
import LovePrattle from '@/components/lovePrattle.vue';

</script>

<style>
.about {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}
.about img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}  
.about h1 {
    font-size: 2.5em;
    margin-bottom: 0.5em;
}
.about p {
    font-size: 1.2em;
    line-height: 1.6;
}
.about hr {
    margin: 2em 0;
    border: 0;
    border-top: 1px solid #ccc;
}
.about .love-prattle {
    margin-top: 2em;
}

.about .love-prattle h2 {
    font-size: 2em;
    margin-bottom: 0.5em;
}
.about .love-prattle p {
    font-size: 1.2em;
    line-height: 1.6;
}
.about .count {
    margin-top: 2em;
}
.about .count h2 {
    font-size: 2em;
    margin-bottom: 0.5em;
}
.about .count p {
    font-size: 1.2em;
    line-height: 1.6;
}
.about .count select {
    font-size: 1em;
    padding: 0.5em;
    margin: 0.5em 0;
}
.about .count button {
    font-size: 1em;
    padding: 0.5em 1em;
    margin: 0.5em;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
}
</style>