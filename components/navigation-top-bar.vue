<template>
    <v-app-bar id="floating-action-bar" class="pa-3" density="compact">
        <h2>Navigation Top Bar</h2>
    </v-app-bar>
</template>

<script setup>

</script>

<style scoped>
#floating-action-bar {
    position: sticky;
    top: 0;
    z-index: 100;
}
</style>