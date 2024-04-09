<template>
<div class="rooms" v-for="(room, i) in roomStore.rooms" :key="i" :class="{ 'reverse' : i % 2 !== 0 }">
  <NImgCarousel :images="room.images" :updateTime="5000" />
  <div class="room-info">
    <NRoomClass :stars="room.roomClass.stars" :maxStars="room.roomClass.maxStars" :roomType="room.roomClass.roomType" />
    <NRoomInfo :roomDescription="room.description" :roomName="room.name" />
    <div class="order-data">
      <div class="additional-services" v-if="room.additionalServices">
        <ul>
          <li v-for="(service, i) in room.additionalServices?.shortServices.filter((_, i) => i % 2 !== 0)" :key="i">
            <span>{{ service.name }}: {{ service.description }}</span>
          </li>
        </ul>
        <ul>
          <li v-for="(service, i) in room.additionalServices?.shortServices.filter((_, i) => i % 2 === 0)" :key="i">
            <span>{{ service.name }}: {{ service.description }}</span>
          </li>
        </ul>
      </div>
      <div class="order">
        <div class="price">
          <NPrice :price="room.price.toString()" />
        </div>
        <NButton buttonType="button" buttonColor="light">Забронировать</NButton>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { useRoomStore } from "@/app/stores";
const roomStore = useRoomStore();
</script>

<style lang="scss" scoped>
.rooms {
  display: flex;
  justify-content: center;
  padding: 1rem 10rem;
  gap: 56px;
  margin-top: 60px;

  &.reverse {
    flex-direction: row-reverse;
  }

  .room-info {
    width: 690px;
    padding-bottom: 53px;
    .order-data {
      display: flex;
      flex-direction: column;
      gap: 53px;
      .additional-services {
        border: 2px solid var(--main-light-orange);
        padding-left: 1rem;
        font-size: 20px;
        font-weight: 600;
        line-height: 24.38px;
        text-align: left;
        display: flex;
        ul {
          padding: 1rem 1.5rem;
        }
      }
    
      .order {
        display: flex;
        gap: 40px;
        .price {
          padding: 10px 30px;
          background: var(--main-light-orange);
        }
      }
    }
  }
}
</style>
