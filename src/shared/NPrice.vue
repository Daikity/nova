<script setup lang="ts">
interface Props {
    price: string;
}
const props = defineProps<Props>()

</script>

<template>
    <div class="room-price">
        <span>От {{ props.price }} ₽</span>
    </div>
</template>

<style scoped lang="scss">
.room-price {
    font-size: 45px;
    font-weight: 600;
    line-height: 54.86px;
    text-align: left;
}
</style>
