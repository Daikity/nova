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
          url: 'https://s3-alpha-sig.figma.com/img/fc6d/1a6a/d4844d5a9c44eeb09c92a709d31818d9?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IMHtU3KiZBLtgKk~PYMUktDDhwrEi9Zm-OlzXUzHE5kYugHigQd9uzT7j2JoSytyQC1crpUmS~E4aLGztkVUgcLS9TgKR~u84FvbbeB2B0hJS7KqEEths0n5CFZ8HtxLQxcbYSD25uXlT6kLSq5a0Uq3yWmg6YhwBM5PQX0~7g7kVnPw1M9-ApCCrU8kTq-VGQfsNTowgjK1Lnk9fGGxYzdCkJhKfHbBNBiDQqsR4X33BJY--DQRX4kuVSUVFz3GO0RWZQUv8iyGiRAoov5bqXqKgl0qof7fURPzoKNUR8K5HvNJnOBmtXHrHrJXCH3s7q0Zu5iAH2xiXG5VkvGz8A__',
        },
        {
          url: 'https://s3-alpha-sig.figma.com/img/2bd4/7778/ba434f198b7a15246704d2051c43a7d4?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KuHxRiQEwdw~nsZ~dr4xFfUH-1oDtSCWTK5rST6SHBTU0GsAXlD~g0tI8IX9coSc-Hc4AwWI48agY3zcN5u2~qqBYZCJolJWDqK4ntwu5HXtU39fKQ8qGE0O5egAjCgwVJ0DOQoOpOFoQDvS2PaDFIMcirKd7maAI2uKzRv~ILjJOfzVj0dLIZc3M62E4nLZu1ildoH3KZmhKR4xqb1ZsSeJdpkMxdvcp-208LaYGqSYe~ROGlTui9T~3iOqUcqsfu~-ZFFMrKRHMlKuzsOw0RFkB~1eLwO7rt8Ll2C~qn9ITFvpWwPf9IZj6Uc-w-VsjrlqF1jKqXcQ-cwTB~xMGQ__',
        },
        {
          url: 'https://s3-alpha-sig.figma.com/img/9b73/fe2c/36ffdea35887be7ee26fa6040c49d846?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XrUbi5eXn9MiBIYT~kbJink8r7m4ECx-UAderpVfTiA3eH2RiFeu9ypRoQR5ynvdOja4XQaYWn0GQxU3zXihHic~-ctBEQEOcNMNbEKP9-M6yl~vMw9cylsZSS4GJFu0yaYtBlR5Tc~4phmMYQw6YT3VvMHImeKU2bSX5pjzM6rhliYsA4eJQFk3HsAWl5-0rvYgXsPLxWNEAOqTYCzLzWx3BfAIogpeOfiBAI9wz3nBi~Jb5oTmaQY68T6F3qmZ~IxK-2E45Zav3OjHP5XTubhcQyHVnbJs4uQ0F9cdGJIVUFSG-t25xhlIz~FviEdnJazBVdgoWne3RbFGLRxytg__',
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
          url: 'https://s3-alpha-sig.figma.com/img/81be/ce34/86da2e6dddfa9d3c0d2848b1cd9b7d49?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RgmebrBXKth3j-iYLfZE7wJSKFAXsBd0-M-o6BOvgQog44vbxG7tUkJ0CasMOtA~NsNesgOWOqHEdFN1BSy7ApNCjyv37ZdkkLAj6VQQIkaweBwRCn-Ak1MZhZ77C5dYtDF66YGeIezQx-bi1jbPd5Xo1VHT8VQ0~iDB84O3oP2hvb6gJTOtSsFFjgZsOJCLH6V8B9Y-Bj92OxsnssaTaEQcBNF4EsGYPp-SwY7Zk6wHXZUbowEHKuH7RtFxl4r1H~SUNixfIWHkZjmrzikjTCLMAurap4rzIYFjewJL8Kt~Kn9ewCZy7VSwtQlT8Sc6DMz1gnM825eei~vQgiguSA__',
        },
        {
          url: 'https://s3-alpha-sig.figma.com/img/76da/eb77/d60e0d3f35d8d0832c4203c254ab90a6?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yr4PQ9Rubkqs1tayF3HskpJgNgtkGiS6owajlviJZiEehFqF8Gel3zf7Q7iVrF6q18rYVQvu3C3VUFbaOsClYqCHkTwlBs0iKwOfF3pIhXKHqXtkAf2-VqDi7J6qoJPESZvAbHhkXKiO~S56IJ-J2rNvhnx8X8qErHJpkipjY9x-i4kVDOtnHO2f9GnMjiUakXUOlI3b7i28a~e3YdicaegNNTQwYnQIbMk2K4jqJiOomUnZ5e25sHIUjRzo1VD66pGFnmjvIMc29frk~-ehGRor0L4fNjzgLZT~HIwoys5ttH8n1jp-ohEpF0iZHSGlN~e29RX5wopa~mA9Cnk~QA__',
        },
        {
          url: 'https://s3-alpha-sig.figma.com/img/109b/d719/9aa054988077d093a1b26fb906e14fba?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TSviCMQ0TClXOINvnBP6Y0V3OWPoop1ZOGx0sea3vJuHMSfQIA60Elya~nbWwlVaUb2XSmSTLKhVpNXau0n2WO1CGgM4lcRQJtiJGVfJScY6im1eyc~LMlE7VKkE983b9XJKglFtd6RYlPXnYr1gxLmOxhc21cUOZ0-aRmbtXKFgVylCmx3wdfDWNhOQL7mCkZTTDxVQ2nwWKGk4DIk1Dao11ddhBzDEci8wzOHzpXQuaerflLErCmfwr5lq1y2CkhxrsSgkG65l9lGh2lUL4BVog8-RouIpHq4Vam3u~uiAXNTypLxAYONQpgKttLk6-WTR2V0VK4Ir2nFLIZf9Gw__',
        },
      ],
    },
  ])

  return { rooms }
})
