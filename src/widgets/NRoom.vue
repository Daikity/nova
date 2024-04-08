<template>
<div class="rooms" v-for="(room, i) in roomStore.rooms" :key="i">
  <NRoomClass :stars="room.roomClass.stars" :maxStars="room.roomClass.maxStars" :roomType="room.roomClass.roomType" />
  <NRoomInfo :roomDescription="room.description" :roomName="room.name" />
</div>
</template>

<script setup lang="ts">
import { useRoomStore } from "@/app/stores";
const roomStore = useRoomStore();
</script>

<style lang="scss" scoped>
.rooms {
  display: flex;
  flex-direction: column;
  padding: 2.5rem 21.5rem;
  gap: 20px;
}
</style>
          
          