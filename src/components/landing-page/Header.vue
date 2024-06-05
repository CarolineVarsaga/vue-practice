<script setup lang="ts">
    let paragraphText = ""; 
    let person = { "name": "Caroline", "age": 30 }
</script> 


<template>
    <header>
        <h1>{{ person.name + " " + person.age }}</h1>
        <p :id="paragraphText">Detta är en text</p>
    </header>
</template>


<style scoped lang="scss">
    header {
        height: 300px; 
        width: 100vw;
        background-color: greenyellow;
        color: black; 
    }
</style>

