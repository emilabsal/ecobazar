<template>
  <label
    :class="['radio', { radio_checked: model === $attrs.value }]"
    tabindex="0"
  >
    <input
      v-bind="$attrs"
      v-model="model"
      type="radio"
      hidden
    />
    <span class="radio__circle">
      <span
        v-if="model === $attrs.value"
        class="radio__circle-inner"
      ></span>
    </span>
  </label>
</template>

<script setup lang="ts">
// todo: добавить события enter, space

const model = defineModel();
</script>

<style scoped lang="sass">
.radio
  outline: none
  display: inline-flex
  &:not(.radio_checked):hover,
  &:not(.radio_checked):focus-visible
    .radio__circle
      border-color: $color-primary
  &__circle
    +flex($d: flex)
    width: fit-content
    border: 1px solid $color-gray-200
    border-radius: 50%
    width: 20px
    height: 20px
    cursor: pointer
    transition: $transition
    &-inner
      display: inline-flex
      width: 12px
      height: 12px
      border-radius: 50%
      background-color: $color-primary
  &_checked
    .radio__circle
      border-color: $color-primary
</style>
