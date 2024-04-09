<template>
  <div class="pagination">
    <div class="points" v-for="i in props.points" :key="i" :class="{ 'active' : i === props.activePoint + 1 }"/>
  </div>
</template>

<script setup lang="ts">
interface Props {
    points: number;
    activePoint: number;
}
const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  gap: 10px;

  .points {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: #ffffff80;
    
    &.active {
      background: #fff;
    }
  }
}
</style>
    