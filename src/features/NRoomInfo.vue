<template>
<div class="room-info">
  <NRoomName :name="props.roomName.name" :size="props.roomName.size" :floor="props.roomName.floor" :maxFloor="props.roomName.maxFloor" />
  <NRoomDescription :data="props.roomDescription" />
</div>
</template>

<script setup lang="ts">
import type { RoomName } from '@/app/libs/interfaces';

interface Props {
    roomName: RoomName;
    roomDescription: string;
}
const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.room-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
      
      