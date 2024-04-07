<script setup lang="ts">
interface Props {
  buttonColor?: "light" | "orange" | "dark-turquoise";
  buttonType: "button" | "submit" | "reset";
}

const emit = defineEmits(["click"]);

const props = withDefaults(defineProps<Props>(), {
    buttonColor: "light",
    type: "button",
});
</script>

<template>
  <button
    @click="emit('click')"
    :type="props.buttonType"
    :button-color="props.buttonColor"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  padding: 19px 30px;
  transition: .1s;
  font-size: 30px;
  font-weight: 600;
  line-height: 36.57px;
  cursor: pointer;

  &[button-color="light"] {
    border: 2px solid var(--main-dark-turquoise);
    background: #fff;
    &:hover {
      background: var(--main-dark-turquoise);
      color: var(--main-light-orange);
    }
    &:active {
      background: #2B5866;
      color: var(--main-light-orange);
    }
  }
  &[button-color="orange"] {
    background: var(--main-light-orange);
    color: var(--main-dark-turquoise);
    border: hidden;
    &:hover {
      background: var(--main-dark-turquoise);
      color: var(--main-light-orange);
    }
    &:active {
      background: #2B5866;
      color: var(--main-light-orange);
    }
  }
  &[button-color="dark-turquoise"] {
    background: var(--main-dark-turquoise);
    color: var(--main-light-orange);
    border: hidden;
    &:hover {
      color: var(--main-dark-turquoise);
      background: var(--main-light-orange);
    }
    &:active {
      background: #C69565;
      color: var(--main-dark-turquoise);
    }
  }
}
</style>
