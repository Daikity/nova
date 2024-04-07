<template>
<div class="class-room">
    <div class="stars">
        <NStar v-for="(star, i) in stars" :key="i" :isActive="star.isActive" />
    </div>
    <NClass>{{ props.roomType }}</NClass>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    stars: number;
    maxStars?: number;
    roomType: string;
}

const props = withDefaults(defineProps<Props>(), {
    maxStars: 5,
});

const stars = computed<Array<{ isActive: Boolean }>>(() => {
    const result = [];
    for (let i = 0; i < props.maxStars; i++) {
        props.stars >= i + 1 ? result.push({ isActive : true }) : result.push({ isActive : false });
    }
    return result;
});

</script>

<style lang="scss" scoped>
.class-room {
    display: flex;
    align-items: center;
    gap: 20px;
    .stars {
        flex-wrap: wrap;
        display: flex;
        gap: 10px;
    }
}
</style>
  
  