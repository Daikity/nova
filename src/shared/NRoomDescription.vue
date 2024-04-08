<script setup lang="ts">
interface Props {
    data: string;
}
const props = defineProps<Props>()

</script>

<template>
    <div class="room-description">
        <span v-html="props.data" />
    </div>
</template>

<style scoped lang="scss">
.room-description {
    font-size: 20px;
    font-weight: 500;
    line-height: 24.38px;
    text-align: left;

    span {
        display: flex;
        flex-direction: column;
        gap: 19px;
    }
}
</style>
