<template>
  <div class="pagination">
    <div class="points" v-for="i in props.points" :key="i" :class="{ 'active' : i === activePoint }" /> {{ activePoint }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

interface Props {
    points: number;
    updateTime?: number;
}

const emits = defineEmits(['changedPoint']);

const props = defineProps<Props>();

const activePoint = ref<number>(1);

onMounted(() => {
  setInterval(() => {
    if (props.points - 1 >= activePoint.value) {
      activePoint.value++;
    } else activePoint.value = 1;
  }, props.updateTime || 2000)
})


watch(activePoint, () => {
  emits('changedPoint', activePoint.value)
})

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
    