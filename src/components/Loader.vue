<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from 'vue'; 

    let isLoading = ref(true); 

    const toggleLoading = (): void => {
        isLoading.value = !isLoading.value; 
    }

    let intervalId: number | undefined;

    const startTimer = (): void => {
        intervalId = window.setInterval(toggleLoading, 1500); 
    }

    const stopTimer = (): void => {
        if (intervalId !== undefined) {
            clearInterval(intervalId);
        }
    }

    onMounted(() => {
        startTimer(); 
    });

    onUnmounted(() => {
        stopTimer();
    });

</script>

<template>
    <div v-if="isLoading" class="loading-screen">
        <h2 class="loading-heading">Loading...</h2>
    </div>
    <div v-else class="loading-screen">
        <h2>Done!</h2>
    </div>
</template>

<style scoped lang="scss">
    .loading-screen {
        width: 200px; 
        height: 150px; 
        background-color: #FFF; 
        color: greenyellow; 
        display: flex; 
        justify-content: center;
        align-items: center;
    }
</style>