<template>
  <label
    :class="checkboxClass"
    tabindex="0"
    @keydown.enter.space="$el.click()"
  >
    <input
      v-bind="$attrs"
      v-model="model"
      type="checkbox"
      hidden
    />
    <span class="checkbox__box">
      <NuxtIcon
        v-if="typeof model === 'boolean' ? model : model.includes($attrs.value)"
        class="checkbox__icon"
        name="check"
      />
      <!-- <NuxtIcon
        class="checkbox__icon"
        name="minus"
      /> -->
    </span>
  </label>
</template>

<script setup>
const model = defineModel();
const attrs = useAttrs();

const checkboxClass = computed(() => [
  'checkbox',
  {
    checkbox_checked:
      typeof model.value === 'boolean'
        ? model.value
        : model.value.includes(attrs.value),
  },
]);
</script>

<style lang="sass" scoped>
.checkbox
  display: inline-flex
  outline: none
  &:not(.checkbox_checked):hover,
  &:not(.checkbox_checked):focus-visible
    .checkbox__box
      border-color: $color-primary
      background-color: transparent
  &__box
    width: 20px
    height: 20px
    border-radius: 3px
    box-sizing: padding-box
    +flex()
    background-color: transparent
    border: 1px solid $color-gray-200
    transition: $transition
    cursor: pointer
  &__icon
    color: $color-white
    font-size: 16px
  &_checked
    .checkbox__box
      background-color: $color-primary
      border: 1px solid $color-primary
</style>
