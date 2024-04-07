<script setup lang="ts">
interface Props {
    phone: string;
    color: "orange" | "dark-turquoise";
}
const props = withDefaults(defineProps<Props>(), {
    color: "orange",
});
</script>

<template>
    <div class="contact-phone" :class="`color-${props.color}`">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.85651 6.8379C9.37462 6.13969 9.5604 5.40384 8.97444 4.75431C7.65949 2.91433 6.77515 1.77649 6.22044 1.22854C5.16589 0.186804 3.43112 0.327715 2.51779 1.22765C2.02723 1.71101 1.86116 1.877 1.35747 2.38861C-1.44818 5.19577 0.262847 11.13 4.81139 15.683C9.3589 20.235 15.2926 21.9469 18.1041 19.1338C18.5689 18.6858 18.9624 18.292 19.2728 17.964C20.1678 17.018 20.3037 15.3597 19.2669 14.2824C18.7354 13.7301 17.6503 12.8885 15.7329 11.5169C15.1457 10.9918 14.4494 11.1056 13.811 11.5244C13.504 11.7259 13.2805 11.9297 12.8585 12.3521L12.0923 13.1187C11.9914 13.2197 10.621 12.5334 9.29071 11.2018C7.95972 9.86953 7.2739 8.49906 7.37435 8.39862L8.14112 7.63142C8.27499 7.49742 8.339 7.43254 8.42108 7.34627C8.59209 7.16654 8.73368 7.00344 8.85651 6.8379ZM13.5057 14.5329L14.2721 13.7661C14.5044 13.5337 14.6549 13.3907 14.7773 13.2922C16.457 14.4984 17.4297 15.2568 17.8271 15.6697C18.0656 15.9176 18.0286 16.3699 17.8212 16.589C17.5342 16.8924 17.1613 17.2655 16.7037 17.7068C14.8857 19.5256 10.0959 18.1437 6.22513 14.2691C2.35315 10.3933 0.971883 5.60279 2.7762 3.79748C3.27786 3.28798 3.4368 3.12912 3.92035 2.65265C4.10166 2.47401 4.59552 2.43389 4.81608 2.65176C5.24314 3.07364 6.03534 4.08799 7.20071 5.71133C7.14038 5.78623 7.06503 5.87087 6.97333 5.96724C6.90603 6.03798 6.84996 6.09481 6.72738 6.21751L5.96136 6.98396C4.65821 8.287 5.76802 10.5047 7.87697 12.6157C9.98448 14.7253 12.203 15.8364 13.5057 14.5329Z" />
        </svg>
        <span>{{ props.phone }}</span>
    </div>
</template>

<style scoped lang="scss">
.contact-phone {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
  line-height: 21.94px;
  text-align: left;

  
  $colors: (
    (
      "name": "orange",
      "color": #E4B383,
      "svgColor": #E4B383
    ),
    (
      "name": "dark-turquoise",
      "color": #0D3A48,
      "svgColor": #0D3A48
    )
  );

  @each $color in $colors {
    $name: map-get($color, 'name');
    $colorValue: map-get($color, 'color');
    $svgColorValue: map-get($color, 'svgColor');
      
      &.color-#{$name} {
        span {
          color: $colorValue !important;
        }
        svg {
          fill: $svgColorValue !important;
        }
      }
  }
}
</style>
