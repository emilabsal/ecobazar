<template>
  <div class="wrapper">
    <BaseButton
      label="Small Fill"
      icon-right="arrow"
    />
    <BaseInput
      placeholder="hello"
      status="warning"
    />
  </div>
</template>

<script setup>
const c = ref('n');
</script>

<style lang="sass" scoped>
.wrapper
  +flex
  flex-direction: column
</style>
