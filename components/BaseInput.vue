<template>
  <div class="input-wrapper">
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
        :name="hintMessage[status].icon"
      />
    </label>
    <p
      v-if="hintMessage[status].hint"
      class="input-hint"
    >
      {{ hintMessage[status].hint }}
    </p>
  </div>
</template>

<script setup lang="ts">
enum EStatus {
  Default = 'default',
  Warning = 'warning',
  Error = 'error',
  Success = 'success',
}

const props = defineProps({
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

const hintMessage = computed(() => {
  return {
    [EStatus.Default]: {
      hint: props.hint || '',
      icon: EStatus.Default || '',
    },
    [EStatus.Error]: {
      hint: props.hint || 'Validation Error',
      icon: EStatus.Error,
    },
    [EStatus.Warning]: {
      hint: props.hint || 'Validation Warning',
      icon: EStatus.Warning,
    },
    [EStatus.Success]: {
      hint: props.hint || '',
      icon: EStatus.Success,
    },
  };
});
</script>

<style scoped lang="sass">
.input-wrapper
  +flex($ai: flex-start)
  flex-direction: column
  gap: 6px

.input-hint
  @extend .body-small-500

.input
  height: 49px
  border-radius: 6px
  border: 1px solid $color-gray-100
  overflow: hidden
  +flex()
  gap: 16px
  &.input-default:hover,
  &.input-default:focus-within
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
  &_error
    border-color: $color-error
    & + .input-hint
      color: $color-error
  &_warning
    border-color: $color-warning
    & + .input-hint
      color: $color-warning
  &_success
    border-color: $color-primary
    backrgound-color: $color-primary
    & + .input-hint
      color: $color-primary
</style>
