<template>
  <div class="arrows">
    <div class="arrow-left" @click="left">
      <img src="../app/assets/icons/arrow.svg">
    </div>
    <div class="arrow-right" @click="right">
      <img src="../app/assets/icons/arrow.svg">
    </div>
  </div>
</template>
  
<script setup lang="ts">
const emits = defineEmits(['left', 'right'])

const left = (): void => emits('left');
const right = (): void => emits('right');
</script>
  
<style lang="scss" scoped>
.arrows {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;

  $positions: (("name": "left", "rotate": rotate(180deg)), ("name": "right", "rotate": rotate(0)));
  @each $position in $positions {
    $name: map-get($position, 'name');
    $rotate: map-get($position, 'rotate');
      
      .arrow-#{$name} {
        display: flex;
        align-items: center;
        cursor: pointer;
        transform: $rotate;
      }
  }
}
</style>
      