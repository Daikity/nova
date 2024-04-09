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
      additionalServices: {
        longServices: [
          {
            iconUrl: '',
            name: '',
          },
        ],
        shortServices: [
          {
            description: 'Wi-Fi, телевидение',
            name: 'Интернет и ТВ',
          },
          {
            description: '4',
            name: 'Количество гостей',
          },
          {
            description: 'да',
            name: 'Можно с детьми',
          },
          {
            description: 'нет',
            name: 'Можно с животными',
          },
          {
            description: 'нет',
            name: 'Можно курить',
          },
          {
            description: 'нет',
            name: 'Разрешены вечеринки',
          },
          {
            description: 'да',
            name: 'Есть отчётные документы',
          },
        ],
      },
      images: [
        {
          url: 'src/app/assets/img/36ffdea35887be7ee26fa6040c49d846.png',
        },
        {
          url: 'src/app/assets/img/ba434f198b7a15246704d2051c43a7d4.png',
        },
        {
          url: 'src/app/assets/img/d4844d5a9c44eeb09c92a709d31818d9.png',
        },
      ],
    },

    {
      name: {
        floor: 2,
        maxFloor: 2,
        name: 'Комната',
        size: 30,
      },
      description: `<p>Одно комнатный номер премиум класса с большой кроватью оснащён новой мебелью, посудой, техникой, пастельными и банными принадлежностями.</p> 
        <p>Дизайнерский ремонт, кондиционер, холодильник, эл.чайник, питьевая вода в номере.</p>
        <p>В шаговой доступности городской парк, торговый центр, центральный рынок, цент города.</p>`,
      price: 2000,
      roomClass: {
        roomType: 'Премиум',
        stars: 5,
        maxStars: 5,
      },

      additionalServices: {
        longServices: [
          {
            iconUrl: '',
            name: '',
          },
        ],
        shortServices: [
          {
            description: 'Wi-Fi, телевидение',
            name: 'Интернет и ТВ',
          },
          {
            description: '4',
            name: 'Количество гостей',
          },
          {
            description: 'да',
            name: 'Можно с детьми',
          },
          {
            description: 'нет',
            name: 'Можно с животными',
          },
          {
            description: 'нет',
            name: 'Можно курить',
          },
          {
            description: 'нет',
            name: 'Разрешены вечеринки',
          },
          {
            description: 'да',
            name: 'Есть отчётные документы',
          },
        ],
      },
      images: [
        {
          url: 'src/app/assets/img/86da2e6dddfa9d3c0d2848b1cd9b7d49.png',
        },
        {
          url: 'src/app/assets/img/3dba957c2ee85b17caa11b4430e5c796.png',
        },
        {
          url: 'src/app/assets/img/9aa054988077d093a1b26fb906e14fba.png',
        },
      ],
    },
  ])

  return { rooms }
})
