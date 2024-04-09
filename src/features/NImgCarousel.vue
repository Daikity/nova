<template>
  <div class="img-carousel-container">
    <div class="images">
      <div v-for="(img, i) in props.images" :key="i">
        <Transition name="slide-up">
          <img :src="img.url" v-if="activeImg === i">
        </Transition>
        </div>
      <NArrowControls @left="left" @right="right" />
    </div>
    <NPaginationImg :points="props.images.length" :activePoint="activeImg" />
  </div>
</template>
    
<script setup lang="ts">
import type { Images } from '@/app/libs/interfaces';
import { onMounted, ref } from 'vue';

interface Props {
  images: Array<Images>
  updateTime?: number
}

const props = defineProps<Props>()
const activeImg = ref<number>(0)

const left = (): void => {
  if (activeImg.value === 0) {
    activeImg.value = props.images.length - 1;
  } else activeImg.value--;
}
const right = (): void => {
  if (activeImg.value === props.images.length - 1) {
    activeImg.value = 0;
  } else activeImg.value++;
}


onMounted(() => {
  setInterval(() => {
    if (activeImg.value === props.images.length - 1) {
      activeImg.value = 0;
    } else activeImg.value++;
  }, props.updateTime || 2000)
})
</script>
  
<style lang="scss" scoped>
.img-carousel-container {
  display: flex;
  flex-direction: column;
  width: 417px;
  height: 696px;
  position: relative;
  align-items: center;
  overflow: hidden;
  
  .images {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 417px;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      z-index: 100;
      height: 100%;
    }
  }
  .pagination, .arrows {
    z-index: 999;
  }
  .pagination {
    margin-bottom: 20px;
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(417px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-417px);
}
</style>