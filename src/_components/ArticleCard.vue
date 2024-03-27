<script setup>
    defineProps({title: String, image: String})
</script>


<template>
        <div>
            <img class="mx-auto" :src="image">
        </div>
        <div>{{ title }}</div>
</template>


