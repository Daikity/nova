<script setup lang="ts">
interface Props {
    name: string;
    size: number;
    floor: number;
    maxFloor: number;
}
const props = defineProps<Props>()

</script>

<template>
    <div class="room-name">
        <span> {{ props.name }}, {{ props.size }} м<sup>2</sup>, {{ props.floor }}/{{ props.maxFloor }} эт. </span>
    </div>
</template>

<style scoped lang="scss">
.room-name {
    font-size: 40px;
    font-weight: 800;
    line-height: 48.76px;
    text-align: left;
}
</style>
