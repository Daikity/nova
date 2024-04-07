<template>
  <div class="star">
    <svg width="240" height="41" viewBox="0 0 240 41" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="props.isActive">
      <path d="M20 0.12915L24.4903 13.9488H39.0211L27.2654 22.4898L31.7557 36.3095L20 27.7685L8.2443 36.3095L12.7346 22.4898L0.97887 13.9488H15.5097L20 0.12915Z" fill="#E4B383"/>
    </svg>
    
    <svg width="240" height="41" viewBox="0 0 240 41" xmlns="http://www.w3.org/2000/svg" v-else>
      <path d="M20 0.12915L24.4903 13.9488H39.0211L27.2654 22.4898L31.7557 36.3095L20 27.7685L8.2443 36.3095L12.7346 22.4898L0.97887 13.9488H15.5097L20 0.12915Z" fill="#FFFFFF" stroke="#E4B383" stroke-width="2" />
    </svg>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isActive: boolean;
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.star {
  width: 40px;
  height: 40px;
}
</style>
  
  