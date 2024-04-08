import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { RoomData } from '../libs/interfaces';

export const useRoomStore = defineStore('room', () => {

  const rooms = ref<Array<RoomData>>([
    {
      name: {
        floor: 1,
        maxFloor: 2,
        name: '2-к. квартира',
        size: 55,
      },
      description: `<p>Уют и атмосферу создаст приятный дизайнерский ремонт, отопление — система тёплых полов, телевизор, кондиционер, 
        посудомоечная машина, холодильник, стиральная машинка, эл.чайник, газ.плита, установлен фильтр очистки воды, утюг и гл.доска и др.</p> 
        <p>Патио — отдельный дворик с уличной мебелью, мангалом и озеленением. В шаговой доступности городской парк, торговый центр Центрум, центральный рынок, цент города.</p>`,
      price: 3000,
      roomClass: {
        roomType: 'Люкс',
        stars: 5,
        maxStars: 5,
      },
      additionalServices: [],
    },
  ])

  return { rooms }
})
