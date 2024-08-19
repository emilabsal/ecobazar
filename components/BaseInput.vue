<template>
  <label
    :class="`input input_${status}`"
    tabindex="0"
  >
    <input
      v-bind="$attrs"
      class="input__field"
      type="text"
    />
    <NuxtIcon
      v-if="!EStatus.Default"
      class="input__icon"
      :name="status"
    />
  </label>
  <p
    v-if="hint"
    class="input-hint"
  >
    {{ hint }}
  </p>
</template>

<script setup lang="ts">
enum EStatus {
  Default = 'default',
  Warning = 'warning',
  Error = 'error',
  Success = 'success',
}

defineProps({
  status: {
    type: String as PropType<EStatus>,
    default: EStatus.Default,
    validator: (value: EStatus) => {
      return Object.values(EStatus).includes(value);
    },
  },
  hint: {
    type: String,
  },
});
</script>

<style scoped lang="sass">
.input
  height: 49px
  border-radius: 6px
  border: 1px solid $color-gray-100
  overflow: hidden
  +flex()
  gap: 16px
  &:hover,
  &:focus-within
    border-color: $color-primary
  &__field
    outline: none
    border: none
    padding-inline: 16px
    flex-grow: 1
    font-size: 16px
    line-height: 130%
    font-weight: 400
    &::placeholder
      color: $color-gray-400
</style>
