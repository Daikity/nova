<script setup lang="ts">
interface Props {
    mail: string;
    color: "orange" | "dark-turquoise";
}
const props = withDefaults(defineProps<Props>(), {
    color: "orange",
});
</script>

<template>
    <div class="contact-mail" :class="`color-${props.color}`">
        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0.5H20C21.1046 0.5 22 1.39543 22 2.5V16.5C22 17.6046 21.1046 18.5 20 18.5H2C0.89543 18.5 0 17.6046 0 16.5V2.5C0 1.39543 0.89543 0.5 2 0.5ZM2 7.11811V16.5H20V7.11853L11 11.6185L2 7.11811ZM2 4.88199L11 9.38245L20 4.88247V2.5H2V4.88199Z" />
        </svg>
        <span>{{ props.mail }}</span>
    </div>
</template>

<style scoped lang="scss">
.contact-mail {
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
