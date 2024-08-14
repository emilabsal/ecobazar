<template>
  <component
    :class="[
      `button button_${design} button_${size}`,
      { 'body-tiny-600': size === 'small' },
      { 'body-small-600': size === 'medium' },
      { 'body-medium-600': size === 'large' },
    ]"
    :is="component"
  >
    <span
      class="button__label"
      v-if="label"
      >{{ label }}</span
    >
    <NuxtIcon
      v-if="iconRight"
      class="button__icon-right"
      :name="iconRight"
    />
  </component>
</template>

<script lang="ts" setup>
type Component = 'button' | 'a' | 'nuxt-link';

defineProps({
  component: { type: String as PropType<Component>, default: 'button' },
  label: String,
  iconRight: String,
  design: {
    type: String,
    default: 'ghost',
    validator: (value: string) => {
      return ['fill', 'border', 'ghost', 'icon', 'icon-primary'].includes(
        value
      );
    },
  },
  size: {
    type: String,
    default: 'small',
    validator: (value: string) => {
      return ['small', 'medium', 'large'].includes(value);
    },
  },
});
</script>

<style lang="sass" scoped>
.button
  cursor: pointer
  transition: $transition
  display: flex
  align-items: center
  gap: 8px
  &__icon-right
    font-size: 15px
  // design
  &_fill
    background-color: $color-primary
    border: 2px solid $color-primary
    color: $color-white
    border-radius: 43px
    &:hover,
    &:focus-visible
      background-color: $color-primary-dark
      border: 2px solid $color-primary-dark
  &_border
    color: $color-primary
    border: 2px solid $color-primary
    border-radius: 43px
    &:hover,
    &:focus-visible
      color: $color-primary-dark
      border: 2px solid $color-primary-dark
  &_ghost
    color: $color-primary
    background-color: rgba($color-primary, 10%)
    border-radius: 43px
    &:hover,
    &:focus-visible
      color: $color-primary-dark
      background-color: rgba($color-primary-dark, 20%)
  &_icon-primary
    padding: 0
    width: 40px
    height: 40px
    border-radius: 50%
    box-shadow: 0 4px 4px 0 rgba(#000, 25%)
    background-color: $color-white
    .button__icon-right
      color: $color-gray-900
    &:hover,
    &:focus-visible
      background-color: $color-primary
      box-shadow: initial
    .button__icon-right
      color: $color-white
  &_icon_social
    padding: 0
    width: 40px
    height: 40px
    display: flex
    align-items: center
    justify-content: center
    background-color: transparent
    .button__icon-right
      color: $color-gray-700
    &:hover,
    &:focus-visible
      background-color: $color-primary
      color: $color-white
  &_icon.button
    padding: 0
    width: 40px
    height: 40px
    border-radius: 50%
    background-color: $color-primary
    .button__icon-right
      font-size: 20px
      color: $color-white
    &:hover,
    &:focus-visible
      background-color: $color-primary-dark



  // size
  &_small
    padding: 8px 24px
    min-height: 36px
  &_medium
    padding: 12px 32px
    min-height: 45px
  &_large
    padding: 14px 40px
    min-height: 51px
</style>
